const express=require("express");
const bodyParser=require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended: "true"}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    var h= parseFloat(req.body.hieght);
    var w= parseFloat(req.body.weight);

    var result= w/(h*h);
    res.send("the result of calculation is "+ result);
});


app.listen(3000,function(){
    console.log("server is running on port 3000.");
});