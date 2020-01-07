

const mongoose = require('mongoose'); // to make mongodb schema
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
 

const notesSchema = mongoose.Schema({
    _id : {type : String , required : true},
    userName: { type: String, required: true },
    notes: { type: String, required: true },


});



module.exports = mongoose.model("tbl_notes_basic_data", notesSchema);