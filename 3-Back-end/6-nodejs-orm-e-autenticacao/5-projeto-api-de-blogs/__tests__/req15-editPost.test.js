const frisby = require('frisby');
const shell = require('shelljs');

const { sequelize: sequelizeCli, apiURL: url } = require('./assets/constants');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[14].description, () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate,
      sequelizeCli.seed
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Será validado que é possível editar um blogpost com sucesso', async () => {
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
      .put(`${url}/post/1`, {
        title: 'Fórmula 1 editado',
        content: 'O campeão do ano! editado',
      })
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.title).toBe('Fórmula 1 editado');
        expect(json.content).toBe('O campeão do ano! editado');
        expect(json.userId).toBe(1);
        expect(json.categories[0].id).toBe(1);
        expect(json.categories[0].name).toBe("Inovação");
      });
  });

  it('Será validado que não é possível editar um blogpost com outro usuário', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'MichaelSchumacher@gmail.com',
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
      .put(`${url}/post/1`, {
        title: 'Fórmula 1 editado',
        content: 'O campeão do ano! editado',
      })
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Unauthorized user');
      });
  });

  it('Será validado que não possível editar um blogpost sem token', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .put(`${url}/post/1`, {
        title: 'Fórmula 1 editado',
        content: 'O campeão do ano! editado',
      })
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Token not found');
      });
  });

  it('Será validado que não possível editar um blogpost com token inválido', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: 'et462g5r',
            'Content-Type': 'application/json',
          },
        },
      })
      .put(`${url}/post/1`, {
        title: 'Fórmula 1 editado',
        content: 'O campeão do ano! editado',
      })
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Expired or invalid token');
      });
  });

  it('Será validado que não possível editar um blogpost sem todos os campos preenchidos', async () => {
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
      .put(`${url}/post/1`, {
        title: '',
        content: '',
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Some required fields are missing');
      });
  });
});
