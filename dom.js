
// Basic style
let heading = document.querySelector('h1');
let app = document.getElementById('app');
let notFound = document.querySelector('.notFound');

app.style.maxWidth = '500px';
app.style.marginLeft = 'auto';
app.style.marginRight = 'auto';
app.style.backgroundColor = '#f4f4f4';
app.style.padding = '30px';




// variable
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let searchFilter = document.getElementById('searchFilter');



// form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Search filter event
searchFilter.addEventListener('keyup', filterItems)

// Add item
function addItem(e){
    e.preventDefault();

    // Get input valur
    let inputItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(inputItem));

    // Create delete button element
    let deletebtn = document.createElement('button');


    // Add class delete button
    deletebtn.className = 'button-class delete';

    // Add button text node
    deletebtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deletebtn);

    // append li to list
    itemList.appendChild(li);
}



//Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Filter search items
function filterItems(e) {
    // convert text to lowecase
    let text = e.target.value.toLowerCase();
    
    //Get list
    let items = itemList.getElementsByTagName('li');
    
    // Conver html collection to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
            notFound.style.display = 'inline-block';
        }
    })
}