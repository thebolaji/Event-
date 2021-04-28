const Event = require('../model/schema');
// 

module.exports = {
    homePage: (req, res, next) => {
        res.render('index');
    },
    eventsPage: async(req, res, next) => {
        const eventLists = await Event.find({});
        res.render('events', {
            eventLists
        });
    },
    createPage: (req, res, next) => {
        res.render('create');
    },
    create: (req, res, next) => {
        let imageFile = req.files.imageFile
            // console.log(imageFile);
        imageFile.mv("./public/posts/" + imageFile.name, function(error) {
            if (error) {
                console.log(error);
            }
            const event = new Event({
                ...req.body,
                image: `/posts/${imageFile.name}`
            });
            event.save().then((data) => {
                res.redirect('events');
                console.log(data);
            }).catch((error) => {
                res.status(400).json(error);
                console.log(error);
            })
        })

    },
    singlepost: async(req, res, next) => {
        console.log(req.params);
        const post = await Event.findById(req.params.id)
            // res.json(post);
        res.render('post', { post })
    }
}
