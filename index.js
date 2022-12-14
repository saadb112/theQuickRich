// thequickrich789@getMaxListeners.com
// Thequickrich11!
const Realm = require("realm-web");
const realm = new Realm.App({ id: "application-0-ftvro" });
const credentials = Realm.Credentials.anonymous();
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Secret = "sadasdajsdbhashfbhadhsadhasgbdjasxgcjasncf";

app.get("/register", async (req, res) => {
  try {
    const user = await realm.logIn(credentials);
    let oldemail = await user.functions.GetSpecificUser("saaad");

    console.log(oldemail);
    if (oldemail != null) {
      return res.json({ status: "user exist" });
    }
    const data = await user.functions.Registeration("saad", "saaad", "saaaad");
    res.json({ data });
  } catch (error) {
    res.json({ status: "error" });
    console.log(error);
  }
  // res.send(register)
});
app.get('/login', async(req,res)=>{
    const user = await realm.logIn(credentials)

    const User = await user.functions.GetSpecificUser("Saad")
    console.log(User.password)
    if (User == null) {
        return res.json({status : "User Not Exist"})
    }
    // else{
        
    //     return res.json({status : "Login Succesfull"})
    // }
   
    if ("Saad" == User.password) {
        const token = jwt.sign({ email: User.email }, Secret)
        if (res.status(201)) {
            res.json({ status: "ok", data: token })
            
        }
        else {
            res.json({status : "password incorrect"})
        }
    }
    else {
        return  res.json({status : "password"})
    }
})
app.listen(8000, () => {
  console.log("app started");
});
