# Linked List

## Table of Contents

- [Introduction](#introduction)
- [Node Structure](#node-structure)
- [Create Operation](#create-operation)
- [Insert Operation](#insert-operation)
- [Delete Operation](#delete-operation)
- [Traverse Operation](#traverse-operation)
- [Search Operation](#search-operation)

## Introduction

A **linked list** is a dynamic data structure where each element (commonly called a _node_) contains data and a pointer (or reference) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory space, and their size can grow or shrink at runtime with relative ease.

**Key Advantages**:

- Dynamic size allocation.
- Easy insertion/deletion at the beginning or middle of the list.

**Key Disadvantages**:

- Random access is not possible (traversal is sequential).
- Extra memory overhead for storing pointers.

---

## Node Structure

A typical **singly linked list** node in C++ can be represented as a struct or class. Each node holds:

- A data field (the payload of the node).
- A pointer to the next node in the list.

**Code Example**:

File: `node.cpp`

```cpp
struct Node {
  int data;
  Node* next;
  Node(int value, Node* nextNode = nullptr) : data(value), next(nextNode) {}
};
```

## Create Operation

- The create operation typically involves initializing a `head` pointer to `nullptrptr`, indicating an empty list.
- You may also create an initial node if you want the list to start with some data

**Code Example**:

FFile: `linkedlist.h`

```cpp
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

struct Node {
    int data;
    Node* next;
    Node(int value, Node* nextNode = nullptr) : data(value), next(nextNode) {}
};

class LinkedList {
  private:
    Node* head;

  public:
    LinkedList();
    ~LinkedList();
};
#endif
```

File: `linkedlist.cpp`

```cpp
#include <iostream>

LinkedList::LinkedList() : head(nullptr) {}

LinkedList::~LinkedList() {
  Node* current = this->head;
  while (current != nullptr) {
    Node* nextNode = current->next;
    delete current;
    current = nextNode;
  }
}

int main() {
  LinkedList myList;
}
```

## Insert Operation

Insertion in a linked list can occur in multiple places:

- At the **head** (beginning) of the list.
- At the **tail** (end) of the list.
- After a **specified node**.

**Code Example**:

File: `linkedlist.h`

```cpp
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

struct Node {
  int data;
  Node* next;
  Node(int value, Node* nextNode = nullptr) : data(value), next(nextNode) {}
};

class LinkedList {
  private:
    Node* head;

  public:
    LinkedList();
    ~LinkedList();
    void insertAtHead(int value);
    void insertAtTail(int value);
    Node* insertAfterValue(int key, int value);
};
#endif
```

File: `linkedlist.cpp`

```cpp
#include <iostream>

LinkedList::LinkedList() : head(nullptr) {}

LinkedList::~LinkedList() {
  Node* current = this->head;
  while (current != nullptr) {
    Node* nextNode = current->next;
    delete current;
    current = nextNode;
  }
}

void LinkedList::insertAtHead(int value) {
  Node* newNode = new Node(value, this->head);
  newNode->next = this->head;
  this->head = newNode;
}

void LinkedList::insertAtTail(int value) {
  Node* newNode = new Node(value);
  if (this->head == nullptr) {
    this->head = newNode;
    return;
  }
  Node* temp = this->head;
  while (temp->next != nullptr) {
    temp = temp->next;
  }
  temp->next = newNode;
}

Node* LinkedList::insertAfterValue(int key, int value) {
  Node* temp = this->head;
  while (temp != nullptr && temp->data != key) {
    temp = temp->next;
  }
  if (temp == nullptr) {
    return nullptr;
  }
  Node* newNode = new Node(value, temp->next);
  temp->next = newNode;
  return newNode;
}

int main() {
  LinkedList myList;
  myList.insertAtHead(5);
  myList.insertAtTail(10);
  myList.insertAfterValue(5, 7);
}
```

## Delete Operation

Deletion can also occur in multiple scenarios:

- Deleting the **first** node.
- Deleting the **last** node.
- Deleting a node in the **middle** (given a specific value or position).

**Code Example**:

File: `linkedlist.h`

```cpp
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

struct Node {
  int data;
  Node* next;
  Node(int value, Node* nextNode = nullptr) : data(value), next(nextNode) {}
};

class LinkedList {
  private:
    Node* head;

  public:
    LinkedList();
    ~LinkedList();
    void insertAtHead(int value);
    void insertAtTail(int value);
    Node* insertAfterValue(int key, int value);
    Node* deleteByValue(int value);
};
#endif
```

File: `linkedlist.cpp`

```cpp
#include <iostream>

LinkedList::LinkedList() : head(nullptr) {}

LinkedList::~LinkedList() {
  Node* current = this->head;
  while (current != nullptr) {
    Node* nextNode = current->next;
    delete current;
    current = nextNode;
  }
}

void LinkedList::insertAtHead(int value) {
  Node* newNode = new Node(value, this->head);
  newNode->next = this->head;
  this->head = newNode;
}

void LinkedList::insertAtTail(int value) {
  Node* newNode = new Node(value);
  if (this->head == nullptr) {
    this->head = newNode;
    return;
  }
  Node* temp = this->head;
  while (temp->next != nullptr) {
    temp = temp->next;
  }
  temp->next = newNode;
}

Node* LinkedList::insertAfterValue(int key, int value) {
  Node* temp = this->head;
  while (temp != nullptr && temp->data != key) {
    temp = temp->next;
  }
  if (temp == nullptr) {
    return nullptr;
  }
  Node* newNode = new Node(value, temp->next);
  temp->next = newNode;
  return newNode;
}

bool LinkedList::deleteByValue(int value) {
  if (this->head == nullptr) {
    return nullptr;
  }

  if (head->data == value) {
    Node* nodeToRemove = head;
    head = head->next;
    nodeToRemove->next = nullptr;
    return nodeToRemove;
  }

  Node* current = this->head;
  while (current->next != nullptr && current->next->data != value) {
    current = current->next;
  }

  if (current->next == nullptr) {
    return nullptr;
  }

  Node* nodeToRemove = current->next;
  current->next = nodeToRemove->next;
  nodeToRemove->next = nullptr;
  return nodeToRemove;
}

int main() {
  LinkedList myList;
  myList.insertAtHead(5);
  myList.insertAtTail(10);
  myList.insertAfterValue(5, 7);

  Node* deleted = myList.deleteByValue(7);
  if(deleted) {
    std::cout << "Deleted: " << deleted->data << std::endl;
    delete deleted; // Free memory for the deleted node.
  } else {
    std::cout << "Value not found for deletion." << std::endl;
  }
}
```

## Traverse Operation

Traversing a linked list means visiting each node from the `head` to the last node. During traversal, you can:

- Print node data.
- Perform checks or calculations on each node.

**Code Example**:

File: `linkedlist.h`

```cpp
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

struct Node {
  int data;
  Node* next;
  Node(int value, Node* nextNode = nullptr) : data(value), next(nextNode) {}
};

class LinkedList {
  private:
    Node* head;

  public:
    LinkedList();
    ~LinkedList();
    void insertAtHead(int value);
    void insertAtTail(int value);
    Node* insertAfterValue(int key, int value);
    Node* deleteByValue(int value);
    void traverse() const;
};
#endif
```

File: `linkedlist.cpp`

```cpp
#include <iostream>

LinkedList::LinkedList() : head(nullptr) {}

LinkedList::~LinkedList() {
  Node* current = this->head;
  while (current != nullptr) {
    Node* nextNode = current->next;
    delete current;
    current = nextNode;
  }
}

void LinkedList::insertAtHead(int value) {
  Node* newNode = new Node(value, this->head);
  newNode->next = this->head;
  this->head = newNode;
}

void LinkedList::insertAtTail(int value) {
  Node* newNode = new Node(value);
  if (this->head == nullptr) {
    this->head = newNode;
    return;
  }
  Node* temp = this->head;
  while (temp->next != nullptr) {
    temp = temp->next;
  }
  temp->next = newNode;
}

Node* LinkedList::insertAfterValue(int key, int value) {
  Node* temp = this->head;
  while (temp != nullptr && temp->data != key) {
    temp = temp->next;
  }
  if (temp == nullptr) {
    return nullptr;
  }
  Node* newNode = new Node(value, temp->next);
  temp->next = newNode;
  return newNode;
}

bool LinkedList::deleteByValue(int value) {
  if (this->head == nullptr) {
    return nullptr;
  }

  if (head->data == value) {
    Node* nodeToRemove = head;
    head = head->next;
    nodeToRemove->next = nullptr;
    return nodeToRemove;
  }

  Node* current = this->head;
  while (current->next != nullptr && current->next->data != value) {
    current = current->next;
  }

  if (current->next == nullptr) {
    return nullptr;
  }

  Node* nodeToRemove = current->next;
  current->next = nodeToRemove->next;
  nodeToRemove->next = nullptr;
  return nodeToRemove;
}

void LinkedList::traverse() const {
  Node* temp = this->head;
  while (temp != nullptr) {
    std::cout << " " << temp->data;
    temp = temp->next;
  }
  std::cout << std::endl;
}

int main() {
  LinkedList myList;
  myList.insertAtHead(5);
  myList.insertAtTail(10);
  myList.insertAfterValue(5, 7);
  myList.traverse();  // Expected output: 5 7 10

  Node* deleted = myList.deleteByValue(7);
  if(deleted) {
    std::cout << "Deleted: " << deleted->data << std::endl;
    delete deleted; // Free memory for the deleted node.
  } else {
    std::cout << "Value not found for deletion." << std::endl;
  }

  myList.traverse();  // Expected output: 5 10
}
```

## Search Operation

Searching involves traversing the list to find a node that matches a given value. If found, you can return a pointer to that node or a boolean indicating success.

**Code Example**:

File: `linkedlist.h`

```cpp
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

struct Node {
  int data;
  Node* next;
  Node(int value, Node* nextNode = nullptr) : data(value), next(nextNode) {}
};

class LinkedList {
  private:
    Node* head;

  public:
    LinkedList();
    ~LinkedList();
    void insertAtHead(int value);
    void insertAtTail(int value);
    Node* insertAfterValue(int key, int value);
    Node* deleteByValue(int value);
    void traverse() const;
    Node* search(int key) const;
};
#endif
```

File: `linkedlist.cpp`

```cpp
#include <iostream>

LinkedList::LinkedList() : head(nullptr) {}

LinkedList::~LinkedList() {
  Node* current = this->head;
  while (current != nullptr) {
    Node* nextNode = current->next;
    delete current;
    current = nextNode;
  }
}

void LinkedList::insertAtHead(int value) {
  Node* newNode = new Node(value, this->head);
  newNode->next = this->head;
  this->head = newNode;
}

void LinkedList::insertAtTail(int value) {
  Node* newNode = new Node(value);
  if (this->head == nullptr) {
    this->head = newNode;
    return;
  }
  Node* temp = this->head;
  while (temp->next != nullptr) {
    temp = temp->next;
  }
  temp->next = newNode;
}

Node* LinkedList::insertAfterValue(int key, int value) {
  Node* temp = this->head;
  while (temp != nullptr && temp->data != key) {
    temp = temp->next;
  }
  if (temp == nullptr) {
    return nullptr;
  }
  Node* newNode = new Node(value, temp->next);
  temp->next = newNode;
  return newNode;
}

bool LinkedList::deleteByValue(int value) {
  if (this->head == nullptr) {
    return nullptr;
  }

  if (head->data == value) {
    Node* nodeToRemove = head;
    head = head->next;
    nodeToRemove->next = nullptr;
    return nodeToRemove;
  }

  Node* current = this->head;
  while (current->next != nullptr && current->next->data != value) {
    current = current->next;
  }

  if (current->next == nullptr) {
    return nullptr;
  }

  Node* nodeToRemove = current->next;
  current->next = nodeToRemove->next;
  nodeToRemove->next = nullptr;
  return nodeToRemove;
}

void LinkedList::traverse() const {
  Node* temp = this->head;
  while (temp != nullptr) {
    std::cout << " " << temp->data;
    temp = temp->next;
  }
  std::cout << std::endl;
}

Node* LinkedList::search(int key) const {
  Node* temp = this->head;
  while (temp != nullptr) {
    if (temp->data == key) {
      return temp;
    }
    temp = temp->next;
  }
  return nullptr;
}

int main() {
  LinkedList myList;
  myList.insertAtHead(5);
  myList.insertAtTail(10);
  myList.insertAfterValue(5, 7);
  myList.traverse();  // Expected output: 5 7 10

  Node* found = myList.search(7);
  if(found) {
    std::cout << "Found: " << found->data << std::endl;
  } else {
    std::cout << "Not found." << std::endl;
  }

  Node* deleted = myList.deleteByValue(7);
  if(deleted) {
    std::cout << "Deleted: " << deleted->data << std::endl;
    delete deleted; // Free memory for the deleted node.
  } else {
    std::cout << "Value not found for deletion." << std::endl;
  }

  myList.traverse();  // Expected output: 5 10
}
```
