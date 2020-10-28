import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

import api from './api';

import store from './store';


const main = function () {

  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

  api.getItems().then(response => response.json())
  .then(responseJson => console.log(responseJson));
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
