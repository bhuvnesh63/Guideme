const express = require('express');
const router = express.Router();
const guider = require('../controllers/guider');
const multer = require("multer")
const bodyParser = require("body-parser");
const path = require("path");








router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'), function (error, success) {
            if (error) throw error
        })
    },
    filename: function (req, file, cb) {
        Date.now() + '-' + file.originalname;
        cb(null, file.originalname, function (error, success) {
            if (error) throw error
        })
    }
})

const upload = multer({ storage: storage  })
// Signup route
// router.get('/guiders', guider.);
router.post('/signup', upload.single("image"),guider.signup);
// router.put('/signup/:id', guider.update);

// Login route
router.post('/login', guider.login);
router.post('/logout', guider.logout);

module.exports = router;
