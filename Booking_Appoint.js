
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');

var button = document.getElementById('button');

button.addEventListener('click' , function(e){

     e.preventDefault();

    localStorage.setItem('firstname' , firstname.value);
    localStorage.setItem('lastname' , lastname.value);

});
