const { dynamoClient } = require('../dynamo');

const TABLE_NAME = 'Booking';


const getResources = async () => {
	const params = {
		TableName: TABLE_NAME,
	};
	const resources = await dynamoClient.scan(params).promise();
	return resources;
};

const getResourceById = async (id) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id,
		},
	};
	return await dynamoClient.get(params).promise();
};

const addOrUpdateResource = async (booking) => {
	const params = {
		TableName: TABLE_NAME,
		Item: booking,
	};

	

	return await dynamoClient.put(params).promise();
};

const deleteResource = async (id) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id,
		},
	};
	return await dynamoClient.delete(params).promise();
};

module.exports = {
	getResources,
	addOrUpdateResource,
	getResourceById,
	deleteResource,
};
