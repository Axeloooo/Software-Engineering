# Standard I/O

## Include iostream

To perform standard input/output operations in C++, include the `<iostream>` header file. This header provides two essential objects: `cin` for input and `cout` for output.

- **Input**: Use `cin` with the extraction operator (`>>`) to read one or more data values.
- **Output**: Use `cout` with the insertion operator (`<<`) to display data on the screen.

Note that `cin` uses whitespace as the delimiter for input. In C++, whitespace includes the following characters:

- Space
- Tab
- Enter

```cpp
#include <iostream>

int main() {
  int a, b;

  std::cout << "Enter two integer number: " << std::endl;

  std::cin >> a >> b;

  std::cout << a << " + " << b << " is " << a + b << ".\n";

  return 0;
}
```

## Namespaces

In large software projects, namespaces help avoid naming conflicts among types and identifiers by grouping related names under a common umbrella. One commonly used namespace in C++ is `std`, which includes all the standard library functions and objects.

To avoid having to prefix every standard library object with `std::`, you can include the following line in your code:

```cpp
#include <iostream>

using namespace std;

int main() {
  int a, b;

  cout << "Enter two integer number: " << endl;

  cin >> a >> b;

  cout << a << " + " << b << " is " << a + b << ".\n";

  return 0;
}
```
