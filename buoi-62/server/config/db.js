const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const mongoConfig = {
  name: DB_NAME,
  uri: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zkoekeb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
};

module.exports = mongoConfig;
