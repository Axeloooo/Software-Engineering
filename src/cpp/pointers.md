# Pointers

## Table of Contents

- [Introduction](#introduction)
- [Pointer to Pointer](#pointer-to-pointer)
- [Array of Pointer](#array-of-pointer)
- [Argument of `main` Function](#arguments-of-main-function)

## Introduction

Pointers in C++ are variables that hold the memory addresses of other variables. They allow you to indirectly access and modify the value stored at those addresses.

- **Pointer Declaration**:

A pointer is declared by specifying the type of data it will point to, followed by an asterisk (\*) and the pointer's name.

**Code Example**:

File: `main.cpp`

```cpp
int *ptr;
```

- **Pointing**:

When you assign the address of a variable to a pointer, you are "pointing" the pointer to that variable. You use the address-of operator (&) for this.

**Code Example**:

File: `main.cpp`

```cpp
int x = 10;
int *ptr = &x;
```

- **Dereferencing**:

Dereferencing a pointer means accessing the value at the memory address stored in the pointer. You use the dereference operator (\*) for this.

**Code Example**:

File: `main.cpp`

```cpp
int y = *ptr;
```

## Pointer to Pointer

- A **pointer to pointer** is a pointer that stores the address of another pointer rather than storing the address of a variable directly.
- Syntax: `type** ptrToPtr`;

**Code Example**:

File: `main.cpp`

```cpp
#include <iostream>

void swapPointers(int **x, int **y) {
  int *temp;
  temp = *x;
  *x = *y;
  *y = temp;
}

int main() {
  int a = 23;
  int b = 40;

  int *p1 = &a;
  int *p2 = &b;

  swapPointers(&p1, &p2);

  std::cout << "p1 points to: " << *p1 << "\n";
  std::cout << "p2 points to: " << *p2 << "\n";
}
```

## Array of Pointer

An **array of pointers** is simply an array whose elements are pointer variables.
Useful when you want to store multiple addresses, e.g., addresses of different variables or the starting addresses of multiple strings.

**Code Example**:

File: `main.cpp`

```cpp
#include <iostream>

int main(int argc, char **argv) {
  const char *p[3];
  p[0] = "XYZ";
  p[1] = "KLM";
  p[2] = "ABC";

  std::cout << p[1] << std::endl; // p[1] is pointer to "KLM"
  std::cout << *p[1] << std::endl; // *p1[1] is a pointer to "K"
  std::cout << **p << std::endl; // **p is a pointer to "X"
  std::cout << *(p+1) << std::endl; // *(p+1) is a pointer to "KLM"
}
```

## Arguments of `main` Function

- `argc`: The number of command-line arguments (argument count).
- `argv`: An array of C-style strings (argument vector). Each element in argv is a pointer to a character array representing a command-line argument.

**Code Example**:

File: `main.cpp`

```cpp
#include <iostream>

int main(int argc, char **argv) {
  for (int i = 0; i < argc; i++) {
    std::cout << "Argument " << i << ": " << argv[i] << std::endl;
  }
}
```

Command Line Interface:

```bash
./example.exe cat cow dog

Argument 0: ./example.exe
Argument 1: cat
Argument 2: cow
Argument 3: dog
```
