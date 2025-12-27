# Singly Linked List implementation in Python
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

    # Prepend
    # insert   

my_list = LinkedList(10)
my_list.append(20)
print(my_list.head)        # Output: 10


