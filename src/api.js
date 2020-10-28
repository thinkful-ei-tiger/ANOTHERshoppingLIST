
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lili';

function getItems(){
    return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
    let newItem = JSON.stringify({
        name: name
    });
    let methodCall = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: newItem};

    return fetch(`${BASE_URL}/items`, methodCall);
}


export default{
    getItems, 
    createItem,
}