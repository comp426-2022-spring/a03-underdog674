const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
var port = process.env.PORT || 5000

//const logging = (req,res,next) => {
  //  console.log(req.body.number)
  //  next()

//}


const server = app.listen(port, () => {
    console.log('App is running on port %PORT%'.replace('%PORT%',port))
})





app.get('/app/',(req,res) => {
    res.type('text/plain')
    res.setHeader("showing", "alex")
    res.status(200).end('200 OK')
})

app.get('/app/echo/:number',(req,res) =>{
  res.setHeader("showing", "alex")
    res.status(200).json({'raw': coinFlips(req.params.number), 'summary': countFlips(coinFlips(req.params.number))})
    
})

//query
//app.get('/app/echo/',(req,res)=> {
 // res.setHeader("showing", "alex")
//res.status(200).json({'message': req.query.number})

//})


//app.get('/app/echo/',logging,(req,res)=> {
  //  res.status(200).json({'message': req.body.number})
    
  //  })

  function coinFlip() {
        return (Math.floor(Math.random()*2) == 0) ? 'heads' : 'tails';
     }
        

app.get('/app/flip',(req,res) =>{
var flip = coinFlip()//need to create coinFlip above
res.status(200).json({'flip': flip})

})




function countFlips(array) {
    
  var numberH= 0;
    var numberT= 0;
    if(array.length === 1 && array[0]==="heads"){
      numberH++;
      return { "heads": numberH };
    }
    if(array.length === 1 && array[0]==="tails"){
      numberT++;
      return {  "tails": numberT };
    }
    for(var i=0;i<array.length; i++){
      if(array[i]===("heads")){
        numberH++;
      }
      else if(array[i]===("tails")){
        numberT++;
      }
    }
    return { "heads": numberH, "tails": numberT };
    }


    function coinFlips(flips) {
      var coinArray = [];
      for(var x=0; x<flips; x++){
        coinArray.push(coinFlip());
      }
      return coinArray;
    }




    app.use(function(req,res){
      res.status(404).send('404 NOT FOUND')
    })