
//get API 
function getData(){
    console.log("GET");
}

//post API
function postData(){
    console.log("POST");
}

//patch API
function PatchData(){
    console.log("PATCH");
}


//delete Api
function deleteData(){
    console.log("DELETE");
}

//sim request
function sim(){
    console.log("SIM REQUEST");
}

//custom header
function getheader(){
    console.log("CUSTOM HEADER");
}

//transform
function transform(){
    console.log("TRANSFORM");
}

//error handling
function handling(){
    console.log("ERROR HANDLING");
}

//cancle
function cancle(){
    console.log("CANCLE");
}


//create a method which will show output on the document page 

function showOutput(res){    //res has all the data inside it ...

    document.getElementById('res').innerHTML =`
    
    <div>
    <h5>Status: ${res.status}</h5>
    </div>
<br>
    <div>
    <h1> HEADER</h1>
    <pre>${JSON.stringify(res.header, null, 2)}</pre>
    </div>
    <br>

    <div class="card-body">
    <h1> DATA</h1>
    <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>

    <div>
    <h1> CONFIG</h1>
    <pre>${JSON.stringify(res.config , null , 2)}</pre>
    </div>
    <br>

    
    `;
}

     // now Use Evnet Listner on them ...
     document.getElementById('get').addEventListener('click' , getData);
     document.getElementById('post').addEventListener('click' , postData);
     document.getElementById('update').addEventListener('click' , PatchData);
     document.getElementById('delete').addEventListener('click' , deleteData);
     document.getElementById('sim').addEventListener('click' , sim);
     document.getElementById('headers').addEventListener('click' , getheader);
     document.getElementById('transform').addEventListener('click' , transform);
     document.getElementById('error').addEventListener('click' , handling);
     document.getElementById('cancel').addEventListener('click' , cancle);
    
