const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  const query = `SELECT *,"post".id, "user".username FROM "post"
                  JOIN "user" ON "post".user_id = "user".id;`
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in post get", err);
      res.sendStatus(500)
    })
})


router.post('/', (req, res) => {
  console.log('this is the req.body', req.body);

const postQuery = `INSERT INTO "post" ("description","rating", "embed_code", "user_id" )
                   VALUES ($1, $2, $3, $4)`

const values = [req.body.description, req.body.rating, req.body.embed_code, req.body.user_id]
pool.query(postQuery, values)
  .then(result => {
      res.sendStatus(201)
  }).catch(err => {
    console.error(err)
    res.sendStatus(500)
  })


})






module.exports = router;
