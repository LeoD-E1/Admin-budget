const express = require('express')
const app = express()

// Configuration
app.set('port', process.env.PORT || 3000)

//Middleweares

//Routes
app.use('/', require('./app'))
// Statics Files

//Port on listen 
app.listen(app.get('port'), (req, res) => {
    console.log(`Server on port ${app.get('port')}`)
})