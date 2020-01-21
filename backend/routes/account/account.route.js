const router = require('express').Router();
const accountController = require('../../controllers/account.controller.js');

/**
 * Routes
 */
router.route('/accounts')

    .post((req, res) => {
        accountController.createNewAccount(req.body, res);
    });

router.route('/accounts/:id')
    .put((req, res) => {
        accountController.updateAccountData(req.body, req.params.id, res);
    })

    .delete((req, res) => {
        accountController.deleteAccountByid(req.params.id, res);
    })

    .get((req, res) => {
        accountController.getAccountByid(req.params.id, res);
    });

module.exports = router;