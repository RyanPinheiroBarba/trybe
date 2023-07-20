const { API_HOST, API_PORT } = process.env;

module.exports = {
  sequelize: {
    drop: "npx sequelize-cli db:drop",
    create: "npx sequelize-cli db:create",
    migrate: "npx sequelize-cli db:migrate",
    seed: "npx sequelize-cli db:seed:all"
  },
  apiURL: `http://${API_HOST}:${API_PORT}`
}