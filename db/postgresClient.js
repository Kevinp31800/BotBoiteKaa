const { Client } = require('pg');
const client = () => new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const createReunion = (params) => {
  tempClient = client();
  // tempClient.connect();
  // tempClient.query(`INSERT INTO reunion VALUES('${params.id}', '${params.name}', '${params.date}', '${params.user_id}', '${params.created_at}');`, (err, res) => {
  //   if (err) console.log(err);
  //   tempClient.end();
  //   return res;
  // });
  tempClient.connect();
  tempClient.query(`INSERT INTO reunion VALUES('${Object.values(params).join('\', \'')}')`, (err, res) => {
    if (err) console.log(err);
    tempClient.end();
    return res;
  });
}



const listReunion = () => {
  return new Promise((resolve, rej) => {
    tempClient = client();
    tempClient.connect();
    tempClient.query(`SELECT * FROM reunion;`, (err, res) => {
      if (err) {
        console.log('error', err);
        return null;
      }
      resolve(res.rows);
      tempClient.end();
    });
  });
};

const getReunionById = (id) => {
  return new Promise((resolve, rej) => {
    tempClient = client();
    tempClient.connect();
    tempClient.query(`SELECT * FROM reunion where id = '${id}' ;`, (err, res) => {
      if (err) {
        console.log('error', err);
        return null;
      }
      resolve(res);
      tempClient.end();
    });
  });
};

module.exports = {
  createReunion,
  listReunion,
  getReunionById
}