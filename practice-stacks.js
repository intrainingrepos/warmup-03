'use strict';

const stack = require('../../data-structures-and-algorithms/code-fellows/stacksAndQueues/stacks-and-queues.js');

let stack = new sAndQ.Stack();
stack.push('Teagan');
stack.push('Jared');
stack.push('Keely');
stack.push('Boone');

function newStack(stack) {
  while(stack.top.next) {
    console.log(stack.peek());
    stack.pop;
  }
};

newStack();