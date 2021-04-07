import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json'

const app = express()

// Configuration
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
    res.json({
        author: pkg.author
    })
})

//Middleweares
app.use(express.json())
app.use(morgan('dev'))
// para datos que vienen desde formularios, recibo solo datos basicos
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/users', require('./routes/users.routes'))
app.use('/records', require('./routes/records.routes'))
app.use('/login', require('./routes/auth.routes'))
// Statics Files


//Port on listen 
app.listen(app.get('port'), (req, res) => {
    console.log(`Server on port ${app.get('port')}`)
})