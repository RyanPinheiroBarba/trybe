const { sequelize, dataTypes } = require('sequelize-jest-helpers-trybe');
const { basename } = require('path')

const checkAssocitationExists = modelPath => (method) => (foreignModelName) => {
  const testTitle = `Será validado que o modelo em '${basename(modelPath)}', define a associação '${method}', com a entidade de nome '${foreignModelName}'`
  
  it(testTitle, () => {
    const EntityModel = require(modelPath);
    const Entity = EntityModel(sequelize, dataTypes);
    
    const model = {
      [foreignModelName]: { 
        expectAssociationWith: foreignModelName
      }
    }

    Entity.associate(model);
    
    expect(Entity[method]).toBeCalledWith(
      model[foreignModelName],
      expect.objectContaining({})
    );
  })
}

module.exports = checkAssocitationExists
