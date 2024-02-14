
alert("fdffd")
var express = require("express")
var bodyparser = require("body-parser")
var mongoose = require("mongoose")

const app = express();

const port = 3000

app.use (bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded ({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/database')

var db = mongoose.connection
db.on('error',() => console.log("error in connecting to database"))
db.once('open',() => console.log("connecting to database"))




app.post("/",function (req,res)  {
    var name = req.body.name
    var phno = req.body.phno
    var password = req.body.password

    var data = {
        "name":name,
        "phno":phno,
        "password":password
    }

    db.collection('users').insertOne(data,(err,Collection) => {
        if(err){
            throw err;
        }
        console.log("record inserted succesfuly")
    })

    return res.redirect('signup_succesfully.html')
})




app.get("/",(req,res)  => {
    res.set({
        "allow-access-allow-origin":'*'
    })

    return res.redirect('index.html')

}).listen(3000);


console.log(`Server started on ${port}`);

