# taggle.js

This is an open source application for our BEYOND storefront. Using this application, the storefront will be build based on tags and not on collections as it is the case in the typical BEYOND storefront. This facilitates the maintenance for merchants as they do not need to take care of adding new collections and assigning products to them. Merchants only need to assign tags to the product once.  

The initial storefront will then show the assigned tags as a tag cloud. Each tag of this cloud is clickable and will lead to a new page including all products with the required tag. Further product information (such as price and product image) are available on product detail pages that can be accessed by clicking on the respective product.

You will find a corresponding application for the cockpit in the [taggle.rb repository](https://github.com/ePages-de/taggle.rb).

## Individualization

The application can be used with every [BEYOND shop](https://signup.beyondshop.cloud/). Depending on your shop name, use this URL: https://taggle-js.herokuapp.com/#/YourShopName to get to the storefront.

If you want to apply a different style or want to add more functionalities, you need to follow these steps:

1. Clone the repo.
2. Connect your personal taggle.js repo to your Heroku Account.
3. Merge the desired changes into your repo.

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
