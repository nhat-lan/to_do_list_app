const router = require('express').Router();
const testController = require('../../controllers/test.controller.js');

router.route('/tests')

    .post((req, res) => {
        testController.createNewTest(req.body, res);
    });

module.exports = router;