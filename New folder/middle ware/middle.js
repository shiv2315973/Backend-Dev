import joi from 'joi';
import {statusCodes} from "http-status-codes";
import {logger} from "../logger/logger";

 function userMid(req, res, next) {
    try {
        let schema = joi.object({
            name: joi.string().lowercase().min(3).max(200).required(),
            email: joi.string().lowercase().email().min(6).max(200).required(),
            password: joi.string().min(6).max(200).required()
        })
        let{error,value} = ab.validate(req.body);
        if(error){
             res.status(statusCodes.BAD_REQUEST).json({
               code:statusCodes.BAD_REQUEST.code,
                message: error.message
            })
        }   
        req.body = value;
        next();
    }
    catch (error) {
      comnsole.log(error);
      logger("error",statusCodes.INTERNAL_SERVER_ERROR.message)
        res.status(statusCodes.INTERNAL_SERVER_ERROR.code).json({
            code: statusCodes.INTERNAL_SERVER_ERROR.code,
            message: statusCodes.INTERNAL_SERVER_ERROR.message,
            data: null,
        })
        
            }    }