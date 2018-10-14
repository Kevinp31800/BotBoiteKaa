const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const reunionAddPg = (params) => {
  client.connect();
  client.query(`INSERT INTO reunion VALUES('${params.id}', '${params.name}', '${params.date}', '${params.user_id}', '${params.created_at}');`, (err, res) => {
    if (err) console.log(err);
    client.end();
    return res;
  });
}

const reunionList = () => {
  client.connect();
  return client.query(`SELECT * FROM reunion;`, (err, res) => {
    if (err) {
      console.log(err);
      return null;
    }
    console.log('res', res);
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });
}

module.exports = {
  reunionAddPg,
  reunionList
}