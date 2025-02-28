# Standard I/O

## Table of Contents

- [I/O Stream](#io-stream)
- [Namespace](#namespace)
- [String](#string)
- [Buffer](#buffer)

## I/O Stream

- **Header `<iostream>`**: This header provides basic I/O functionality using streams.
- **Standard Streams**:
  - `std::cin` for standard input
  - `std::cout` for standard output
  - `std::cerr` for standard error
- **Operators**:
  - **Extraction (`>>`)**: Reads data from an input stream.
  - **Insertion (`<<`)**: Writes data to an output stream.

**Code Example**:

```cpp
#include <iostream>

int main() {
  std::cout << "Enter a number: ";
  int x;
  std::cin >> x;
  std::cout << "You entered: " << x << std::endl;
  return 0;
}
```

## Namespace

- `namespace`: Used to group related classes, functions, variables.
- `std` **namespace**: Contains the standard library (e.g., `std::cout`, `std::cin`, `std::string`).
- **Usage**:
  - `using namespace std;` brings all symbols in the `std` namespace into the current scope (not always recommended for large projects due to naming conflicts).
  - `std::` prefix to explicitly qualify names.

**Code Example**:

```cpp
#include <iostream>

namespace myNamespace {
  void printMessage() {
    std::cout << "Hello from myNamespace!" << std::endl;
  }
}

int main() {
  myNamespace::printMessage();
  return 0;
}
```

## String

- **Header** `<string>`: Provides the `std::string` class.
- **Basic Operations**:
  - Construction, concatenation, length check, indexing.
  - Member functions like `size()`, `length()`, `substr()`, `find()`, etc.

**Code Example**:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string greeting = "Hello";
  std::string name;

  std::cout << "Enter your name: ";
  std::cin >> name;

  std::string message = greeting + ", " + name + "!";
  std::cout << message << std::endl;

  std::cout << "Message length: " << message.length() << std::endl;
  return 0;
}
```

## Buffer

- **Buffer**: A temporary storage area for data transfers.
- **I/O Streams** are typically buffered to optimize reading/writing.
- **Flushing**:
  - `std::endl` flushes the buffer after printing a newline.
  - `std::flush` can be used explicitly to flush the output buffer without a newline.

**Code Example**:

```cpp
#include <iostream>

int main() {
  std::cout << "This will be printed immediately" << std::flush;
  // Some computation...
  std::cout << "\nNow we printed a newline and flushed the stream." << std::endl;
  return 0;
}
```
