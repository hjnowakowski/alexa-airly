# Air pollution Alexa Skill based on data provided by Airly



## Upload code to lambda:

`rm lambda.zip;` <br> <br>
`zip -Xr lambda.zip .;`<br> <br>
`aws lambda update-function-code --function-name <FUNCTION-NAME> --zip-file fileb://lambda.zip;`
