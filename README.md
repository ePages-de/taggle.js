# taggle.js

> Open Source storefront application for BEYOND API

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## Our steps:


* add `express`
```bash
$ npm install express --save
+ express@4.16.3
updated 1 package in 7.839s
```

* add `server.js`

* add `"heroku-postbuild": "npm run build"` to `package.json` `scripts`

* add `axios`

```bash
$ npm install axios --save
+ axios@0.18.0
added 3 packages in 7.883s
```


## Tag Cloud

```json
{
    "tags" : [ 
        { "kitchen" : 22 },
        { "furniture" : 10 }
    ]
}
```
