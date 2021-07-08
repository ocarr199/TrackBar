import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState(60.25)

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }


  useEffect(() => {
    const savedRefreshToken =  getCookie('refreshToken')
    if (savedRefreshToken){
      setRefreshToken(savedRefreshToken)
    }else{

      axios
      .post("/spotifyLogin", {
        code,
      })
      .then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        document.cookie = `refreshToken=${res.data.refreshToken}`
        // window.history.pushState({}, null, "/")
      })
      .catch(() => {
          console.log('somethings wrong')
        // window.location = "/"
      })
    }

  }, [code])

  useEffect(() => {
    if (!refreshToken) return
    const interval = setInterval(() => {
      axios
        .post("/spotifyLogin/refresh", {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
          window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}