const Sequelize = require('sequelize');
const shell = require('shelljs');

const sequelizeConfig = require('../src/config/config');
const { sequelize: sequelizeCli } = require('./assets/constants');
const queries = require('./assets/queries');

const { requirements } = require('../.trybe/requirements.json');

describe(requirements[0].description, () => {
  let database;

  beforeAll(() => {
    database = new Sequelize(sequelizeConfig.test);
  });

  beforeEach(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Será validado que é possível fazer um INSERT e um SELECT na tabela user', async () => {
    const insertQuery = await database
      .query(queries.insert.users, { type: 'INSERT' });
    expect(insertQuery).toEqual([1, 1]);

    const [selectQuery] = await database
      .query(queries.select.users, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.users)
    );
  });

  it('Será validado que é possível fazer um INSERT e um SELECT na tabela categories', async () => {
    const insertQuery = await database
      .query(queries.insert.categories, { type: 'INSERT' });
    expect(insertQuery).toEqual([1, 1]);

    const [selectQuery] = await database
      .query(queries.select.categories, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.categories)
    );
  });

  it('Será validado que, a partir de um INSERT em users, é possível fazer um INSERT e um SELECT na tabela blog_posts', async () => {
    const insertUserQuery = await database
      .query(queries.insert.users, { type: 'INSERT' });
    expect(insertUserQuery).toEqual([1, 1]);

    const insertQuery = await database
      .query(queries.insert.blog_posts, { type: 'INSERT' });
    expect(insertQuery).toEqual([1, 1]);

    const [selectQuery] = await database
      .query(queries.select.blog_posts, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.blog_posts.general)
    );
    expect(Date.parse(selectQuery.published))
      .toEqual(queries.expect.blog_posts.published);
    expect(Date.parse(selectQuery.updated))
      .toEqual(queries.expect.blog_posts.updated);
  });

  it('Será validado que, a partir de INSERTs em user, categories e blog_posts, é possível fazer um INSERT e um SELECT na tabela post_categories', async () => {
    const insertUserQuery = await database
      .query(queries.insert.users, { type: 'INSERT' });
    expect(insertUserQuery).toEqual([1, 1]);

    const insertCategoriesQuery = await database
      .query(queries.insert.categories, { type: 'INSERT' });
    expect(insertCategoriesQuery).toEqual([1, 1]);

    const insertBlog_postsQuery = await database
      .query(queries.insert.blog_posts, { type: 'INSERT' });
    expect(insertBlog_postsQuery).toEqual([1, 1]);

    const insertQuery = await database
      .query(queries.insert.posts_categories, { type: 'INSERT' });
    expect(insertQuery).toEqual([0, 1]);

    const [selectQuery] = await database
      .query(queries.select.posts_categories, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.posts_categories)
    );
  });
});
