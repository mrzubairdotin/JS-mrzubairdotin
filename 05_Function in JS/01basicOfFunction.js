function firstFun (){
    console.log("Aalam");
    console.log("Aarif");
    console.log("Aaris");
    console.log("Aatif");
}
firstFun()

function addTwoNumber(num1,num2){
    console.log(num1 + num2);
}
addTwoNumber(5,8)  // Esse bhi result show karta hai 
console.log(addTwoNumber(5,55)) //eshe bhi result per eshme undifind bhi show krega


function add2num (num3,num4){
    //let result = num1 + num2;
    //return result;

    return num4 + num4; // Return ke aadar ka value lene ke liye hme ek alg var bi bnan padta hai 

    //console.log("Zubair"); // Ese show nhi krega return se upper ka hi show kartahai 
}
console.log(add2num(45,86));

function userLoginMsg(username = "sample" // Ye deault value ho jaye gi
    ){
    if(username === undefined // !undefined bhi same work karta  hia
    
        ){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
console.log(userLoginMsg());

// ... ko hm rest opertar bhi khete hai or esshe spered bhi khete hai esske do alg alg kaam hai 

function plusCartPrice(...price){
    return price

}

console.log(plusCartPrice(199,250,399)); // Ye hme data array ki from me deta hai


// ------ funtion ke aandar object ko dalna -------- //

const user5 = {
    name: "Football",
    price: 199
}

function fun5(_anyobject){ // agar hm dirct anyOnjeect keyword type karde tho bhi object include ho jayega 
console.log(`This is item : ${name} and price is : ${price}`);

}

console.log(fun5(user5) ); // jab ham result dhkne ho tho funtion ke aadar us object ka naam bhi type karna hoga

// ------------------------
// Direct object bhi pass kar sakte hai
fun5({
    name: "Zubair",
    price: 999
})


// ------------- Funtion ke aadnar arry ko pass karna --------------//
const myNewArray = [200,526,895,552,566]
function secondValue(GetArray) {
    return GetArray[2]
    
}

console.log(secondValue(myNewArray));

console.log(secondValue([200,545,486,159])) // ab bhi ye secong value dega