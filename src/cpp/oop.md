# Object-Oriented Programming

## Table of Contents

- [Principles of OOP](#principles-of-oop)
- [Class Implementation](#class-implementation)
- [Pointer to Objects](#pointer-to-objects)
- [Constructors](#constructors)
- [`this` Pointer](#this-pointer)
- [Array of Objects](#array-of-objects)
- [Dynamic Allocation and De-allocation of Memory](#dynamic-allocation-and-de-allocation-of-memory)
- [Destructor](#destructor)
- [Default Argument](#default-argument)
- [Member Functions with Reference Return Type](#member-functions-with-reference-return-type)
- [Member Functions with `const` Return Type](#member-functions-with-const-return-type)
- [Inline Member Functions](#inline-member-functions)

## Principles of OOP

1. **Encapsulation**

   - Wrapping data and methods into a single unit (class).
   - Implementation details hidden from the outside world.

2. **Inheritance**

   - One class (derived class) acquires the properties and behaviors of another class (base class).
   - Promotes code reuse and hierarchical relationships.

3. **Polymorphism**

   - Ability to take many forms.
   - Typically achieved via function overloading, operator overloading, and virtual functions.

4. **Abstraction**

   - Exposing only essential features and hiding internal details.
   - Simplifies complexity by providing high-level interfaces.

## Class Implementation

- **Class Declaration**: Defined using class keyword.
- **Access Specifiers**:
  - `public`: Accessible from anywhere.
  - `private`: Accessible only within the class.
  - `protected`: Accessible within the class and derived classes.

**Code Example**:

`File: point.h`

```cpp
#ifndef POINT
#define POINT
#define SIZE 3

class Point {
  private:
    double x;
    double y;
    char label[SIZE];

  public:
    Point();
    Point(double a, double b);
    void setX(double value);
    void setY(double value);
    void setLabel(const char* s);
    double getX() const;
    double getY() const;
    void display();
};
#endif
```

`File: point.cpp`

```cpp
#include <iostream>
#include <cstring>

#include "point.h"

Point::Point() : x(0), y(0) {}

Point::Point(double a, double b) : x(a), y(b) {}

void Point::setX(double value) {
  x = value;
}

void Point::setY(double value) {
  y = value;
}

void Point::setLabel(const char* s) {
  std::strcpy(label, s);
}

double Point::getX() const {
  return x;
}

double Point::getY() const {
  return y;
}

void Point::display() {
  std::cout << "Point label is: " << label;
  std::cout << "x coordinate is: " << x;
  std::cout << "y coordinate is: " << y << std::endl;
}
```

## Pointer to Objects

- **Syntax**: `ClassName *ptr = &object`;
- **Usage**:
  - Access members using the arrow operator (`->`).
  - Dynamic allocation with `new`.

**Code Example**:

`File: point.h`

```cpp
#ifndef POINT
#define POINT
#define SIZE 3

class Point {
  private:
    double x;
    double y;
    char label[SIZE];

  public:
    Point();
    Point(double a, double b);
    void setX(double value);
    void setY(double value);
    void set_label(const char* s);
    double getX() const;
    double getY() const;
    void display();
};
#endif
```

`File: point.cpp`

```cpp
#include <iostream>

#include "point.h"

Point::Point() : x(0), y(0) {}

Point::Point(double a, double b) : x(a), y(b) {}

void Point::setX(double value) {
  x = value;
}

void Point::setY(double value) {
  y = value;
}

void Point::setLabel(const char* s) {
  std::strcpy(label, s);
}

double Point::getX() const {
  return x;
}

double Point::getY() const {
  return y;
}

void Point::display() {
  std::cout << "Point label is: " << label;
  std::cout << "x coordinate is: " << x;
  std::cout << "y coordinate is: " << y << std::endl;
}

void print(const Point* p, const Point& r) {
  std::cout << p->getX();
  std::cout << p->getY();


  std::cout << r.getX();
  std::cout << r.getY();
}

int main() {
    Point a;
    a.setX(120);
    a.setY(200);
    print(&a, a);
}
```

## Constructor

- **Purpose**: Initialize objects upon creation.
- **Types of Constructors**:
  - **Default Constructor**: No parameters.
  - **Parameterized Constructor**: One or more parameters.
  - **Copy Constructor**: Initializes an object using another object of the same class.

**Code Example**:

`File: point.h`

```cpp
#ifndef POINT
#define POINT
class Point {
  private:
    double x;
    double y;

  public:
    Point();
    Point(double a, double b);

};
#endif
```

`File: point.cpp`

```cpp
#include "point.h"

Point::Point() : x(0), y(0) {}

// This is also possible. However the other method is preferred.
// Point::Point() {
//   x = 0;
//   y = 0;
// }

Point::Point(double a, double b) : x(a), y(b) {}

// This is also possible. However the other method is preferred.
// Point::Point(double a, double b) {
//   x = a;
//   y = b;
// }

int main() {
    Point a;
    Point b(6, 7);
}
```

## `this` Pointer

- **Definition**: An implicit pointer to the current object.
- **Usage**: Commonly used when member variable names are shadowed by parameters, or to return the current object.

**Code Example**:

`File: counter.h`

```cpp
#ifndef COUNTER
#define COUNTER
class Counter {
  private:
    int value;

  public:
    Counter();
    void increment(int n);
};
#endif
```

`File counter.cpp`

```cpp
#include "counter.h"

Counter::Counter() : value(0) {}

void Counter::increment(int n) {
  this->value += n;
}

int main() {
  Counter x;
  Counter y;
  x.increment(5);
  y.increment(6);
}
```

## Array of Objects

- You can create arrays of class objects on the stack or heap.
- Access each element like a normal array element.

**Code Example**:

`File: car.h`

```cpp
#ifndef CAR
#define CAR
#define SIZE 20

class Car {
  private:
    char make[SIZE];
    int year;
    double price;

  public:
    Car();
    Car(const char* m, int y, double p);
    const char* getMake() const;
    void setMake(const char* m);
    int getYear() const;
    void setYear(int y);
    double getPrice() const;
    void setPrice(double p);
};
#endif
```

`File car.cpp`

```cpp
#include <cstring>
#include <iostream>

#include "car.h"

Car::Car() : year(0), price(0) {
  for (int j = 0; j < SIZE; j++) {
    this->make[j] = "\0";
  }
}

Car::Car(const char* m, int y, double p) : year(y), price(p) {
  assert(strlen(m) < SIZE);
  strcpy(this->make, m);
}

const char* Car::getMake() const {
  return this->make;
}

void Car::setMake(const char* m) {
  assert(strlen(m) < SIZE);
  strcpy(this->make, m);
}

int Car::getYear() const {
  return this->year;
}

void Car::setYear(int y) {
  this->year = y;
}

double Car::getPrice() const {
  return this->price;
}

void Car::setPrice(double p) {
  this->price = p;
}

void displayAll(Car x[], int n) {
  for (int j = 0; j < n; j++) {
    std::cout << x[j].getMake();
  }
}

void swap(Car *x, Car *y) {
  Car temp;
  temp = *x;
  *x = *y;
  *y = temp;
}

int main() {
  Car x[3];
  x[0].setMake("Honda");
  x[1].setMake("Ford");
  displayAll(x, 2);
  swap(&x[0], &x[1])
}
```

## Dynamic Allocation and De-allocation of Memory

- `new`: Allocates memory on the heap.
- `delete`: Frees memory previously allocated with new.
- `new[]` and `delete[]` for arrays.

**Code Example**:

`File: car.h`

```cpp
#ifndef CAR
#define CAR
#define SIZE 20

class Car {
  private:
    char make[SIZE];
    int year;
    double price;

  public:
    Car();
    Car(const char* m, int y, double p);
    const char* getMake() const;
    void setMake(const char* m);
    int getYear() const;
    void setYear(int y);
    double getPrice() const;
    void setPrice(double p);
};
#endif
```

`File car.cpp`

```cpp
#include <cstring>

#include "car.h"

Car::Car() : year(0), price(0) {
  for (int j = 0; j < SIZE; j++) {
    this->make[j] = "\0";
  }
}

Car::Car(const char* m, int y, double p) : year(y), price(p) {
  assert(strlen(m) < SIZE);
  strcpy(this->make, m);
}

const char* Car::getMake() const {
  return this->make;
}

void Car::setMake(const char* m) {
  assert(strlen(m) < SIZE);
  strcpy(this->make, m);
}

int Car::getYear() const {
  return this->year;
}

void Car::setYear(int y) {
  this->year = y;
}

double Car::getPrice() const {
  return this->price;
}

void Car::setPrice(double p) {
  this->price = p;
}

int main() {
  int *array;
  array = new int[2];
  array[0] = 79;
  array[1] = 99;
  delete[] array;

  Car *x;
  Car *y;
  x = new Car;
  y = new Car[3];
  delete x;
  delete[] y;
}
```

## Destructor

- **Definition**: A special member function called when an object goes out of scope or is deleted.
- **Syntax**: `~ClassName()`
- **Purpose**: Clean up resources, close files, release memory.

**Code Example**:

`File: person.h`

```cpp
#ifndef PERON
#define PERSON
class Person {
  private:
    int age;
    char* name;

  public:
    Person(const char* n, int a);
    ~Person();
    const char* getName() const;
    void setName(const char* n);
    int getAge() const;
    void setAge(int a);
};
#endif
```

`File person.cpp`

```cpp
#include <string.h>
#include <iostream>

#include "person.h"

Person::Person(const char* n, int a) : age(a) {
  this->name = new char[strlen(n) + 1];
  assert(this->name != 0);
  strcpy(this->name, m);
}

Person::~Person() {
  delete[] this->name;
  this->name = NULL;
}

const char* Person::getName() const {
  return this->name;
}

void Person::setName(const char* n) {
  assert(strlen(n) <= strlen(this->name));
  strcpy(this->name, n);
}

int Person::getAge() const {
  return this->age;
}

void Person::setAge(int a) {
  this->age = y;
}

int main() {
  Person x("Alice", 14);
  std::cout << x.getName();
  std::cout << x.getAge();
}
```

## Default Argument

- **Usage**: Provide default values for parameters in function declarations.
- **Placement**: Typically declared in header or class definition.

**Code Example**:

`File: person.h`

```cpp
#ifndef PERON
#define PERSON
class Person {
  private:
    int age;
    char* name;

  public:
    Person(const char* n, int a);
    ~Person();
    const char* getName() const;
    void setName(const char* n);
    int getAge() const;
    void setAge(int a);
};
#endif
```

`File person.cpp`

```cpp
#include <string.h>
#include <iostream>

#include "person.h"

Person::Person(const char* n = NULL, int a = 0) {
  this->age = a;
  this->name = new char[strlen(n) + 1];
  assert(this->name != 0);
  strcpy(this->name, m);
}

Person::~Person() {
  delete[] this->name;
  this->name = NULL;
}

const char* Person::getName() const {
  return this->name;
}

void Person::setName(const char* n) {
  assert(strlen(n) <= strlen(this->name));
  strcpy(this->name, n);
}

int Person::getAge() const {
  return this->age;
}

void Person::setAge(int a) {
  this->age = a;
}

int main() {
  Person x();

  Person y("Alice");
  std::cout << y.getName();

  Person z("John", 18)
  std::cout << z.getName();
  std::cout << z.getAge();
}
```

## Member Functions with Reference Return Type

- **Reason**: Allows direct manipulation of the class's private members without copying.
- **Example**: Return a reference to a private member, so it can be changed outside the function.

**Code Example**:

`File: mystring.h`

```cpp
#ifndef MYSTRING
#define MYSTRING
class MyString {
  private:
    int length;
    char* storageM;

  public:
    MyString(const char* s);
    ~MyString();
    const char& at(int i) const;
    char& at(int i);
    const char* getStorageM() const;
    void setStorageM(const char* s);
    int getLength() const;
    void setLength(int l);
};
#endif
```

`File mystring.cpp`

```cpp
#include <string.h>
#include <iostream>

#include "mystring.h"

MyString::MyString(const char* s) {
  this->length = (int) strlen(s);
  this->storageM = new char[strlen(s) + 1];
  assert(this->storageM != 0);
  strcpy(this->storageM, s);
}

MyString::~MyString() {
  delete[] this->storageM;
  this->storageM = NULL;
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

const char& MyString::at(int i) const {
  assert(i >= 0 && i < this->length);
  return storageM[i];
}

char& MyString::at(int i) {
  assert(i > 0 && i < this->length);
  return storageM[i];
}

int main() {
  MyString x("Hello World!");
  std::cout << x.at(0);
  std::cout << x.at(6);
}
```

## Member Functions with `const` Return Type

- **Usage**: Return a constant reference or constant value to prevent modification.
- **Example**: Returning a `const` reference to ensure the caller cannot alter the internal data.

**Code Example**:

`File: student.h`

```cpp
#ifndef STUDENT
#define STUDENT
class Student {
  private:
    int idM;
    char nameM[50];

  public:
    Student();
    Student(const char* name, const int id);
    char* getNameMPointer() const;
    const char* getNameMConstPointer() const;
    void setNameM(const char* n);
};
#endif
```

`File student.cpp`

```cpp
#include <string.h>

#include "student.h"

Student::Student() {
  strcpy(this->nameM, "None");
  this->idM = 0;
}

Student::Student(const char* name, const int id) {
  strcpy(this->nameM, name);
  this->idM = id;
}

char* Student::getNameMPointer() const {
  return this->nameM;
}

const char* Student::getNameMConstPointer() const {
  return this->nameM;
}

void Student::setNameM(const char* n) {
  assert(strlen(n) <= (int) strlen(this->nameM));
  strcpy(this->name, n);
}

int main() {
  char name[] = "Jane";
  Student s(name, 123456);

  char* bad = s.getNameMPointer();
  bad[0] = "P"; // s.nameM is now "Pane"

  const char* good = s.getNameMConstPointer();
  good[0] = "P"; // invalid
}
```

## Inline Member Function

- **Definition**: Inlining can be done implicitly or explicitly. A function declared with `inline` keyword, suggesting the compiler to replace the function call with the function body (optimization hint).
- **Usage**: Often used for small, frequently called functions.

**Code Example**:

`File: counter.h`

```cpp
#ifndef COUNTER
#define COUNTER
class Counter {
  private:
    int value;

  public:
    Counter();

    // implicit inline
    void increment(int n) {
      value += n;
    }

    // explicit inline
    inline void decrement(int n) {
      value -= n;
    }
};
#endif
```

`File counter.cpp`

```cpp
#include "counter.h"

Counter::Counter() : value(0) {}

int main() {
  Counter x;
  x.increment(5);
  x.decrement(6);
}
```
