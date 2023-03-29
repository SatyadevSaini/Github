//GLOBAL AXIOS
axios.defaults.headers.common["x-Auth-Token"] = ' its my era common for all requests' ;



//get API       /// working properly
function getData(){

    axios.get('https://jsonplaceholder.typicode.com/todos' , { params : {_limit :15}})
    .then(res => showOutput(res)).catch(err => showOutput(err))

    console.log("GET");

}


//post API     ///working properly here ... 
function postData(){

axios.post('https://jsonplaceholder.typicode.com/todos' , {
    title : "satyadev post a todos" ,
    completed : false 
}  ).then(res => showOutput(res))
.catch(err => showOutput(err))

    console.log("POST");
}

//patch API
function PatchData(){
    // put for update & patch for partailly update...

    // axios.put('https://jsonplaceholder.typicode.com/todos/1' , {
    //     title :'Update the TODO ',
    //     completed: true
    // } ).then(res => showOutput(res)).catch(err => showOutput(err));

    axios.patch('https://jsonplaceholder.typicode.com/todos/4' , {
        title :'Update the TODO by patch '
    } ).then(res => showOutput(res)).catch(err => showOutput(err));    // patch for partially update ...
    console.log("PATCH and PUT");
}

//delete Api
function deleteData(){
  axios.delete('https://jsonplaceholder.typicode.com/todos/4')
  .then(res => showOutput(res))
  .catch(err => console.log(err))

    console.log("DELETE");
}

//sim request
function sim(){

    // it will gave su data of both apis ...
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8') ,
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(axios.spread((todos , posts ) => showOutput(posts) ))  // print posts data here ..
    .catch(err => showOutput(err))

    // .then(res => 
    //   console.log(res[1]) , console.log(res[0]) ) .catch(err => showOutput(err))

    // console.log("SIM REQUEST");
}

//custom header
function customheader(){

    const customHeader = {  // it is our header  we can see it 
        headers : {
            'Content-Type': 'application/json',
          Authorization : 'sometoken' ,
          Name : 'satyadev' ,
          Position : 'java Developer'
        }
    };


    axios.post('https://jsonplaceholder.typicode.com/todos' , {
    title : "satyadev  write a custom header here" ,
    completed : false 
},  customHeader ).then(res => showOutput(res))
.catch(err => showOutput(err))
    console.log("CUSTOM HEADER");
}

//transform
function transform(){
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
          title: 'Hello World'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
          data.title = data.title.toUpperCase();
          return data;
        })
      };
      
      axios(options).then(res => showOutput(res));
      console.log('Transform Response');
}

//error handling
function handling(){
   
    //get a request which will gave error ...
    axios.get('https://jsonplaceholder.typicode.com/todoss')
    .then(res => showOutput(res))
    .catch(err => {
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);   //error type ...
            console.log(err.response.headers);
            console.log("hey"+err.message);    
      
            if (err.response.status === 404) {
              alert('Error: Page Not Found');
        }
    } else{
       console.log(err.message)
    }
})
    console.log("ERROR HANDLING");
}

//cancle
function cancle(){

    const source = axios.CancelToken.source();

    axios
      .get('https://jsonplaceholder.typicode.com/todos', {
        cancelToken: source.token
      })
      .then(res => showOutput(res))
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        }
      });
    
    if (true) {
      source.cancel('Request canceled!');
    }
    console.log('Cancel Token');
    }




// INTERCEPTING REQUEST AND RESPONCE 
axios.interceptors.request.use(
    config => {
      console.log(
        `${config.method.toUpperCase()} request sent to ${
          config.url
        } at ${new Date().getTime()}`
      );
    
      return config;
    },
    error => {
      return Promise.reject(error);
    }
    );


//create a method which will show output on the document page 

function showOutput(res){    //res has all the data inside it ...

    document.getElementById('res').innerHTML =`
    
    <div>
    <h5>Status: ${res.status}</h5>
    </div>
<br>
    <div>
    <h1> HEADER</h1>
    <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
    <br>

    <div class="card-header">
    DATA
  </div>
    <div class="card-body">
   
    <pre>${JSON.stringify(res.data, null, 1)}</pre>
    </div>

    <div class="card-header">
    Config
  </div>
    <div>
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
     document.getElementById('headers').addEventListener('click' , customheader);
     document.getElementById('transform').addEventListener('click' , transform);
     document.getElementById('error').addEventListener('click' , handling);
     document.getElementById('cancel').addEventListener('click' , cancle);
    
