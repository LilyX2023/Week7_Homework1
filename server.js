//Dependencies
const express = require("express")
const app = express()


//Routes
app.get('/greeting',(req,res) => {
    res.send('<h1>Hello Stranger</h1>')
})

app.get("/greeting/:name",(req,res) => {
    const name = req.params.name
    res.send(`<h1>${name}! It's very nice meeting you.</h1>`)
})


// app.listen(PORT, FUNCTION)
// The function will run after the server turns on
app.listen(3000, () => {console.log("server is listening on port 3000")})