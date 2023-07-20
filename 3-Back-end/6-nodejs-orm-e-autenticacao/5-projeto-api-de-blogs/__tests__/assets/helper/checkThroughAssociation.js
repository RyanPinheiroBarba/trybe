const { sequelize, dataTypes } = require('sequelize-jest-helpers-trybe');
const { basename } = require('path')

const checkThroughAssociation = modelPath => foreignAModelsNames => method => foreignBModelsNames => {
  const testTitle = `Será validado que o modelo em '${basename(modelPath)}', através do(s) modelos(s) de nome(s) '${foreignAModelsNames.join('; ')}', define a associação '${method}' respectivamente, com o(s) modelo(s) de nome(s) '${foreignBModelsNames.join(', ')}'`
  
  it(testTitle, () => {
    const EntityModel = require(modelPath);
    const Entity = EntityModel(sequelize, dataTypes);
    
    let models = [];

    foreignAModelsNames.forEach(modelName => {
      models = {
        ...models,
        [modelName]: { 
          [method]: jest.fn() 
        }
      };
    });

    Entity.associate(models);

    for(let i = 0; i < foreignAModelsNames.length; i+=1){
      expect(models[foreignAModelsNames[i]][method])
        .toBeCalledWith(
          models[foreignBModelsNames[i]],
          expect.objectContaining({})
        );
    }
  })
}

module.exports = checkThroughAssociation
