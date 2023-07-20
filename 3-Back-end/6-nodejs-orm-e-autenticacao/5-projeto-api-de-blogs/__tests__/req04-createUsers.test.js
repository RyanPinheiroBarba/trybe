const frisby = require('frisby');
const shell = require('shelljs');
const jwt = require('jsonwebtoken');

const { sequelize: sequelizeCli, apiURL: url } = require('./assets/constants');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[3].description, () => {
  beforeAll(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Será validado que é possível cadastrar uma pessoa usuária com sucesso', async () => {
    await frisby
      .post(`${url}/user`,
        {
          displayName: 'Rubinho Barrichello',
          email: 'rubinhozera@gmail.com',
          password: '123456',
          image: 'https://www.globalframe.com.br/gf_base/empresas/MIGA/imagens/BDA23B2786FD3B7EC65745DC3FA1EE49D31B_barrichello-1.jpg',
        })
      .expect('status', 201)
      .then((response) => {
        const { json: { token } } = response;
        expect(token).not.toBeNull();
        expect(token).not.toBeUndefined();
        expect(typeof token).toBe('string');
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          expect(decoded).not.toBe(expect.objectContaining(
            { password: expect.any(String) }
          ));
        } catch (error) {
          console.log(error);
          throw Error('Seu `token` não consegue ser verificado a partir do segredo da variável de ambiente `JWT_SECRET`')
        }
      });
  });

  it('Será validado que não é possível cadastrar com o campo `displayName` menor que 8 caracteres', async () => {
    await frisby
      .post(`${url}/user`,
        {
          displayName: 'Rubinho',
          email: 'rubinho@gmail.com',
          password: '123456',
          image: 'https://www.globalframe.com.br/gf_base/empresas/MIGA/imagens/BDA23B2786FD3B7EC65745DC3FA1EE49D31B_barrichello-1.jpg',
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"displayName" length must be at least 8 characters long');
      });
  });

  it('Será validado que não é possível cadastrar com o campo `email` com formato inválido', async () => {
    await frisby
      .post(`${url}/user`,
        {
          displayName: 'Rubinho Barrichello',
          email: 'rubinho',
          password: '123456',
          image: 'https://www.globalframe.com.br/gf_base/empresas/MIGA/imagens/BDA23B2786FD3B7EC65745DC3FA1EE49D31B_barrichello-1.jpg',
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"email" must be a valid email');
      });
  });

  it('Será validado que não é possível cadastrar com o campo `password` menor que 6 caracteres', async () => {
    await frisby
      .post(`${url}/user`,
        {
          displayName: 'Rubinho Barrichello',
          email: 'rubinho@gmail.com',
          password: '12345',
          image: 'https://www.globalframe.com.br/gf_base/empresas/MIGA/imagens/BDA23B2786FD3B7EC65745DC3FA1EE49D31B_barrichello-1.jpg',
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"password" length must be at least 6 characters long');
      });
  });

  it('Será validado que não é possível cadastrar com um email já existente', async () => {
    await frisby
      .post(`${url}/user`,
        {
          displayName: 'Rubinho Barrichello',
          email: 'rubinho1@gmail.com',
          password: '123456',
          image: 'https://www.globalframe.com.br/gf_base/empresas/MIGA/imagens/BDA23B2786FD3B7EC65745DC3FA1EE49D31B_barrichello-1.jpg',
        })
      .expect('status', 201);

    await frisby
      .post(`${url}/user`,
        {
          displayName: 'Rubinho Barrichello',
          email: 'rubinho1@gmail.com',
          password: '123456',
          image: 'https://www.globalframe.com.br/gf_base/empresas/MIGA/imagens/BDA23B2786FD3B7EC65745DC3FA1EE49D31B_barrichello-1.jpg',
        })
      .expect('status', 409)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('User already registered');
      });
  });
});
