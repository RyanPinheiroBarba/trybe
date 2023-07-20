const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists 
} = require('./assets/helper');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[1].description, () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'User.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('User');

  checkPropertyExists(modelPath)(["id","display_name","email","password","image"]);
});
