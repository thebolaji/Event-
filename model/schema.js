var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Event+', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var eventSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Most no be Empty'],
    },
    description: {
        type: String,
        required: [true, 'Most no be Empty']
    },
    startDate: {
        type: String,
        required: [true, 'Most no be Empty']
    },
    stopDate: {
        type: String,
        required: [true, 'Most no be Empty']
    },
    address: {
        type: String,
        required: [true, 'Most no be Empty']
    },
    city: {
        type: String,
        required: [true, 'Most no be Empty']
    },
    state: {
        type: String,
        required: [true, 'Most no be Empty']
    },
    image: {
        type: String,
        required: [true, 'Most no be Empty']
    },
});

const Events = mongoose.model('Event', eventSchema);
module.exports = Events;