const express= require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use(bodyParser.json);

app.get('/', (req,res)=> {
    res.send('bem vindo');
});

app.listen(8080, ()=>{
    console.log('listening on');
});
