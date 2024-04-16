const btns = document.querySelectorAll('.btn');
// console.log(btns); 
const body = document.querySelector('body') // ye "" me dena tag name ko

btns.forEach( function(b){
    // console.log(b);
    b.addEventListener('click',function(e){
        // console.log(e); // ye event ki all informtion deta hai 
        // console.log(e.target); // ye kis per click kra hai ye uska html code dikah dega console me 
        if(e.target.id === 'one'){
            body.style.backgroundColor = '#2A9D8F' // chaey to eshe bhi kar sakte hai e.target.id agar id ka naam box ke color jaise hi ho
        }
        if(e.target.id === 'two'){
            body.style.backgroundColor = '#E9C46A' 
        }
        if(e.target.id === 'three'){
            body.style.backgroundColor = '#F4A261' 
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
    });

});