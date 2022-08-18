const express = require('express')
const cors = require('cors')

const app = express();
// routes
const hipHopRouter = require('./routes/HipHopData.js')
const PopRouter = require('./routes/PopData.js')
const RockRouter = require('./routes/RockData.js')
const ElectronicRouter = require('./routes/ElectronicData.js')
const ChillRouter = require('./routes/ChillData.js')
const IndieRouter = require('./routes/IndieData.js')
const JazzRouter = require('./routes/JazzData.js')
const FunkRouter = require('./routes/FunkData.js')
const AmbientRouter = require('./routes/AmbientData.js')
const PunkRouter = require('./routes/PunkData.js')
const RecommendedRouter = require('./routes/RecommendedData.js')
const ListenAgainRouter = require('./routes/ListenAgainData.js')
const GenresRouter = require('./routes/GenresSearchPageData.js')

app.use(cors())
// get data
app.use('/api/hiphopdata/', hipHopRouter)
app.use('/api/popdata', PopRouter)
app.use('/api/rockdata', RockRouter)
app.use('/api/electronicdata', ElectronicRouter)
app.use('/api/chilldata', ChillRouter)
app.use('/api/indiedata', IndieRouter)
app.use('/api/jazzdata', JazzRouter)
app.use('/api/funkdata', FunkRouter)
app.use('/api/ambientdata', AmbientRouter)
app.use('/api/punkdata', PunkRouter)
app.use('/api/recommendeddata', RecommendedRouter)
app.use('/api/listenagaindata', ListenAgainRouter)
app.use('/api/genresdata', GenresRouter)


const PORT = 3200;
app.listen(PORT, () => console.log(`server has been started on ${PORT} port ...`))