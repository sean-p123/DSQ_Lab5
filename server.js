const express = require('express')
const app = express()
//port : localhost:3000
const port = 3000
//body parser library to help with post request
const bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//two arguments it can take is request (req) and response(res)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//everything starts with app.
// '/datarep' is the url that the .get method is listening to
app.get('/datarep',(req, res)=>{
    res.send('Welcome to Data Representation & Querying')
})
// when adding a : after a / , this means the url is looking for a parameter: name
app.get('/hello/:name', (req,res) =>{
    //request parameter : name
    res.send('Hello ' + req.params.name)
})

app.get('/api/books', (req,res)=>{
    const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        }
        ]
        
        ///   returns a json file : books
    res.status(201).json({
        mybooks:books
    })
})
//write a get method that returns a html page
app.get('/test', (req,res)=>{

    //  __dirname returns current directory
    res.sendFile(__dirname+'/index.html')

   

})
app.get('/name',(req,res) =>{
    //req.query pulling fname variable from the get request in html
    console.log(req.query.fname)
    //prints the fname that was input into the /test url and displays it in this url
    res.send('Hello '+ req.query.fname + ' '+ req.query.lname)

    
} )

app.post('/name', (req,res)=>{
   
   
   //req.body.fname pulling fname variable from the post request in html
    console.log(req.body.fname+ ' '+ req.body.lname)

    res.send('Hello from post: '+ req.body.fname + ' '+ req.body.lname)
})

//listens to see where the request should be sent
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})