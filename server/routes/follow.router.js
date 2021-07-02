const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) => {
const postQuery = `INSERT INTO "following" ("following_user_id","followed_user_id" )
                   VALUES ($1, $2)`

const values = [req.body.following_user_id, req.body.followed_user_id]
pool.query(postQuery, values)
  .then(result => {
      res.sendStatus(201)
  }).catch(err => {
    console.error(err)
    res.sendStatus(500)
  })

})


router.get('/', (req, res) => {
      const query = `SELECT "user".username, "following".followed_user_id AS id FROM "following"
JOIN "user" ON "user".id = "following".followed_user_id
WHERE "following".following_user_id = 1;`
  pool.query(query)
    .then( result => {

      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in post get", err);
      res.sendStatus(500)
    })

})







module.exports = router;
