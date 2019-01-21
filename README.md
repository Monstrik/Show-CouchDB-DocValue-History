## Show CouchDB DocValue History
Show CouchDB DocValue  history per revisions
#### Clone:
```
$ git clone https://github.com/Monstrik/Show-CouchDB-DocValue-History.git
```

#### Install:
```
$ cd Show-CouchDB-DocValue-History
$ npm install
```

####Use
```
$ npm start db-name doc-id json-path db-server-url
or
$ node . start db-name doc-id json-path db-server-url
```
##### Output Example 
```
$ npm start doc-archive 021fc479-1b9c-11e9-92b8-56ce7f333890 dispatch.callLocation.state http://couchDB:5984
...
Doc rev: 598-ed5d6b2eb3b08c1a2138e60bb69939dc   dispatch.callLocation.state: New York
Doc rev: 599-4bcc9b93ea325a10b6fef20cdcb5f18c   dispatch.callLocation.state: New York
Doc rev: 600-b39929a3e2d42c03eed0184362d56cff   dispatch.callLocation.state: New York
Doc rev: 601-b988fc1f86aff231d0f808e8a698c277   dispatch.callLocation.state: New York
Doc rev: 602-f95a4fe270ead455b03a2e7c73c145fe   dispatch.callLocation.state: New York
Doc rev: 603-4a8d6fc00623586594edad619a655e18   dispatch.callLocation.state: New York
295     Available revisions
dbName:  doc-archive
docID:   021fc479-1b9c-11e9-92b8-56ce7f333890
path :   dispatch.call-location.state

```



