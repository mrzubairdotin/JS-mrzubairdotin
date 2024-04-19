// Generate a randam color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// console.log(randomColor()); //ab ye hme #code me hme randam color value dega 


let intervalId;

const startChangingColor = function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    } 
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
    }  // if !invervalId karne se ab ye memory me override nhi krega or memory bhi jyada consume nhi hogi
}


const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null; // agar value flash ho jate hani khali ho jate varna kaam tho karta hai per override kar deta hai jisse memory thoda jyada consume hogi 
}

document.querySelector('#start').addEventListener('click', startChangingColor )

document.querySelector('#stop').addEventListener('click',stopChangingColor )

