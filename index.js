const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')

const PORT = process.env.PORT || 5000

// Static folders
app.use(express.static(__dirname + '/public/'))

// view engine setup
app.engine(
	'handlebars',
	handlebars({
		defaultLayout: 'main',
		layoutsDir: path.join(__dirname, 'views/layouts'),
	})
)

app.set('view engine', 'handlebars')

// Routing

app.get('/', (req, res) => {
	res.render('home', {
		title: 'CMD Methods',
	})
})

// Port
app.listen(PORT, () => {
	console.log(`Server is starting on ${PORT}`)
})
