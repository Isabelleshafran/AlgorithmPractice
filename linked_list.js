/* 
Difference between Array & Linked List 
 
    How they physically store their data 
        Linked List Nodes live at randomly distributed addressed throughout
         your machine. Therefore, they have no indices. 

        Array -> Each element is actually sroted next to its neighbor in the 
        hardware of your computer


4 types of Linked List 

    1. Singly Linked: Head -> Tail 
    2. Doubly Linked: Head ⇄ Tail
    3. Multiply Linked: Nodes have two or more pointers, providing a variety of
        potential orderings: Head ⇄ Tail, A→Z, etc.
    4. Circularly Linked: Head→Tail→Head→Tail


Time & Space Complexity 

    Access & Search: O(n) & O(n)
    Insertion & Deletion: O(1) & O(n)

*/

// Given a Singly Linked List, write a function that reverses the order of the
// list's nodes.

function reverseLinkedList(linkedlist){
   let node = linkedlist.head;
   let first = node;
   let next = null; 
   let prev = null;

   while(next = node.next){
       node.next = prev; 
       prev = node; 
       node = next;
   }

   linkedlist.head = node
   linkedlist.head.next = prev;
   linkedlist.tail = first;

   return linkedlist
}

