# Overloading Operators

---

## Table of Contents

- [Overloading `+`](#overloading-)
- [Overloading `+=`](#overloading-)
- [Overloading `<<`](#overloading-)
- [Overloading `>>`](#overloading-)
- [Overloading `[]`](#overloading-)
- [Overloading `++`](#overloading-)
- [Overloading `--`](#overloading-)

---

## Overloading `+`

Concatenate two `String` objects and return the result as a **temporary**.  
The left-hand and right-hand operands remain unchanged.

File `string.h`:

```cpp
class String {
    public:
        ...
        String operator +(const String& s);

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
String String::operator +(const String& s) {
    String tmp;
    tmp.length_ = length_ + s.length_;
    tmp.storage_ = new char[tmp.length_ + 1];

    std::strcpy(tmp.storage_, storage_);
    std::strcat(tmp.storage_, s.storage_);

    return tmp;
}
```

File `main.cpp`:

```cpp
int main() {
    String s1("Hello, ");
    String s2("World!");
    String s3;
    s3 = s1 + s2;
    return 0;
}
```

---

## Overloading `+=`

Modify the current object **in place** by appending another `String`.

File `string.h`:

```cpp
class String {
    public:
        ...
        String& operator +=(const String& s);

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
String& String::operator +=(const String& s) {
    length_ += s.length_;
    char* new_storage = new char[length_ + 1];
    assert(new_storage != nullptr);

    std::strcpy(new_storage, storage_);
    std::strcat(new_storage, s.storage_);

    delete[] storage_;
    storage_ = new_storage;
    return *this;
}
```

File `main.cpp`:

```cpp
int main() {
    String s1("Hello, ");
    String s2("World!");
    s1 += s2;
    return 0;
}
```

---

## Overloading `<<`

Stream the `String` to an output stream.

File `string.h`:

```cpp
class String {
    public:
        ...
        // declare as friend to allow access to private members
        friend std::ostream& operator<<(std::ostream& os, const String& s);

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
std::ostream& operator<<(std::ostream& os, const String& s) {
    return os << s.storage_;
}
```

File `main.cpp`:

```cpp
int main() {
    String s1("Hello, ");
    String s2("World!");
    cout << s1 << s2 << endl; // prints "Hello, World!"
    return 0;
}
```

---

## Overloading `>>`

Read characters from an input stream into a `String`.

File `string.h`:

```cpp
class String {
    public:
        ...
        // declare as friend to allow access to private members
        friend std::istream& operator>>(std::istream& is, String& s);

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
std::istream& operator>>(std::istream& is, String& s) {
    return is >> s.storage_;
}
```

File `main.cpp`:

```cpp
int main() {
    String s1;
    cout << "Enter a string: ";
    cin >> s1;
    return 0;
}
```

---

## Overloading `[]`

Provide direct (bounds-checked) character access.

File `string.h`:

```cpp
class String {
    public:
        ...
        char& operator[](int index);

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
char& String::operator[](int index) {
    assert(index >= 0 && index < length_);
    return storage_[index];
}
```

File `main.cpp`:

```cpp
int main() {
    String s1("Hello, World!");
    cout << s1[0] << endl; // prints 'H'
    return 0;
}
```

---

## Overloading `++`

Increment the first character; prefix returns the **new** value, postfix the **old**.

File `string.h`:

```cpp
class String {
    public:
        ...
        char operator++();     // prefix
        char operator++(int);  // postfix

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
char String::operator++() {
    return ++storage_[0];        // mutate then return
}

char String::operator++(int) {
    char tmp = storage_[0];
    storage_[0]++;
    return tmp;                 // return original value
}
```

File `main.cpp`:

```cpp
int main() {
    String s1("Hello, World!");
    cout << ++s1 << endl; // prefix increment
    cout << s1++ << endl; // postfix increment
    return 0;
}
```

---

## Overloading `--`

Decrement the first character; mirrors the semantics of `++`.

File `string.h`:

```cpp
class String {
    public:
        ...
        char operator--();     // prefix
        char operator--(int);  // postfix

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
char String::operator--() {
    return --storage_[0];
}

char String::operator--(int) {
    char tmp = storage_[0];
    storage_[0]--;
    return tmnp;
}
```

File `main.cpp`:

```cpp
int main() {
    String s1("Hello, World!");
    cout << --s1 << endl; // prefix decrement
    cout << s1-- << endl; // postfix decrement
    return 0;
}
```
