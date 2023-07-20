const frisby = require('frisby');
const shell = require('shelljs');

const { sequelize: sequelizeCli, apiURL: url } = require('./assets/constants');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[16].description, () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate,
      sequelizeCli.seed
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Será validado que é possível excluir meu usuário com sucesso', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lewishamilton@gmail.com',
          password: '123456',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = `Bearer ${result.token}`;
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .delete(`${url}/user/me`)
      .expect('status', 204);
  });

  it('Será validado que não é possivel excluir meu usuário com token inválido', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: 'nhfur53sbyf84',
            'Content-Type': 'application/json',
          },
        },
      })
      .delete(`${url}/user/me`)
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Expired or invalid token');
      });
  });

  it('Será validado que não é possivel excluir meu usuário sem o token', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .delete(`${url}/user/me`)
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Token not found');
      });
  });
});
