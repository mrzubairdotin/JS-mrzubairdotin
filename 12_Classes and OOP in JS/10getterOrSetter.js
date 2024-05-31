class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}thanks`
    }

    set password(value){
        this._password = value
    }
}

const zubair = new User("mrzubair@gmail.com", "abc")
console.log(zubair.email);