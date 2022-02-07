const express = require('express')
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const routes = require('./routes');
const cors = require('cors');
const app = express();
app.set('port', process.env.PORT || 9000);

const dbOptions = {
  host: 'ba6ifjfaweakqht1sbsi-mysql.services.clever-cloud.com',
  port: '3306',
  user: 'umk6yftgvtxugmbv',
  password: 'YDPvdQCHwSatKBpsw7ff',
  database: 'ba6ifjfaweakqht1sbsi'
}
const whiteList = ['https://elated-hermann-4e4fa0.netlify.app/?titulo=&autor=&edicion=2021'];
//Middlewares----------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors({origin: whiteList}));

//Routes---------------------------------------------
app.get('/', (req, res)=> {
  res.send('Welcome to my API');
});
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), () => {
  console.log('server running on port', app.get('port'));
});