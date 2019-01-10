'use strict';

const ll = require('../../data-structures-and-algorithms/code-fellows/LinkedList/linked-list.js');

let list = new ll.LinkedList();
list.append('Teagan');
list.append('Jared');
list.append('Keely');
list.append('Boone');

function newList(list) {
  let current = list.head;
  while(current) {
    console.log(current.value);
    current = current.next;
  }
};

newList();