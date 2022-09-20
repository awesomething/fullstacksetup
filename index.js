// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

const PORT = process.env.PORT
// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Food!')
})

// MIDDLEWARE
app.use(express.static('public'))
//Foods Controller
const foodsController = require('./controllers/foods_controller')
app.use('/foods', foodsController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
