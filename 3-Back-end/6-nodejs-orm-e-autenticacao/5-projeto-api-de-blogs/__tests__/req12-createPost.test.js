const frisby = require('frisby');
const shell = require('shelljs');
const Sequelize = require('sequelize');

const { sequelize: sequelizeCli, apiURL: url } = require('./assets/constants');
const { requirements } = require('../.trybe/requirements.json');
const sequelizeConfig = require('../src/config/config');

const sequelize = new Sequelize(sequelizeConfig.test);

describe(requirements[11].description, () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate,
      sequelizeCli.seed
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Será validado que é possível cadastrar um blogpost com sucesso', async () => {
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
      .post(`${url}/post`, {
        title: 'Fórmula 1',
        content: 'O campeão do ano!',
        categoryIds: [1, 2],
      })
      .expect('status', 201)
      .then(async (response) => {
        const { json } = response;
        expect(json.id).toBe(3);
        expect(json.title).toBe('Fórmula 1');
        expect(json.content).toBe('O campeão do ano!');
        expect(json.userId).toBe(1);

        await sequelize.query(`SELECT * FROM posts_categories WHERE post_id = ${json.id}`).
          then(async ([postCategories]) => {
            expect(postCategories.length).toBe(2); // Você deve inserir as categorias do post também
          });
      });
  });

  it('Será validado que não é possível cadastrar um blogpost sem todos os campos preenchidos', async () => {
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
      .post(`${url}/post`, {
        title: '',
        content: '',
        categoryIds: []
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Some required fields are missing');
      });
  });

  it('Será validado que não é possível cadastrar um blogpost com uma categoria inexistente', async () => {
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
      .post(`${url}/post`, {
        title: "Carros elétricos vão dominar o mundo?",
        content: "Já é possivel encontrar diversos carros elétricos em todo o mundo, será esse nosso futuro?",
        categoryIds: [1, 3],
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('one or more \"categoryIds\" not found');
      });
  });

  it('Será validado que não é possível cadastrar um blogpost sem o token', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/post`, {
        title: 'Fórmula 1',
        content: 'O campeão do ano!',
        categoryIds: [1],
      })
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Token not found');
      });
  });

  it('Será validado que não é possível cadastrar um blogpost com o token inválido', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: 'kwngu4425h2',
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/post`, {
        title: 'Fórmula 1',
        content: 'O campeão do ano!',
        categoryIds: [1],

      })
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Expired or invalid token');
      });
  });
});
