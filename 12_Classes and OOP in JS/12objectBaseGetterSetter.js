const User = {
    _email: 'zubair.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const zubair = Object.create(User)
console.log(zubair.email);