const jwt = require("jsonwebtoken");

module.exports=(req,res,next)=>{
 const token=req.headers.authorization;
 if(!token) return res.status(401).send("Sem acesso");

 try{
  req.user=jwt.verify(token,process.env.JWT_SECRET);
  next();
 }catch{
  res.status(400).send("Token inválido");
 }
}