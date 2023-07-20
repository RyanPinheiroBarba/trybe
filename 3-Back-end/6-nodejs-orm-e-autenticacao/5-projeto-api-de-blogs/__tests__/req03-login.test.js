const frisby = require('frisby');
const jwt = require('jsonwebtoken');
const shell = require('shelljs');

const { sequelize: sequelizeCli, apiURL: url } = require('./assets/constants');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[2].description, () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate,
      sequelizeCli.seed
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Será validado que é possível fazer login com sucesso', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: 'lewishamilton@gmail.com',
          password: '123456',
        })
      .expect('status', 200)
      .then((response) => {
        const { json: { token } } = response;
        expect(typeof token).toBe('string');
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          expect(decoded).not.toBe(expect.objectContaining(
            { password: expect.any(String) }
          ))
        } catch (error) {
          console.log(error);
          throw Error('Seu `token` não consegue ser verificado a partir do segredo da variável de ambiente `JWT_SECRET`')
        }
      });
  });

  it('Será validado que não é possível fazer login sem todos os campos preenchidos', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: '',
          password: '',
        })
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Some required fields are missing');
      });
  });

  it('Será validado que não é possível fazer login com um usuário que não existe', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: 'senna@gmail.com',
          password: '123456',
        })
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Invalid fields');
      });
  });
});