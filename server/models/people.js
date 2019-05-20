var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PeopleSchema = new Schema({
    generation: Number,
    name: String,
    name_chinese: String,
    is_male: Boolean,
    age: Number,
    birth_timestamp: Number,
    death_timestamp: Number,
    job: String,
    img_profile : String,
    grave : String,
    tag_list: Array,
    id_parent : String,
    id_mate_list : Array,
    id_child_list : Array
})
module.exports = mongoose.model('People', PeopleSchema);