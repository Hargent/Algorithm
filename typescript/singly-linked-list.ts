//  Define List node where each node can have a data and a pointer
class SinglyListNode {
    public data: number;
    public next: SinglyListNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

//  Create Linked List class which starts with an head and then has operations
class SinglyLinkedList {
    public head: SinglyListNode | null;
    public tail: SinglyListNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }
    //  Add a new node to the end of the list
    public append(data: number): void {
        const new_node = new SinglyListNode(data);
        if(!this.head){
            this.head = new_node;
            this.tail = new_node;
            return;
        }
        if(this.tail){
            this.tail.next = new_node;
        }
        this.tail = new_node;
    }
    // Add to the front of the list
    public prepend(data: number): void {
        const new_node = new SinglyListNode(data);
        if(!this.head){
            this.head = new_node;
            this.tail = new_node;
            return;
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
    public findByIndex(index: number): SinglyListNode | null{
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
        if(!this.head){
            return;
        }
        
        // Handle single node case
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        
        // Find second-to-last node
        let current = this.head;
        while(current.next !== this.tail){
            current = current.next!;
        }
        
        current.next = null;
        this.tail = current;
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
    }

}
 
const newSinglyLinkedList = new SinglyLinkedList()
newSinglyLinkedList.append(1)
newSinglyLinkedList.append(2)
newSinglyLinkedList.append(3)
newSinglyLinkedList.append(4)
newSinglyLinkedList.prepend(0)    
// pop the last node
newSinglyLinkedList.pop()
newSinglyLinkedList.printList()
console.log(`The length of the linked list is: ${newSinglyLinkedList.length()}`)