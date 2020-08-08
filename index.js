const express=require("express")
const app = express()
const port = 3000
app.use(express.static(__dirname + '/'))
app.get('/', (req, res) => {
    res.redirect("../index.html")
  })
  var port = process.env.port || 3000;
app.listen(port);