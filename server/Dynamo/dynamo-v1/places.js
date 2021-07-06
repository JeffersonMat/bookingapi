const { dynamoClient } = require("../dynamo")

const TABLE_NAME = "Places"

const getPlaces = async () => {
  const params = {
    TableName: TABLE_NAME
  }
  const places = await dynamoClient.scan(params).promise();
  return places
}

const getPlaceById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id
    }
  }
  return  await dynamoClient.get(params).promise();
}

const addOrUpdatePlace = async (place) => {
  const params = {
    TableName: TABLE_NAME,
    Item: place
  }

  
    return await dynamoClient.put(params).promise();
}

const deletePlace = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    }
  };
  return await dynamoClient.delete(params).promise()
}

module.exports = {
  getPlaces,
  addOrUpdatePlace,
  getPlaceById,
  deletePlace,
}
