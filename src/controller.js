import pollModel from "./models.js";

export default class pollController{
    getAllpolls(req,res){
        const polls = pollModel.getAll();
        res.status(200).send(products);
    }
    getQtn(req,res){
        const id =  req.params.id;
        const qtn = pollModel.get(id); 
        if(!qtn){
            res.status(404).send('qtn not found');
        }else{
            return res.status(200).send(qtn);
        }
    }

    addQtn(req,res){
        const {qtn, opt} = req.body;
        const newqtn = {
            qtn,
            opt:opt.split(";"),
        };
        const createdRecord = pollModel.addQtn(newqtn);
        res.status(201).send(createdRecord);
    }

    addOpt(req,res){
        const {qtnID, opt, votes} = req.body;
        const newOpt = {
            id,
            opt,
            votes:perseFloat(votes),
        };
        const createdRecord = pollModel.addOpt(...newOpt);
        res.status(201).send(createdRecord);
    }

    addVote(req,res){
        const {qtnID, optID} = req.body;
        const newVote = {
            qtnID:perseFloat(qtnID),
            optID:perseFloat(optID),
        };
        const createdRecord = pollModel.addVote(newVote);
        res.status(201).send(createdRecord);
    }
    deleteQtn(req,res){
        const id =  req.params.id;
        const qtn = pollModel.deleteQtn(id); 
        if(!qtn){
            res.status(404).send('qtn not found');
        }else{
            return res.status(200).send(qtn);
        }
        // const createdRecord = pollModel.addQtn(newqtn);
        // res.status(201).send(createdRecord);
    }
    deleteOpt(req,res){
        const id =  req.params.id;
        const optID =  req.params.optID;
        const qtn = pollModel.deleteOpt(id,optID);
        if(!qtn){
            res.status(404).send('qtn not found');
        }else{
            return res.status(200).send(qtn);
        }         
        // const {qtn, opt} = req.body;
        // const newqtn = {
        //     qtn,
        //     opt:opt.split(";"),
        // };
        // const createdRecord = pollModel.addQtn(newqtn);
        // res.status(201).send(createdRecord);
    }
    

}