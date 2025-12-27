//  Define List node where each node can have a data and a pointer
class DoublyListNode {
    public data: number;
    public next: DoublyListNode | null;
    public prev: DoublyListNode | null;
    
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

//  Create Linked List class which starts with an head and then has operations
class DoublyLinkedList {
    public head: DoublyListNode | null;
    public tail: DoublyListNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }
    //  Add a new node to the end of the list
    public append(data: number): void {
        const new_node = new DoublyListNode(data);
        if(!this.head){
            this.head = new_node;
            this.tail = new_node;
            return;
        }
        if(this.tail){
            this.tail.next = new_node;
            new_node.prev = this.tail;
        }
        this.tail = new_node;
    }
    // Add to the front of the list
    public prepend(data: number): void {
        const new_node = new DoublyListNode(data);
        if(!this.head){
            this.head = new_node;
            this.tail = new_node;
            return;
        }
        if(this.head){
            this.head.prev = new_node;
        }
        new_node.next = this.head;
        this.head = new_node;
    }

    // Print linked list
    public printList(): void {
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    // lenght of the linked list
    public length(): number {
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }
    //  find a node by index
    public findByIndex(index: number): DoublyListNode | null{
        let current = this.head;
        let count = 0;
        while(current){
            if(count === index){
                return current;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Remove the last element
    public pop(): void {
        if(!this.tail){
            return;
        }
        
        // Handle single node case
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        
        // Use the prev pointer - this is the power of doubly linked lists!
        const newTail = this.tail.prev;
        if(newTail){
            newTail.next = null;
        }
        this.tail = newTail;
    }
    // Remove the first element
    public shift(): void {
        if(!this.head){
            return;
        }
        
        // Handle single node case
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        
        this.head = this.head.next;
        this.head!.prev = null;
    }

}
 
const newDoublyLinkedList = new DoublyLinkedList()
newDoublyLinkedList.append(1)
newDoublyLinkedList.append(2)
newDoublyLinkedList.append(3)
newDoublyLinkedList.append(4)
newDoublyLinkedList.prepend(0)    
// pop the last node
newDoublyLinkedList.pop()
newDoublyLinkedList.printList()
console.log(`The length of the linked list is: ${newDoublyLinkedList.length()}`)