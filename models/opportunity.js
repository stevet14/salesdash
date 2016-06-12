/**
 * Created by stevet on 12/06/2016.
 */
var mongoose = require('mongoose');

var opportunitySchema = new mongoose.Schema({
    opportunityId: { type: String, unique: true, index: true },
    prospect: String,
    description: String
});

module.exports = mongoose.model('Opportunity', opportunitySchema);