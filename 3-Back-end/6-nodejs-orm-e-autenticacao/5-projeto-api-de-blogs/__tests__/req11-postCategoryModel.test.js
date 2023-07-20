const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists, 
  checkThroughAssociation
} = require('./assets/helper');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[10].description, () => {
  const modelPath = resolve(__dirname, '..', 'src', 'models', 'PostCategory.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('PostCategory');

  checkPropertyExists(modelPath)(["post_id","category_id"]);

  checkThroughAssociation(modelPath)
    (['Category', 'BlogPost'])('belongsToMany')(['BlogPost', 'Category']);
});
