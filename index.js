const dbName = process.argv[2];
const docID = process.argv[3];
const path = process.argv[4];
const dbUrl = process.argv[5];

const jp = require('jsonpath');
const nano = require('nano')(dbUrl);
const db = nano.db.use(dbName);

db.get(docID, {revs_info: true})
    .then((body) => {
        const arr = body._revs_info.reverse().filter((revInfo) => {
            return revInfo.status === 'available'
        });
        getAll(arr).then(all => {
            all.forEach((revDoc) => {
                console.log('Doc rev:', revDoc._rev + '\t' + path + ':', jp.value(revDoc, path)); // + '\tdateUpdatedByApp:', revDoc.dateUpdatedByApp);
            });
            console.log(all.length + '\tAvailable revisions');
            console.log('dbName:\t', dbName);
            console.log('docID:\t', docID);
            console.log('path :\t', path);
            // console.log('DB url:\t', dbUrl);
        });
    });

async function getAll(arr) {
    const pArray = arr.map(async revInfo => {
        return await db.get(docID, {rev: revInfo.rev});
    });
    return await Promise.all(pArray);
}
