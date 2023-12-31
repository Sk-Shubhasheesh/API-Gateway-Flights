const { StatusCodes } = require('http-status-codes');

const { UserService } = require('../services');
const { SuccessResponce, ErrorResponce } = require('../utils/common');




/**
 * POST : /signup 
 * req-body {email: 'a@b.com', password: '1234'}
 */
async function signup(req, res) {
    try {
        const user = await UserService.create({
            email: req.body.email,
            password: req.body.password
        });
      
        SuccessResponce.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponce);
    } catch(error) {
        console.log(error);
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}



async function signin(req, res) {
    try {
        const user = await UserService.signin({
            email: req.body.email,
            password: req.body.password
        });
      
        SuccessResponce.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponce);
    } catch(error) {
        console.log(error);
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}


async function addRoletoUser(req, res) {
    try {
        const user = await UserService.addRoletoUser({
            role: req.body.role,
            id: req.body.id
        });
      
        SuccessResponce.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponce);
    } catch(error) {
        console.log(error);
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}

module.exports = {
    signup,
    signin,
    addRoletoUser
}