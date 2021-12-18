const mongooose = require('mongoose');
const eventSchema = new mongooose.Schema({

    email:{
        type:String,
        required:true,
        
    },
    name:{
        type:String,
        required:true,
    },
    password:{

        type:String,
        required:true
    }

},{
    timestamps:true
});

const Event = mongooose.model('Event',eventSchema);


module.exports= Event;