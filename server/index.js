const express = require('express')
const showCtrl = require('./controllers/show_controller')

const app = express()

app.use(express.json())

PORT = 3047

app.get('/api/shows', showCtrl.getShows);
app.post('/api/shows', showCtrl.postShow);
app.put('/api/shows/:id', showCtrl.putShow);
app.delete('/api/shows/:id', showCtrl.deleteShow);

app.listen(PORT, () => console.log(`Your server on port: ${PORT} is running, you better go catch it...`))