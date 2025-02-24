# Object-Oriented Programming

## Table of Contents

- [Principles of OOP](#principles-of-oop)
- [Class Implementation](#class-implementation)
- [Pointer to Objects](#pointer-to-objects)
- [Constructors](#constructors)
- [`this` Pointer](#this-pointer)
- [Array of Objects](#array-of-objects)
- [Dynamic Allocation and De-allocation of Memory](#dynamic-allocation-and-de-allocation-of-memory)
- [Destructors](#destructors)
- [Default Arguments](#default-arguments)
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

```cpp
#include <iostream>
#include <string>

class Person {
  private:
    std::string name;
    int age;

  public:
    void setName(std::string n) {
        name = n;
    }

    void setAge(int a) {
        age = a;
    }

    std::string getName() {
        return name;
    }

    int getAge() {
        return age;
    }
};

int main() {
  Person p;
  p.setName("Alice");
  p.setAge(30);

  std::cout << "Name: " << p.getName() << ", Age: " << p.getAge() << std::endl;
  return 0;
}
```

## Pointer to Objects

- **Syntax**: `ClassName *ptr = &object`;
- **Usage**:
  - Access members using the arrow operator (`->`).
  - Dynamic allocation with `new`.

**Code Example**:

```cpp
#include <iostream>

class Number {
public:
    int value;
};

int main() {
    Number num;
    num.value = 10;

    Number* ptr = &num;
    std::cout << "Value via pointer: " << ptr->value << std::endl;
    return 0;
}
```

## Constructor

- **Purpose**: Initialize objects upon creation.
- **Types of Constructors**:
  - **Default Constructor**: No parameters.
  - **Parameterized Constructor**: One or more parameters.
  - **Copy Constructor**: Initializes an object using another object of the same class.

**Code Example**:

```cpp
#include <iostream>

class Rectangle {
  private:
    int width;
    int height;

  public:
    // Default constructor
    Rectangle() : width(0), height(0) {}

    // Parameterized constructor
    Rectangle(int w, int h) : width(w), height(h) {}

    int area() const {
      return width * height;
    }
};

int main() {
  Rectangle r1;               // Calls default constructor
  Rectangle r2(3, 4);         // Calls parameterized constructor

  std::cout << "r1 area: " << r1.area() << std::endl;
  std::cout << "r2 area: " << r2.area() << std::endl;
  return 0;
}
```

## `this` Pointer

- **Definition**: An implicit pointer to the current object.
- **Usage**: Commonly used when member variable names are shadowed by parameters, or to return the current object.

**Code Example**:

```cpp
#include <iostream>

class Counter {
  private:
    int count;

  public:
    Counter(int count) {
      // Use 'this' to clarify which 'count' refers to the member variable
      this->count = count;
    }

    Counter& increment() {
      ++count;
      return *this; // Return a reference to the current object
    }

    int getCount() const {
      return count;
    }
};

int main() {
  Counter c(5);
  c.increment().increment();
  std::cout << "Count: " << c.getCount() << std::endl;
  return 0;
}
```

## Array of Objects

- You can create arrays of class objects on the stack or heap.
- Access each element like a normal array element.

**Code Example**:

```cpp
#include <iostream>

class Box {
  private:
    int length;
  public:
    Box() : length(0) {}
    Box(int l) : length(l) {}
    const int getLength() const;
};

int main() {
  Box boxes[3] = { Box(1), Box(2), Box(3) };

  for(int i = 0; i < 3; i++) {
    std::cout << "Box " << i << " length: " << boxes[i].getLength << std::endl;
  }
  return 0;
}

```

## Dynamic Allocation and De-allocation of Memory

- `new`: Allocates memory on the heap.
- `delete`: Frees memory previously allocated with new.
- `new[]` and `delete[]` for arrays.

**Code Example**:

```cpp
#include <iostream>

class Sample {
public:
    int data;
    Sample(int d) : data(d) {
        std::cout << "Constructor called. Data = " << data << std::endl;
    }
    ~Sample() {
        std::cout << "Destructor called. Data = " << data << std::endl;
    }
};

int main() {
    // Single object allocation
    Sample *obj = new Sample(10);
    delete obj;

    // Array allocation
    Sample *arr = new Sample[3]{ Sample(1), Sample(2), Sample(3) };
    delete[] arr;

    return 0;
}
```

## Destructor

- **Definition**: A special member function called when an object goes out of scope or is deleted.
- **Syntax**: `~ClassName() { /_ ... _/ }`
- **Purpose**: Clean up resources, close files, release memory.

**Code Example**:

## Default Argument

- **Usage**: Provide default values for parameters in function declarations.
- **Placement**: Typically declared in header or class definition.

**Code Example**:

```cpp
#include <iostream>

class Math {
public:
    // Default argument: 'power = 2'
    int power(int base, int power = 2) {
        int result = 1;
        for (int i = 0; i < power; i++) {
            result *= base;
        }
        return result;
    }
};

int main() {
    Math m;
    std::cout << m.power(3) << std::endl;    // 3^2 = 9
    std::cout << m.power(3, 3) << std::endl; // 3^3 = 27
    return 0;
}
```

## Member Functions with Reference Return Type

- **Reason**: Allows direct manipulation of the class's private members without copying.
- **Example**: Return a reference to a private member, so it can be changed outside the function.

**Code Example**:

```cpp
#include <iostream>

class SampleRef {
private:
    int value;

public:
    SampleRef(int v) : value(v) {}

    int& getValueRef() {
        return value; // Return reference to 'value'
    }
};

int main() {
    SampleRef sr(10);
    int &refVal = sr.getValueRef();
    refVal = 50; // This will change sr's internal 'value' to 50
    std::cout << "Updated value: " << sr.getValueRef() << std::endl;
    return 0;
}
```

## Member Functions with `const` Return Type

- **Usage**: Return a constant reference or constant value to prevent modification.
- **Example**: Returning a `const` reference to ensure the caller cannot alter the internal data.

**Code Example**:

```cpp
#include <iostream>

class SampleConst {
private:
    int data;

public:
    SampleConst(int d) : data(d) {}

    // Return type is 'const int&'
    const int& getData() const {
        return data;
    }
};

int main() {
    SampleConst sc(100);
    // Attempting to modify sc.getData() directly would cause a compile error.
    std::cout << "Data: " << sc.getData() << std::endl;
    return 0;
}
```

## Inline Member Function

- **Definition**: A function declared with `inline` keyword, suggesting the compiler to replace the function call with the function body (optimization hint).
- **Usage**: Often used for small, frequently called functions.

**Code Example**:

```cpp
#include <iostream>

class InlineExample {
private:
    int count;

public:
    InlineExample() : count(0) {}

    inline void increment() {
        ++count;
    }

    inline int getCount() const {
        return count;
    }
};

int main() {
    InlineExample ie;
    ie.increment();
    ie.increment();
    std::cout << "Count: " << ie.getCount() << std::endl;
    return 0;
}
```
