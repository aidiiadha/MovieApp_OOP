//Import untuk menghantar ke mane2
var electron = require('electron')
var {ipcRenderer} = electron;

function addNewItem(){
    var name = document.getElementById('name_input').value;
    var description = document.getElementById('description_input').value;
    var place = document.getElementById('place_input').value;

    var newItem = {
        name:name,
        description:description,
        place:place
    }


    alert(newItem.name); //just for testing to check input user can be 
    alert(newItem.description);
    alert(newItem.place);

    //Ator ke mane2
    ipcRenderer.send('item:add', newItem); //utk send (return) data
}