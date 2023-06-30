import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getFilms(req: Request, res: Response){
    
}

export async function getByPlatform(req: Request, res: Response){
    
}

export async function getByGenre(req: Request, res: Response){
    
}

export async function createFilms(req: Request, res: Response){
    try {
        const { body } = req;
            
        
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }
}

export async function deleteFilms(req: Request, res: Response){
    
}

export async function updateFilms(req: Request, res: Response){
    
}