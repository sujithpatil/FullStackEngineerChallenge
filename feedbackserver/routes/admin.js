const express = require('express');

const AdminRouter = express.Router();

const EmployeeModel = require('../models/EmployeeModel');

AdminRouter.get('/employees', async ( req, res, next ) => {

    const employeeList = await EmployeeModel.find();
    res.send( employeeList );

});

AdminRouter.get('/employees/:id', async ( req, res, next ) => {

    const employee = await EmployeeModel.findOne({
        id: req.params.id
    });
    res.send( employee );

});

AdminRouter.post('/employees', async ( req, res, next ) => {

    const employee = req.body;
    const employeeObject = new EmployeeModel( employee );
    const savedObject = await employeeObject.save();
    res.send( savedObject );

});

AdminRouter.put('/employees/:id', async ( req, res, next ) => {

    const id = req.params.id;
    const employee = req.body;
    const savedObject = await EmployeeModel.findOneAndUpdate({ id }, employee );
    res.send( savedObject );

});

AdminRouter.delete('/employees/:id', async ( req, res, next ) => {

    const id = req.params.id;
    const employee = await EmployeeModel.findOneAndDelete({
        id: id
    });
    res.send( employee );
    
});

module.exports = AdminRouter;