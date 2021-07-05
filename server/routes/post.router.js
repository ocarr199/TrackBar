const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  const query = `SELECT *,"post".id, "user".username FROM "post"
                  JOIN "user" ON "post".user_id = "user".id
                  ORDER BY "time_posted" DESC;`
  pool.query(query)
    .then( result => {

      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in post get", err);
      res.sendStatus(500)
    })

})

router.get('/profileUser/:id', (req, res) => {
  const userID = req.params.id
  console.log("user profile id", userID)
  const query = `SELECT "user".id,"user".username FROM "user"
WHERE "user".id = $1;`
  pool.query(query, [userID])
  
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in post get", err);
      res.sendStatus(500)
    })


})


router.get('/followers/:id', (req, res) => {
  const userID = req.params.id
  console.log("user profile id", userID)
  const query = `SELECT "following".following_user_id  FROM "user"
JOIN "following" ON "following".followed_user_id = "user".id 
WHERE "user".id = $1
GROUP BY "following".following_user_id ;`
  pool.query(query, [userID])
  
    .then( result => {
      console.log(result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in post get", err);
      res.sendStatus(500)
    })


})


router.get('/profile/:id', (req, res) => {
  const userID = req.params.id
  console.log(userID)
  const query = `SELECT *,"post".id, "user".username FROM "post"
                  JOIN "user" ON "post".user_id = "user".id
                  WHERE "post".user_id = $1
                  ORDER BY "time_posted" DESC;`
  pool.query(query, [userID])

    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in post get", err);
      res.sendStatus(500)
    })


})

router.get('/edit/:id', (req, res) => {
  const postID = req.params.id
  console.log(postID)
  const query = `SELECT * FROM "post"
                  WHERE "post".id = $1;`
  pool.query(query, [postID])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in getting specific post", err);
      res.sendStatus(500)
    })


})

router.delete('/profile/:id', (req, res) => {
  const postID = req.params.id
  console.log(postID)
  const query = `DELETE FROM "post" WHERE id = $1;`
  pool.query(query, [postID])
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

router.post('/favorite', (req, res) => {
  console.log('this is the req.body', req.body);
const postQuery = `INSERT INTO "favorites" ("user_id", "post_id" )
                   VALUES ($1, $2)`

const values = [req.body.user_id, req.body.post_id]
pool.query(postQuery, values)
  .then(result => {
      res.sendStatus(201)
  }).catch(err => {
    console.error(err)
    res.sendStatus(500)
  })

})


router.post('/comment', (req, res) => {
  console.log('this is the req.body', req.body);
const postQuery = `INSERT INTO "comments" ("post_id", "user_id", "comment" )
                   VALUES ($1, $2, $3);`

const values = [req.body.post_id, req.body.user_id, req.body.comment]
pool.query(postQuery, values)
  .then(result => {
      res.sendStatus(201)
  }).catch(err => {
    console.error(err)
    res.sendStatus(500)
  })

})

router.get('/comment/:id', (req, res) => {
  const postID = req.params.id
  console.log(postID)
  const query = `SELECT * , "user".username FROM "comments"
                  JOIN "user" ON "comments".user_id = "user".id
                  WHERE "comments".post_id = $1;`
  pool.query(query, [postID])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in getting specific post", err);
      res.sendStatus(500)
    })


})

router.put('/favorite/:id', (req, res) => {
    // recieve post id
    const postId = req.params.id;
    //   add 1 to likes where the id = galleryId
    const queryText = `
    UPDATE "post" SET "favorites" = "favorites" +1 WHERE "id" = $1 ;
`;
    pool.query(queryText, [postId])
        .then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
});

router.put('/edit', (req, res) => {
    // recieve post id
    const editedPost = req.body
    console.log("edited post data is -> ",editedPost)
    //   add 1 to likes where the id = galleryId
    const queryText = `
    UPDATE "post" SET "description" = $1, "rating" = $2
     WHERE "id" = $3 ;
`;
    pool.query(queryText, [editedPost.description, editedPost.rating, editedPost.id ])
        .then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
});



module.exports = router;
