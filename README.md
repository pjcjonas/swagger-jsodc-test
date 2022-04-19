# swagger-jsodc-test

### This creates an error
`yarn swagger-jsdoc -d swagdef.js -o swaggerfile.json`

Error:
```
➜  nodexpress git:(master) ✗ yarn swagger-jsdoc -d swagdef.js ./apitest.js -o ./swag.json
yarn run v1.22.17
$ /Users/xxxxxxxxx/nodexpress/node_modules/.bin/swagger-jsdoc -d swagdef.js ./apitest.js -o ./swag.json
Definition file should contain an info object!
More at http://swagger.io/specification/#infoObject
```

### This works
execute `node index.js`

Using the same options I now write the swagger spec to the file systes using fs...
