const serviceUser = require('../services/users');
const User = require('../models/user');
module.exports ={

    getAll(req, res){
        let allUsers = serviceUser.getAll();
        res.status(200).render('index.pug',{users: allUsers});
    },

    getOne(req, res){
        let id = parseInt(req.params.id);
        let user = serviceUser.getOneById(id);
        if(user){
            console.log(user);
            res.status(200).send({user:user[0]});
        }else{
            res.status(400).send('this User doesn\'t exist');
        }

    },

    create(req, res){

        let data = req.body;
        let user = new User(data);
        console.log(data);
        if(user.createUser(data)){
            res.status(201).send();
        }else{
            res.status(400).send();
        }
    },

    update(req, res){
        let data = req.body;
        let id = parseInt(req.params.id);
        let user = new User(data,id);
        let userUpdated = user.updateUser(data);
        if(userUpdated){
            res.status(200).send(userUpdated)
        }else{
            res.status(400).send()
        }
    },

    delete(req,res){
        let id = parseInt(req.params.id);
        let user = new User({}, id);
        let userDeleted = user.deleteUser();
        if(userDeleted){
            res.status(200).send()
        }else{
            res.status(400).send()
        }

    },

    replace(req, res){
        let data = req.body;
        let id = parseInt(req.params.id);
        let user = new User(data,id);
        if(user.replaceUser(data)){
            res.status(200).send(User)
        }else{
            res.status(400).send()
        }
    }

}