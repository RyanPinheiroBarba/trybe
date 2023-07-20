const frisby = require('frisby');
const shell = require('shelljs');

const { sequelize: sequelizeCli, apiURL: url } = require('./assets/constants');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[12].description, () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate,
      sequelizeCli.seed
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Será validado que é possível listar blogpost com sucesso', async () => {
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
      .get(`${url}/post`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result[0].id).toBe(1);
        expect(result[0].title).toBe('Post do Ano');
        expect(result[0].content).toBe('Melhor post do ano');
        expect(result[0].published).toBe('2011-08-01T19:58:00.000Z');
        expect(result[0].updated).toBe('2011-08-01T19:58:51.000Z');
        expect(result[0].user.id).toBe(1);
        expect(result[0].user.displayName).toBe('Lewis Hamilton');
        expect(result[0].user.email).toBe('lewishamilton@gmail.com');
        expect(result[0].user.image).toBe('https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg');
        expect(result[0].user.password).toBe(undefined);
        expect(result[0].categories[0].id).toBe(1);
        expect(result[0].categories[0].name).toBe('Inovação');
      });
  });

  it('Será validado que não é possível listar blogpost sem token', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/post`)
      .expect('status', 401)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Token not found');
      });
  });

  it('Será validado que não é possível listar blogpost com token inválido', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: 'gakhubde631903',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/post`)
      .expect('status', 401)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Expired or invalid token');
      });
  });
});
