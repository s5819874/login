//require packages
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUser = require('./check_user')



//set template engine
app.engine('hbs', exphbs({ extname: '.hbs' }))
app.set('view engine', 'hbs')

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//set routers
app.get('/', ((req, res) => {
  res.render('index')
}))
app.post('/login', ((req, res) => {
  const { email, password } = req.body
  const user = checkUser(email, password)
  if (user) {
    firstname = user.firstName
    res.render('welcome', { firstname })
  } else {
    res.render('relogin', { email, password })
  }
}))

//start and listen on the server
app.listen(port, () => {
  console.log(`Expres is now on https://localhost:${port}`)
})