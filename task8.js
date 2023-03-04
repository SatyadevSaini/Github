var form =document.getElementById('addForm');
var form2=document.getElementById('items');

form.addEventListener('submit',Run);
// Delete event
form2.addEventListener('click',RemoveItem);
function Run(e)
{
    e.preventDefault();
    //console.log(form2.value);
    var value=document.getElementById('item').value;

    
    var form3=document.createElement('li');
    form3.className='list-group-item';
    form3.appendChild(document.createTextNode(value));
   
    var form4=document.createElement('button');
    form4.className='btn btn-danger btn-sm float-right delete';
    form4.appendChild(document.createTextNode('Delete'))

    var form5=document.createElement('button');
    form5.className='btn btn-dark btn-sm float-right edit';
    form5.appendChild(document.createTextNode('Edit'))

    
    
    //console.log(form4);
    //pushing to dom
    /* var insert=document.querySelector('div .list-group');
    var insert1=document.querySelector('div .list-group-item');
    insert.insertBefore(form4,insert1); */

    form3.appendChild(form4);

    form3.appendChild(form5);
    
    form2.appendChild(form3);

    
}


//adding delete functionality
// Remove item
function RemoveItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure'))
        {
            var li=e.target.parentElement;
            form2.removeChild(li);
        }
        
    }
}