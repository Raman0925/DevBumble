const {validateSign} = require("../utils/validation")

const auth = (req,res)=>{
try{

    validateSignUpData(req);
    const user = new User(req.body)

}catch(err){
    res.status(400).send("err" + err.message);

}

}