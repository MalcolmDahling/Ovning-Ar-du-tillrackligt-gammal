document.getElementById('button').addEventListener('click', function(){

    let age = document.getElementById('input').value;

    if( Number.isInteger( parseInt(age) ) ){
        if(age < 18){
            alert('You are too young.');
        }
        if(age >= 18 && age < 65){
            alert('You are the right age.');
        }
        if(age >= 65){
            alert('You are too old.');
        }
    }

    else{
        alert('"'+ age + '" is not a number.');
    }
});