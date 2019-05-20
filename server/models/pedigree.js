var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PedigreeSchema = new Schema({
    surname : String,
    surname_chinese: String,
    root_father: String,
    root_father_chinese: String,
    family_origin: String,
    family_origin_chinese: String,
    middle_tier_name: String,
    middle_tier_name_Chinese: String,
    middle_tier_generation: String,
    middle_tier_faction: String,
})

module.exports = mongoose.model('Pedigree', PedigreeSchema);