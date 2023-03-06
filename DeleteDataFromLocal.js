
var button = document.getElementById('button');


button.addEventListener('click' , add);
function add(e){

    e.preventDefault();

    //create adiv here firstly 
    let list = document.createElement('li'); //list created here ..
    
    //details print 

    //create the text here ...
    var text1 = document.createTextNode("Name: " + document.getElementById('firstname')
    .value + "  "+" LastName:  " + document.getElementById('lastname').value +"   " + "Email: "+
     document.getElementById('email').value + "  " );
    
     //delete button create here ...
     var deletebtn = document.createElement('button'); //button created here ..
     deletebtn.className="btn btn-danger btn-sm float-right delete";
     deletebtn.textContent='delete';

     //add text and delete button on the screen 
    list.appendChild(text1);
    list.appendChild(deletebtn);

   let main = document.getElementById('main');
   main.appendChild(list);
   

    //object create here....
    let myobj = {
        firstname : document.getElementById('firstname').value ,
        lastname : document.getElementById('lastname').value,
        email : document.getElementById('email').value
    }

    var serilize = JSON.stringify(myobj);
    console.log(myobj.firstname);
    localStorage.setItem( myobj.email, serilize);
}

//now add delete Functionality in it 
var del = document.getElementById('main');

del.addEventListener('click' , DeleteFun);

 function DeleteFun(e){
    
    // it will target the calss which contains delete in it 
    if(e.target.classList.contains('delete')){
       
        //it will target the parent element ...
        var li = e.target.parentElement;
        //remove the child ..
        del.removeChild(li);

        localStorage.removeItem(document.getElementById('email').value);
    }
 }
