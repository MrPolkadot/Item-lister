let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click',removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);

//Add item 
function addItem(e){
    e.preventDefault();

  //Get input value
  let newItem = document.getElementById('item').value;

  //create new li element
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

    //create del button element
    let deleteButton = document.createElement('button');

    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);

  itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}