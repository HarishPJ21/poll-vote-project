export default class pollModel{
    constructor(id,qtn,opt){
        this.id=id;
        this.qtn=qtn,
        this.opt=opt
    }

    static addQtn(qtn){
        qtn.id = qtns.length + 1;
        qtns.push(qtn);
        return qtn;
    }
    static addVote(qtnID,optID){
        let qtn=this.get(qtnID);
        qtn.opt[optID].votes+=1;
    }
    static addOpt(id,opt_name,votes){   
        let qtn = qtns.find(
            (i) => i.id == id
        );
        qtn.opt.push({opt_name,votes});
    }

    static deleteQtn(id){
        let qtn =  this.get(id);
        let qtnIndex = qtns.findIndex(
            (i) => i.id == id
        );
        qtns.splice(qtnIndex,1);
        return qtn;
    }

    static deleteOpt(qtnID,optId){
        let qtn = this.get(qtnID);
        qtn.opt.splice(optId,1);
        return qtn;       
    } 
    static get(id){
        let qtn = qtns.find(
            (i) => i.id == id
        );
        return qtn;
    }
    
    static getAll(){
        return qtns;
    }
}

var qtns = [
    new pollModel(1,"question 1",[{opt_name:'opt 1',votes:1},{opt_name:'opt 2',votes:2},{opt_name:'opt 3',votes:3}]),
    new pollModel(2,"question 2",[{opt_name:'opt 1',votes:1},{opt_name:'opt 2',votes:2},{opt_name:'opt 3',votes:3}])
]