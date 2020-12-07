const express = require('express');

const fs = require('fs');

const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

const mainRoute = require('./routes/main');
app.use('/', mainRoute);


const creditoRoute = require('./routes/credito')
app.use('/credito', creditoRoute);

let errorRoute = require('./routes/error')
app.use('*' ,errorRoute)

let hero = require('./routes/heroes')
app.use('/heroes', hero);