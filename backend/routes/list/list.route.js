const router = require('express').Router();
const listController = require('../../controllers/list.controller.js');

router.route('/list')
    // GET list by ID
    .get((req, res) => {
        listController.getListByid(req.params.listId, res);
    })
    // POST create a new list
    .post((req, res) => {
        listController.createNewList(req.body, res);
    })
    // PUT update a list by ID
    .put((req, res) => {
        listController.updateListData(req.body, req.params.listId, res);
    })
    // DELETE a lit
    .delete((req, res) => {
        listController.deleteListByid(req.params.listId, res);
    });

module.exports = router;