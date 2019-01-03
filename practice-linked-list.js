'use strict';

'use strict';

const LL = require('../../data-structures-and-algorithms/code-challenges/LinkedList/linked-list.js');

let list = new LL.LinkedList();
list.append('Sir Charlie');
list.append('Nana');
list.append('Grandma Roxy');
list.append('Grandpa Ron');
list.append('Zeeva');
list.append('The cats');

let current = list.head;
while(current.next){
console.log(current.value);
current = current.next;
}
console.log(current.value);

print() {
  let printArr = [];
  let current = this.head;
  while(current){
    printArr.push(current.value);
    current = current.next;
  }
  console.log(printArr);
  return printArr;
  }

let list = new LL.LinkedList();
  
list.print();

module.exports = { LinkedList };