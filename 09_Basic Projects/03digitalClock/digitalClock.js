// const digitalClock = document.querySelector('#clock');
// let date = new Date();
// console.log(date.toLocaleTimeString());

const digitalClock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000);