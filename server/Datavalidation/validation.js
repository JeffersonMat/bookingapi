const joi = require('joi');


// Each place it's treated as a project
// Each place needs to have its own parameter. eg: Not all places have meeting rooms 
//


const validatePlaceData = async (place) => {
	const schema = joi.object().keys({
		id: joi.string(),
		name: joi.string(),
		//Availability should be an object
		availability: joi.object().keys({
			availability_start_day: joi.string(),
			availability_end_day: joi.string(),
			availability_start_time: joi.string(),
			availability_end_time: joi.string(),
		}),
		availability_constraints: joi.array().items({}).allow().optional(),
		resources: joi.array().items(joi.string()),
		location: joi.string(),
		review: joi.string().allow('').optional(),
	});
	try {
		const validation = await schema.validateAsync(place);
		if (validation) {
			return validation;
		}
	} catch (error) {
		console.log(error.message);
	}
};

//"booking_status":"confirmed",
    // "user_info":{
    //   "user_id":"1",
    //   "user_name":"Test",
    //   "user_email":"test@mail.com",
    //   "user_phone":"00212323"
    // },
    // "name_place":"venue1",
    // "timeZone":"Wellington (GMT+12)",
    // "type_resource":"desk",
    // "start_time":"11:00",
    // "end_time":"13:00",
    // "date":"07-July-2021"
    //   }
const validateBookingData = async (booking) => {
	const schema = joi.object().keys({
		id: joi.string(),
		booking_status: joi.string(),
		user_info: joi.object().keys({
			user_id: joi.string(),
			user_name: joi.string(),
			user_email: joi.string().email(),
			user_phone:joi.string()
		}),
		name_place: joi.string(),
		timeZone: joi.string(),
		type_resource: joi.string(),
		start_time: joi.string(),
		end_time: joi.string(),
		date:joi.string()
	});
	try {
		const validation = await schema.validateAsync(booking);
		if (validation) {
			return validation;
		}
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = {
	validatePlaceData,
	validateBookingData,
};
