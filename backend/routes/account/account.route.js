const router = require('express').Router();
const catchify = require('catchify');
const accountController = require('../../controllers/account.controller.js');

/**
 * Routes
 */
router.route('/accounts')
    // .get(async (req, res) => {
    //     //accountController.getAllAccountFromDB(req, res);
    //     // accountController.test(req, res).then((data) => {
    //     //     if (data) {
    //     //         res.json(data);
    //     //     } else {
    //     //         res.json({status: false});
    //     //     }
    //     // });
    //     // const [error, value] = await catchify(accountController.test(req, res));
    //     // res.json(value);
    //     // accountController.test(req, res, (result) => {
    //     //     res.json(result);
    //     // })
    // })

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

// http://localhost:1000/accounts
//     GET -> Get all account in acccounts tablele
//     POST -> Create new account in account table

// http://localhost:1000/accounts/12326
//     GET -> GEt account by id
//     PUT -> UPDATE account by id
//     DELETE -> Deelte account by id

// Get account by id
// router.route('/accounts/:accountId')
//     .get((req, res) => {
//         const accountid = req.params.accountId;
//         accountController.getAccountByid(accountid, res);
//     })


module.exports = router;