const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

console.log(__dirname)

const app = express()
    .use(express.static('dist'))
    .get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'dist/index.html')))

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`)
})
