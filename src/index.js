'use strict'

const app = require('./app')

app.listen(app.get('port'),()=>{

    console.log(`Server listening at port ${app.get('port')}`)

})