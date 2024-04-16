const form = document.querySelector('form') // yr form tag select kiye hai
// const height = parseInt(document.querySelector('#height').value); // agar ham uper hi define karte hai to ye automatic 00 zero value dal dega

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const typeOfBmi = document.querySelector('#typeOfBMI');

    if(height === '' || height < 0 || isNaN(height)){
       results.innerHTML = `Plese give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Plese give a valid height ${weight}`
     } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result

        if (bmi < 18.6) {
            typeOfBmi.innerHTML = `Underweight`
          } else if (bmi >= 18.6 && bmi <= 24.9) {
            typeOfBmi.innerHTML = `Normal Range`
           } else {
            typeOfBmi.innerHTML = `Overweight`
           
        }

        results.innerHTML = `<span>${bmi}</span>`;
     }
});

