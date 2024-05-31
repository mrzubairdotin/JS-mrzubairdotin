// ES6 

class UserOne {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const pOne = new UserOne("zubiar", "zubair@gmail.com", "123")

// console.log(pOne);
// console.log(pOne.encryptPassword());
// console.log(pOne.changeUsername());

// behind the scene

function UserTwo(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

UserTwo.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
UserTwo.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const pTwo = new UserTwo("zubair", "zubair@gmail.com", "123")

console.log(pTwo);
console.log(pTwo.encryptPassword());
console.log(pTwo.changeUsername());