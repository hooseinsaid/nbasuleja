const express=require("express")
const app = express()
const port = 3000
app.use(express.static(__dirname + '/'))
app.get('/', (req, res) => {
    res.redirect("../index.html")
  })
  app.listen(port, () => {
    
  });