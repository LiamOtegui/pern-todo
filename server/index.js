const app = require('./src/app')

const PORT = 5000

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})