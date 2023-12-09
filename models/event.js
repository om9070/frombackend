const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    country: {
        type: [String],
    },
    state: {
        type: [String],
    },
    city:{
        type:[String]
    }
    
});

const country = mongoose.model('countrySchema', countrySchema);

module.exports = country;
