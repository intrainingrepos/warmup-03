'use strict';

const sAndQ = require('../../data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues');

let queue = new sAndQ.Queue();
queue.enqueue('Teagan');
queue.enqueue('Jared');
queue.enqueue('Keely');
queue.enqueue('Boone');

function newQueue(queue) {
  while(queue.peek() !== null) {
    console.log(queue.peek());
    queue.dequeue();
  }
};

newQueue();