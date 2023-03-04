var form =document.getElementById('addForm');
var form2=document.getElementById('items');

//filter
var filter=document.getElementById('filter');

form.addEventListener('submit',Run);

// Delete event
form2.addEventListener('click',RemoveItem);

//search event
filter.addEventListener('keyup',Search);

function Run(e)
{
    e.preventDefault();
    //console.log(form2.value);
    var value=document.getElementById('item').value;
    var value1=document.getElementById('decription').value;


    var form3=document.createElement('li');
    form3.className='list-group-item';
    form3.appendChild(document.createTextNode(value));
    form3.appendChild(document.createTextNode(" "+value1));

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

//adding search functionality

function Search(e)
{
    //convert the text to lower case
    var text=e.target.value.toLowerCase();
    //console.log(text);
    //grab all the li's
    var items=document.getElementsByTagName('li');
    //console.log(items);
   //as after that all li's are in html collection so, just convert them to array
   //convert to an array
   Array.from(items).forEach(function(item)
   {
    var itemName=item.firstChild.textContent;
    var item_child=item.childNodes[1].textContent;
    //console.log(item_child);
    //now we comapare the li's with the given text
   /*  if(itemName.toLowerCase().indexOf(text)!=-1)
    {
       item.style.display='block';
    }
    else{
        item.style.display='none';
    } */

    if(item_child.toLowerCase().indexOf(text)!=-1 || itemName.toLowerCase().indexOf(text)!=-1)
    {
       item.style.display='block';
    }
    else{
        item.style.display='none';
    }
   });


}
