// wrapper from `node_modules/sequelize-jest-helpers-trybe/src/checks/checkPropertyExists.js`

const { sequelize, dataTypes } = require('sequelize-jest-helpers-trybe');
const each = require('jest-each').default;
const { camelCase } = require('change-case');

const checkPropertyExists = modelPath => properties => {
  each(properties)
    .it(`Será validado que o modelo possui a propriedade '%s'`, (propName) => {
      const EntityModel = require(modelPath);
      const Entity = EntityModel(sequelize, dataTypes);
      const entity = new Entity();
      if(Entity.prototype.underscored){
        expect(entity).toHaveProperty(camelCase(propName))
      } else expect(entity).toHaveProperty(propName);
      
    })
}

module.exports = checkPropertyExists
