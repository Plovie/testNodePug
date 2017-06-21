const serviceUsers = require('../services/Users');

class User {
    constructor(data = {}, id = ''){
        this.id = id || serviceUsers.getLastId() + 1;
        this.name = data.name || '';
        this.age = data.age || 0;
    }

    checkAllKeys(data){
        let UserKeys = Object.keys(this);
        let UserKeysLength = UserKeys.length
       return JSON.stringify(Object.keys(data)) === JSON.stringify(UserKeys.slice(1,UserKeysLength+1));
    }

    checkNotEmpty(data){
        let tempArr = Object.keys(data);

        return tempArr.filter(function(value){
            if(!data[value]){
                return value;
            }
        });
    }

    checkPresenceKey(data){
        let dataKey = Object.keys(data);
        let UserKey = Object.keys(this);
        return dataKey.filter(function(key){
            return !UserKey.includes(key);
        });
    }

    checkIdExists(){
        return serviceUsers.getOneById(this.id).length;
    }

    createUser(data){
        console.log(data);
        if(this.checkAllKeys(data) && !this.checkNotEmpty(data).length){
            serviceUsers.create(this);
            return true;
        }else{
            return false;
        }
    }

    updateUser(data){
        if(this.checkIdExists() && !this.checkPresenceKey(data).length &&  !this.checkNotEmpty(data).length){
            return serviceUsers.update(this, data);
        }else{
            return false;
        }

    }

    deleteUser(){
        if(this.checkIdExists()){
            serviceUsers.delete(this.id);
            return true;
        }else{
            return false;
        }

    }

    replaceUser(data){
        if(this.checkAllKeys(data) && this.checkIdExists() &&  !this.checkNotEmpty(data).length){
            serviceUsers.replace(this);
            return true;
        }else{
            return false;
        }
    }




}

module.exports = User;