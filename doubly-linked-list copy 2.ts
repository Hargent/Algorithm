//  Define List node where each node can have a data and a pointer
class CircularListNode {
    public data: number;
    public next: CircularListNode | null;
    public prev: CircularListNode | null;
    
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

//  Create Linked List class which starts with an head and then has operations
class CircularLinkedList {
    public head: CircularListNode | null;
    public tail: CircularListNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }
    //  Add a new node to the end of the list
    public append(data: number): void {
        const new_node = new CircularListNode(data);
        if(!this.head){
            this.head = new_node;
            this.tail = new_node;
            // Make it circular - single node points to itself
            new_node.next = new_node;
            new_node.prev = new_node;
            return;
        }
        
        // Insert new node at the end
        new_node.prev = this.tail;
        new_node.next = this.head;
        
        this.tail!.next = new_node;
        this.head!.prev = new_node;
        
        this.tail = new_node;
    }
    // Add to the front of the list
    public prepend(data: number): void {
        const new_node = new CircularListNode(data);
        if(!this.head){
            this.head = new_node;
            this.tail = new_node;
            // Make it circular - single node points to itself
            new_node.next = new_node;
            new_node.prev = new_node;
            return;
        }
        
        // Insert new node at the beginning
        new_node.next = this.head;
        new_node.prev = this.tail;
        
        this.head!.prev = new_node;
        this.tail!.next = new_node;
        
        this.head = new_node;
    }

    // Print linked list (must avoid infinite loop!)
    public printList(): void {
        if(!this.head){
            console.log("List is empty");
            return;
        }
        
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next!;
        } while(current !== this.head);
    }
    
    // lenght of the linked list (must avoid infinite loop!)
    public length(): number {
        if(!this.head){
            return 0;
        }
        
        let count = 0;
        let current = this.head;
        do {
            count++;
            current = current.next!;
        } while(current !== this.head);
        
        return count;
    }
    
    //  find a node by index
    public findByIndex(index: number): CircularListNode | null{
        if(!this.head || index < 0){
            return null;
        }
        
        let current = this.head;
        let count = 0;
        
        do {
            if(count === index){
                return current;
            }
            count++;
            current = current.next!;
        } while(current !== this.head);
        
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
        
        // Use the prev pointer - this is the power of circular linked lists!
        const newTail = this.tail.prev;
        if(newTail){
            newTail.next = this.head;
            this.head!.prev = newTail;
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
        
        const newHead = this.head.next;
        if(newHead){
            newHead.prev = this.tail;
            this.tail!.next = newHead;
        }
        this.head = newHead;
    }

}
 
const newCircularLinkedList = new CircularLinkedList()
newCircularLinkedList.append(1)
newCircularLinkedList.append(2)
newCircularLinkedList.append(3)
newCircularLinkedList.append(4)
newCircularLinkedList.prepend(0)    
// pop the last node
newCircularLinkedList.pop()
newCircularLinkedList.printList()
console.log(`The length of the linked list is: ${newCircularLinkedList.length()}`)
