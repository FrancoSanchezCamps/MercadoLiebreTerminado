const express = require("express") ;
 
const app = express() ;

const path = require("path");

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Sevidor corriendo en el puerto 3000")
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
