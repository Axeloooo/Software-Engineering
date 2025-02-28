# Copying Objects

## Table of Contents

- [Copy Constructor](#copy-constructor)
- [Overloading Assignment Operator](#overloading-assignment-operator)

## Copy Constructor

- **Definition**: A **copy constructor** is a special constructor used to create a new object as a copy of an existing object.
- **Signature**: `ClassName(const ClassName& other)`.
- **Purpose**:
  - Enables control over how objects are copied.
  - Helps prevent unwanted shallow copying when the class manages resources (e.g., dynamic memory).

**Code Example**:

File: `mystring.h`

```cpp
#ifndef MYSTRING
#define MYSTRING
class MyString {
  private:
    int lengthM;
    char* storageM;

  public:
    MyString();
    MyString(const char* s);
    Mystring(const MyString& source);
    ~MyString();
    const char* getStorageM() const;
    void setStorageM(const char* s);
    int getLength() const;
    void setLength(int l);
};
#endif
```

File: `mystring.cpp`

```cpp
#include <string.h>
#include <iostream>

#include "mystring.h"

MyString::MyString() : lengthM(0), storageM(new char[1]) {
  this->storageM[0] = "\0";
  std::cout << "default constructor called.";
}

MyString::MyString(const char* s): lengthM((int) strlen(s)) {
  this->storageM = new char[this->lengthM+1];
  assert(this->storageM != 0);
  strcpy(this->storageM, s);
  std::cout << "constructor called.";
}

MyString::MyString(const MyString& s) : lengthM(s.lengthM) {
  this->storageM = new char[this->lengthM + 1];
  assert(this->storageM != 0);
  strcpy(this->storageM, s.storageM);
  std::cout << "copy constructor called.";
}

MyString::~MyString() {
  delete[] this->storageM;
  this->storageM = NULL;
  std::cout << "destructor called.";
}

const char* MyString::getStorageM() const {
  return this->storageM;
}

void MyString::setStorageM(const char* s) {
  assert(strlen(s) <= strlen(this->storageM));
  strcpy(this->storageM, n);
}

int MyString::getLength() const {
  return this->length;
}

void MyString::setLength(int l) {
  this->length = l;
}

int main() {
  MyString s1("World");
  MyString s2 = s1;
}
```

## Overloading Assignment Operator

- **Definition**: The assignment operator (operator=) is used to copy the value from one object to another already-existing object.
- **Signature**: `ClassName& operator=(const ClassName& other);`
- **Return Type**: It typically returns a reference to the current object (`*this`) to allow chained assignments (e.g., `a = b = c;`).
- **Key Considerations**:
  - Must handle self-assignment safely (i.e., when `this == &other`).
  - Ensure correct handling of resources (e.g., deallocate existing memory before allocating new memory to avoid leaks).

**Code Example**:

File: `mystring.h`

```cpp
#ifndef MYSTRING
#define MYSTRING
class MyString {
  private:
    int lengthM;
    char* storageM;

  public:
    MyString();
    MyString(const char* s);
    Mystring(const MyString& source);
    MyString& operator=(MyString& rhs);
    ~MyString();
    const char* getStorageM() const;
    void setStorageM(const char* s);
    int getLength() const;
    void setLength(int l);
};
#endif
```

File: `mystring.cpp`

```cpp
#include <string.h>
#include <iostream>

#include "mystring.h"

MyString::MyString() : lengthM(0), storageM(new char[1]) {
  this->storageM[0] = "\0";
  std::cout << "default constructor called.";
}

MyString::MyString(const char* s): lengthM((int) strlen(s)) {
  this->storageM = new char[this->lengthM + 1];
  assert(this->storageM != 0);
  strcpy(this->storageM, s);
  std::cout << "constructor called.";
}

MyString::MyString(const MyString& source) : lengthM(source.lengthM) {
  this->storageM = new char[this->lengthM+1];
  assert(this->storageM != 0);
  strcpy(this->storageM, source.storageM);
  std::cout << "copy constructor called.";
}

MyString& MyString::operator=(MyString& rhs) {
  if (this != &s) {
    delete[] this->storageM;
    this->lengthM = rhs.lengthM;
    this->storageM = new char[this->lengthM+1];
    assert(this->storageM != NULL);
    strcpy(this->storageM, rhs.storageM);
  }
  std::cout << "assignment operator called.";
  return *this;
}

MyString::~MyString() {
  delete[] this->storageM;
  this->storageM = NULL;
  std::cout << "destructor called.";
}

const char* MyString::getStorageM() const {
  return this->storageM;
}

void MyString::setStorageM(const char* s) {
  assert(strlen(s) <= strlen(this->storageM));
  strcpy(this->storageM, n);
}

int MyString::getLength() const {
  return this->length;
}

void MyString::setLength(int l) {
  this->length = l;
}

int main() {
  MyString s1("World");
  MyString s3("ABC");
  s1 = s3;
}
```
