const router = require('express').Router();
const listController = require('../../controllers/list.controller.js');

router.route('/list')
    // POST create a new list
    .post((req, res) => {
        listController.createNewList(req.body, res);
    });

router.route('/list/:listId')    
    // GET list by ID
    .get((req, res) => {
        listController.getListByid(req.params.listId, res);
    })
    // PUT update a list by ID
    .put((req, res) => {
        listController.updateListData(req.body, req.params.listId, res);
    })
    // DELETE a lit by ID
    .delete((req, res) => {
        listController.deleteListByid(req.params.listId, res);
    });

module.exports = router;