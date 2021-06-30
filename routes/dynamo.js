const express = require("express")
const router = express.Router()
const AWS = require("aws-sdk")
require("dotenv").config()

AWS.config.update({
  region: "us-east-2",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRETE_ACCESS_KEY,
})

const dynamoClient = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = "Places"

const setPlaces = async () => {
  const params = {
    TableName: TABLE_NAME,
  }
  const places = await dynamoClient.scan(params).promise()
  console.log(places)
  return places
}

setPlaces()

