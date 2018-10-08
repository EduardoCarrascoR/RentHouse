const router = require('express-promise-router')();
const  FormsController = require('../controllers/forms');

router.route('/')
    .get(FormsController.index)
    .post(FormsController.newForm);
router.route('/:formId')
    .get(FormsController.getForm)
    //.put(FormsController.replaceForm)
    .delete(FormsController.deleteForm)
    .put(FormsController.updateForm);
module.exports = router;