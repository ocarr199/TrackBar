const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')
const bodyParser = require('body-parser')

router.use(cors())
router.use(bodyParser.json())





router.post('/', (req, res) => {
  // POST route code here
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
  spotifyApi.authorizationCodeGrant(code)
  .then(data => {
      res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
      })
  }).catch((err)=> {
      console.log(err)
      res.sendStatus(400)
  })
});


router.post('/refresh', (req, res) => {

    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    })
    spotifyApi.refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
        })  
    })
    .catch( err=> {
        console.log(err)
        res.sendStatus(400)
    })
})

module.exports = router;