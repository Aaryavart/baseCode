const mongoose = require('mongoose');

// connect to db 
mongoose.connect('mongodb+srv://admin:admin@cluster0.dsax9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

// acruie the connection 
const db= mongoose.connection ;

//error;
db.on('error',console.error.bind(console,'error connecting'))

db.once('open',()=>{

    console.log('You are connected to database.')
})


module.exports=db;