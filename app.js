const textInput = document.getElementById('text');
const list = document.getElementById('list');
const form = document.getElementById('form');
const topSection = document.querySelector('.top-section');

form.addEventListener('submit', function(e){
    if(textInput.value === ''){
        showMessage('You must eneter task!', 'warning');
    } else {
        // Add Item
        addItem(textInput);
        // Clear Input
        clearInput();
        // Show message
        showMessage('Task added to list', 'complete');
    }

    e.preventDefault();
})

// Delete book event
list.addEventListener('click', function(e){
    deleteItem(e.target);
})

// Mark as complete event
list.addEventListener('click', function(e){
    itemDone(e.target);
})


// Add item to list
function addItem(text){
    // Create element
    const item = document.createElement('li');
    // Add calss
    item.classList.add('item');
    // Add text to item
    item.innerHTML = `
        <div class='text-decoration'>
        ${text.value}
        </div>
        <span>
            <a href="#" class="done done-it"><i class="fas fa-check"></i></a>
            <a href="#" class="remove"><i class="fas fa-trash-alt"></i></a>
        </span>
        `
    // Appemd item to list
    list.appendChild(item);
}

// Clear input
function clearInput(){
    textInput.value = '';
}

// Show Message
function showMessage(message, className){
    // Create div 
    const div = document.createElement('div');
    // Add class
    div.classList.add(className);
    // Append text
    div.appendChild(document.createTextNode(message));
    // Insert div
    // topSection.insertBefore(div, form);
    topSection.insertAdjacentElement("beforeend", div);


    setTimeout(function(){
        div.style.display = 'none';
    }, 1500);
}

// Delete item
function deleteItem(target){
    if(target.parentElement.classList.contains('remove')){
        target.parentElement.parentElement.parentElement.remove();
        showMessage('Task Deleted', 'complete');
    }
}

// Mark as done item
function itemDone(target) {

}




