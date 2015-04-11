var express = require('express');
var router = express.Router();

// show All users
router.get('/', function(req, res, next) {
	var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            userlist : docs
        });
    	// res.json(docs);
    });
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/logout', function(req, res, next) {
    res.render('index');
});

router.get('/signIn', function(req, res, next) {
    res.render('signIn');

});
router.post('/signIn', function(req, res, next) {
    var db = req.db;
    var collection = db.get('usercollection');

    collection.insert({
        "userId": req.body.userId,
        "password": req.body.password
    }, function(err, doc) {
        if (err) {
            res.send("user data is not inserted sorry");
        } else {
            res.redirect("/");
        }
    })
});

router.get('/edit', function(req, res, next) {
    res.render('edit');
});
router.get('/delete', function (req, res, next) {
	var db = req.db;
	var collection = db.get('usercollection');
	collection.remove({}, function (err) {
		if (err) {res.send("user data is not inserted sorry");}
		else{
			res.redirect("/");
		}
	})
})

module.exports = router;