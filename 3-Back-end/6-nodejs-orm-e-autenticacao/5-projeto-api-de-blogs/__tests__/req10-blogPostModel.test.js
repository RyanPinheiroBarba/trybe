const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists, 
  checkSimpleAssociation
} = require('./assets/helper');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[9].description, () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'BlogPost.js');
  const foreignModelPath = resolve(__dirname, '..', 'src', 'models', 'User.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('BlogPost');

  checkPropertyExists(modelPath)(["id","title","content","user_id","published","updated"]);

  checkSimpleAssociation(modelPath)('belongsTo')('User');

  checkSimpleAssociation(foreignModelPath)('hasMany')('BlogPost');
});
