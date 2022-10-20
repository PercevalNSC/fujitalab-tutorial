const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const app = express()

app.set('port', 3001)
//app.use(favicon(path.join(__dirname, 'static-node' , 'favicon.ico')))
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/static/templates/index.html"))
})
app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, "/static/templates/map.html"))
})

app.listen(app.get('port'),  () => {
    console.log("App listening on port " + app.get('port'))
})