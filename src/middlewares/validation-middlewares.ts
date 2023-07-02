import { Films } from "@/protocols/films";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";
import * as erro from "@/errors/index"

export function validateSchema(schema: ObjectSchema<Films>) {
    return (req: Request, res: Response, next: NextFunction) => {    
      const body = req.body as Films
      const { error } = schema.validate(body, { abortEarly: false });
      
      if (!error) {
        next();
      }else{      
        res.status(httpStatus.BAD_REQUEST).send(erro.invalidDataError(error.details.map((d) => d.message)));
      }
  
      
    };
  }