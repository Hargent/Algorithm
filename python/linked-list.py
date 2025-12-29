# Singly Linked List implementation in Python
 # type: ignore
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None



class LinkedList :
    def __init__(self, data):
        # Initializes the linked list with a head node
        # Data is the data for the head node
        new_node = Node(data)
        self.head = new_node
        self.tail = new_node
        self.length = 1
        # append new node
      
    # Append
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            self.length = 1
        else:
            self.tail.next = new_node
            self.tail = new_node
            self.length += 1 
    # Print list
    def print_list(self):
        current = self.head
        while current:
            print(f'{current.data} -> ', end='')
            current = current.next
        print('List is empty' if not self.head else 'None')

    # pop
    def pop(self)-> int:
        # no item
        if not self.head:
            return None

        # one item
        elif self.head == self.tail:
            
            self.head = None
            self.tail = None
            self.length -= 1
            return self.head

        # multiple items 
        else:
            current = self.head
            while current.next != self.tail:
                current = current.next
            self.tail = current
            self.tail.next = None
            self.length -= 1
            return self.tail
                
    
    # Prepend
    def prepend(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            self.length = 1
        else:
            new_node.next = self.head
            self.head = new_node
            self.length += 1
    #  Pop first
    def pop_first(self):
        if not self.head:
            return None
        elif self.head == self.tail:
      
            self.head = None
            self.tail = None
            self.length -= 1
            return self.head
        else:
            
            self.head = self.head.next
            self.length -= 1
            return self.head
    #  Get by index
    def get_by_index(self, index):
        # check for valid index
        if index < 0 or index > self.length - 1:
            return None
        current  = self.head
        count = 0
        for _ in range(index):
        # while count != index:
            current = current.next
            count += 1
        return current
    # Set by index
    def set_by_index(self, index, data):
        current  = self.get_by_index(index)
        if current is not None:
            current.data = data
        return current
    # insert   
    def insert(self, index, data):
        if index < 0 or index > self.length :
            return None
        
        # If just 1 item or zero index
        if self.length == 1 or index == 0:
            self.prepend(data)
            return True
        
        new_node = Node(data)
        current = self.get_by_index(index - 1)
        if current:
            new_node.next = current.next 
            current.next = new_node
            return True
        return False
    #  remove by index
    def remove_by_index(self, index):
        if index < 0 or index >= self.length :
            return None
        if self.length == 1 or index == 0:
            return self.pop_first()
            
        if index == self.length:
            return self.pop()
        prev = self.get_by_index(index - 1)
        current = self.get_by_index(index)
        
        if prev:
            prev.next = current.next
            self.length -= 1
            return current
        
    # Reverse
    def reverse(self):
        current = self.head
        before = None
        # after = current.next
        # swith head and tail
        self.head = self.tail
        self.tail = current
        for _ in range(self.length):
            after = current.next
            current.next = before
            before = current
            current = after
            


        
        

my_list = LinkedList(10)
my_list.append(20)
my_list.append(30)
my_list.print_list()       # Output: 10 -> 20 -> 30 -> None
# print(my_list.get_by_index(3))
# print(my_list.set_by_index(2, 100))
# my_list.remove_by_index(2)
my_list.reverse()
my_list.print_list()
# print(f'Popped item = {my_list.pop()}')
# my_list.print_list()       # Output: 10 -> 20 -> None
# print(f'Popped item = {my_list.pop()}')
# my_list.print_list()       # Output: 10 -> None
# # print(f'Popped item = {my_list.pop()}')
# my_list.print_list()       # Output: List is empty