// third party library
const dynamoose = require('dynamoose');

//create a schema

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
 
});

const peopleModel = dynamoose.model('people', schema);

exports.handler = async(event) => {
  console.log('the body', event.body);
 
 let results = await peopleModel.scan().exec();
 console.log(results);
 
  // try {
    
  // }catch(e){
    
  // }
  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};