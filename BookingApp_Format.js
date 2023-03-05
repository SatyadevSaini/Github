


var button = document.getElementById('button');


button.addEventListener('click' , add);
function add(e){

    e.preventDefault();

    //object create here....

    let myobj = {
        firstname : document.getElementById('firstname').value ,
        lastname : document.getElementById('lastname').value
    }

    var serilize = JSON.stringify(myobj);

    console.log(myobj.firstname);

    localStorage.setItem( myobj.firstname, serilize);

}



