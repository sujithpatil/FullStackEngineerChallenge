const express = require('express');

const AuthenticateRouter = express.Router();

const EmployeeModel = require('../models/EmployeeModel');

AuthenticateRouter.post('/login', async (req, res, next) => {
    const { email, id } = req.body;
    const employee = await EmployeeModel.findOne({
        email,
        id
    });
    if ( employee ) {
        res.send(employee)
    } else {
        res.send({
            status: 404
        })
    }
})

AuthenticateRouter.get('/profile', async (req, res, next) => {
    const id = req.cookies.id || '09876';
    
    const employee = await EmployeeModel.findOne({
        id
    });
    res.send(employee);
});

module.exports = AuthenticateRouter;