const express = require("express") ;
 
const app = express() ;

const path = require("path");

app.use(express.static("public"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Sevidor corriendo en el puerto 3000" + port)
}) ;
app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/home.html') 
    res.sendFile(htmlPath)
}) ;
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".views/register.html"))
    res.sendFile(htmlPath)
}) ;
app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".views/login.html"))
    res.sendFile(htmlPath)
})
