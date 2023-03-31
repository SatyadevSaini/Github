
function refreshPage(){
    window.location.reload();
} 
  
  
  //  get the element on which we want to add the data in the server ...
       // on submit button we want to add data on the server ...

       var button = document.getElementById('button');

       // add event listener on it 
       button.addEventListener('click' , postData );  // here data will be post on the server to the help of this 
 
    function  postData(e){
       
        e.preventDefault();

        let obj = {

             name  : document.getElementById('name').value ,
             email : document.getElementById('email').value ,
             phone :  document.getElementById('phone').value

        }

        axios.post("https://crudcrud.com/api/9f41d9caa6e84c9b866476d356db0634/app" , obj)
        .then(res =>  {

            showAddMessage(res) ,
            console.log(res) ,
            refreshPage()
        })
        .catch(err => console.log(err))

      }


      //it will show message on screen 
function showAddMessage(res){    //res has all the data inside it ...

    document.getElementById('message').innerHTML =`
    
    <div class="card-body">
   
    <pre> ${JSON.stringify(res.data.name)} Added Succesfully in Appointment App</pre>
      </div>
    `;
}
   
   

   //create a method which will show output on the document page 
function printData(res){   //res has all the data inside it...

   var data = document.getElementById('res').innerHTML =`
   <h3> Data is here </h3>
    <pre>: ${JSON.stringify(res.data , null ,2)}   </pre>
    
    `;    
}






    // get the delete button here 
    var del = document.getElementById('delete');
    //add Action Listner
    del.addEventListener('click' , deleteData)

    //delete Element By Id
    function deleteData(e){
        e.preventDefault();
        // get id here 
        var id = document.getElementById('id').value;
        axios.delete('https://crudcrud.com/api/9f41d9caa6e84c9b866476d356db0634/app/'+ id +"")
        .then(res =>  {
            console.log(res) ,
            refreshPage()
        }
            )
        .catch(err => console.log(err))

    }





   // View Data on the Screen here ...
    window.addEventListener("DOMContentLoaded" , () => {
       
        axios.get("https://crudcrud.com/api/9f41d9caa6e84c9b866476d356db0634/app")
    .then( (response) =>  {
    
        console.log(response);
        
              printData(response);
        
     }) 
    .catch(err => console.log(err))

    });