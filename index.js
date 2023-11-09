const express = require('express')
const app = express()
const PORT = 9000

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    res.render('index')
});



app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
  })