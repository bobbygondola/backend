const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets")

//for verifying token in headers
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
      const secret = secrets.jwtSecret
      jwt.verify(token, secret, (err) => {
          if(err){
              console.log(err)
              res.status(400).json({message: "access denied"})
          }else{
              next()
          }
      })
  } else {
      res.status(401).json({message: "please provide your credentials"})
  }
};

//for verifying sessions/cookies

    // module.exports=(req,res,next) => {
    //     const logged = req.session.user;
    //     if(logged){
    //         next()
    //     } else {
    //         res.status(401).json({message: "You must login first before accessing the schedules!"})
    //     }}