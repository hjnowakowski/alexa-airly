<h1 align="center">Welcome to airly-alexa 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/hjnowakowski">
    <img alt="Twitter: hjnowakowski" src="https://img.shields.io/twitter/follow/hjnowakowski.svg?style=social" target="_blank" />
  </a>
</p>

> AWS Lambda function that acts as a backend for Alexa Skill that provides information about air pollution. It's based on current device's (alexa) location.

## Prerequisites

* AWS account
* AWS CLI provided by Amazon
* NPM

## Install

```sh
npm install
```

In order to upload code you can zip it and then send to AWS via CLI. You can do that with the following commands:

## Deploy

```sh

rm lambda.zip # if already exist

zip -Xr lambda.zip .

aws lambda update-function-code --function-name <FUNCTION-NAME> --zip-file fileb://lambda.zip; # you need to have an account and be logged in
```

## Author

👤 **Henryk Nowakowski**

* Twitter: [@hjnowakowski](https://twitter.com/hjnowakowski)
* Github: [@hjnowakowski](https://github.com/hjnowakowski)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
