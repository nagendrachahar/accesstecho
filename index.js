var express = require('express');
var app = express();
var dns = require('dns');
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).any());

app.get('/index.html', function(req, res) {

    res.sendFile(__dirname + "/" + "index.html");

});

app.post('/submit', function(req, res) {

    console.log(req.files[0].originalname);
    console.log(req.files[0].path);
    console.log(req.files[0].mimetype);

    var profilePic = __dirname + "/" + "public" + "/" + "images" + "/" + req.files[0].originalname;
    var coverPhoto = __dirname + "/" + "public" + "/" + "images" + "/" + req.files[1].originalname;

    fs.readFile(req.files[0].path, function(err, data) {

        fs.writeFile(profilePic, data, function(err) {

        });
    });

    fs.readFile(req.files[1].path, function(err, data) {

        fs.writeFile(coverPhoto, data, function(err) {

        });
    });


    var dataTo = __dirname + "/" + "public" + "/" + "data" + "/" + "input.txt";



    fs.readFile(dataTo, 'utf8', function(err, data) {


        data = JSON.parse(data);

        var user = {
            name: req.body.Name,
            emailid: req.body.Email,
            backgroundColor: req.body.backgroundcolor,
            id: data.length + 1,
            profilePath: "images" + "/" + req.files[0].originalname,
            coverPhotopath: "images" + "/" + req.files[1].originalname,
            about: req.body.About
        }

        data[data.length] = user;

        fs.writeFile(dataTo, JSON.stringify(data), function(err) {

        });
    });

    res.sendFile(__dirname + "/" + "public" + "/" + "new-profile.html");

});
app.post('/getId', function(req, res) {

    var id = req.body.id;
    console.log(id);
    var idtxt = __dirname + "/" + "public" + "/" + "data" + "/" + "id.txt";
    fs.writeFile(idtxt, JSON.stringify(id), function(err) {

    });
    res.sendFile(__dirname + "/" + "public" + "/" + "idbased.html");
});

app.get('/getUsers', function(req, res) {

    res.sendFile(__dirname + "/" + "public" + "/" + "getall.html");

});

app.listen(process.env.PORT || 8080, () => console.log('all is ok'));