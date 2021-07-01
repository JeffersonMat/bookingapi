const AWS = require("aws-sdk")
require("dotenv").config()

AWS.config.update({
  region:"us-east-2",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRETE_ACCESS_KEY,
})


const dynamoClient = new AWS.DynamoDB.DocumentClient()

module.exports = {
  dynamoClient,
 } 