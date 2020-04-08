const Event = require('../model/schema');
module.exports = {
    homePage: (req, res, next) => {
        res.render('index');
    },
    eventsPage: async(req, res, next) => {
        const eventLists = await Event.find({});
        console.log(eventLists);
        // res.json(eventLists);
        res.render('events', {
            eventLists
        });
    },
    postPage: (req, res, next) => {
        res.render('post');
    },
    post: (req, res, next) => {
        const event = new Event(req.body);
        event.save().then((data) => {
            res.redirect('events');
            console.log(data);
        }).catch((error) => {
            res.status(404).json(error);
            console.log(error);
        })
    }
}