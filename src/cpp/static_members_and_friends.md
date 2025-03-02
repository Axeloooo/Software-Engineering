# Static Members and Friends

## Table of Contents

- [Static Data Members](#static-data-members)
- [Static Member Functions](#static-member-functions)
- [Friend Functions](#friend-functions)
- [Friend Classes](#friend-classes)

## Static Data Members

1. **Single Instance**: A static data member is allocated only once in memory, regardless of how many objects of that class are created.
2. **Initialization**: Must be **defined** and **initialized** outside the class definition to allocate storage.
3. **Access**:

   - Through the class name: `ClassName::staticMember`.
   - Through an instance (not recommended, but allowed): `objectName.staticMember`.

**Code Example**:

File: `counter.h`

```cpp
#ifndef COUNTER
#define COUNTER
class Counter {
  private:
    static int count;

  public:
    Counter();
};
#endif
```

File: `counter.cpp`

```cpp
#include "counter.h"

Counter::Counter() {
  count++;
}

int Counter::count = 0;

int main() {
  Counter c1;
}
```

## Static Member Functions

1. **No this Pointer**: Static member functions cannot access non-static data members directly because they do not have an implicit `this` pointer.
2. **Class-Level Operations**: Typically used for utility functions that affect the class as a whole (e.g., counting instances, maintaining global state).
3. **Access**:

- Through the class name: `ClassName::staticFunction()`.
- Through an instance: `objectName.staticFunction()` (though using the class name is clearer).

**Code Example**:

File: `counter.h`

```cpp
#ifndef COUNTER
#define COUNTER
class Counter {
  private:
    static int count;

  public:
    Counter();
    static void showCount();
};
#endif
```

File: `counter.cpp`

```cpp
#include <iostream>

#include "counter.h"

Counter::Counter() {
  count++;
}

void Counter::showCount() {
  std::cout << "Number of Counter objects: " << count << std::endl;
}

int Counter::count = 0;

int main() {
  Counter c1;
  Counter c2;

  Counter::showCount(); // Output: Number of Counter objects: 2

  Counter c3;
  Counter::showCount(); // Output: Number of Counter objects: 3
}
```

## Friend Functions

- **Definition**: A friend function is a non-member function that has access to the private and protected members of a class.
- **Declaration**: Declared with the `friend` keyword inside the class.
- **Advantages**: Allows certain external functions to have intimate knowledge of a class’s internals without making those internals public.
- **Limitations**: Does not violate encapsulation if used judiciously, but can reduce maintainability if overused.

**Code Example**:

File: `box.h`

```cpp
#ifndef BOX
#define BOX
class Box {
  private:
    double length;
    double width;
    double height;
    friend double getVolume(const Box&);

  public:
    Box(double l, double w, double h)
};
#endif
```

File: `box.cpp`

```cpp
#include <iostream>

#include "box.h"

Box::Box(double l, double w, double h) : length(l), width(w), height(h) {}

double getVolume(const Box& b) {
  return b.length * b.width * b.height;
}

int main() {
  Box box(3.0, 4.0, 5.0);

  std::cout << "Volume: " << getVolume(box) << std::endl;
}
```

## Friend Classes

- **Definition**: One class can be declared as a friend of another, giving it access to the friend class’s private and protected members.
- **Usage**:
  - Useful when two or more classes need to cooperate closely, sharing implementation details.
  - Should be used sparingly to avoid excessive coupling.

**Code Example**:

File: `alpha.h`

```cpp
#ifndef ALPHA
#define ALPHA
class Alpha;

class Alpha {
  private:
    int data;
    friend class Beta;

  public:
    Alpha(int value);
};
#endif
```

File: `beta.h`

```cpp
#ifndef BETA
#define BETA
class Beta {
  private:
    int data;

  public:
    Beta(int value);
    void showAlphaData(const Alpha& a);
};
#endif
```

File: `main.cpp`

```cpp
#include <iostream>

#include "alpha.h"
#include "beta.h"

Alpha::Alpha(int value) : data(value) {}

Beta::Beta(int value) : data(value) {}

void Beta::showAlphaData(const Alpha& a) {
    std::cout << "Alpha's data = " << a.data << std::endl;
}

int main() {
    Alpha alpha(42);
    Beta beta;
    beta.showAlphaData(alpha);
}
```
