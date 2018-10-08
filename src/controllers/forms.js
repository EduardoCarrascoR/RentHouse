const Form = require('../models/forms');

module.exports = {
    index: async (req, res, next) => {
        const forms = await Form.find({});
        res.status(200).json(forms);
    },
    newForm: async (req, res, next) => {
        const newform = new Form(req.body);
        const form = await newform.save();
        res.status(200).json(form);
    },
    getForm: async (req, res, next) => {
        const {formId} = req.params;
        const form = await Form.findById(formId);
        res.status(200).json(form);
    },
    replaceForm: async (req, res, next) => {
        const {formId} = req.params;
        const newForm = req.body;
        const result = await Form.findByIdAndUpdate(formId, newForm);
        res.status(200).json({success: true});

    },
    deleteForm: async (req, res, next) => {
        const {formId} = req.params;
        const newForm = req.body;
        await Form.findByIdAndRemove(formId);
        res.status(200).json({success: true});

    },
    updateForm: async (req, res, next) => {
        const {formId} = req.params;
        const newForm = req.body;
        const oldForm = await Form.findByIdAndUpdate(formId, newForm);
        res.status(200).json({success: true});

    }
};