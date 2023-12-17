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

app.get('/tip/:total/:percentage', (req,res) => {
    const total = req.params.total
    const percentage = req.params.percentage
    const tipAmount = total * (percentage/100)
    res.send(`${tipAmount}`)//Don't try to put the number in res.send() always do the interpolation
})


// app.listen(PORT, FUNCTION)
// The function will run after the server turns on
app.listen(3001, () => {console.log("server is listening on port 3001")})