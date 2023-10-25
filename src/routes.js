import express from 'express';
import pollController from './controller';

const pollRoute =  express.Router();
const polliController = new pollController();



//get all 
pollRoute.get('/',polliController.getAllpolls());
//get question
pollRoute.get('/:id',polliController.getQtn());


//add question
pollRoute.post('/',polliController.addQtn());
//add option
pollRoute.post('/',polliController.addOpt());
//add vote 
pollRoute.post('/',polliController.addVote());


//delete option
pollRoute.delete('/:id/:optID',polliController.deleteOpt());
//delete question
pollRoute.delete('/:id',polliController.deleteQtn());


export default pollRoute;