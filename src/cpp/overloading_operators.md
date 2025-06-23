# Overloading Operators

## Table of Contents

- [Overloading +](#overloading-)
- [Overloading +=](#overloading-)
- [Overloading <<](#overloading--)
- [Overloading >>](#overloading--)
- [Overloading []](#overloading--)
- [Overloading ++](#overloading--)
- [Overloading --](#overloading--)

---

## Overloading +

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
    delete [] tmp.storage_;
    tmp.storage_ = new char[tmp.length_ + 1];
    strcpy(tmp.storage_, storage_);
    strcat(tmp.storage_, s.storage_);
    return temp;
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

## Overloading +=

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
    assert(new_storage !+ 0);
    strcpy(new_storage, storage_);
    strcat(new_storage, s.storage_);
    delete [] storage_;
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

## Overloading <<

File `string.h`:

```cpp
class String {
    public:
        ...
        // declare as friend to allow access to private members
        osttream& operator << (ostream& os, String& s);

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
ostream& operator <<(ostream& os, String& s) {
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

## Overloading >>

File `string.h`:

```cpp
class String {
    public:
        ...
        // declare as friend to allow access to private members
        isttream& operator >> (istream& is, String& s);

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
istream& operator >>(istream& is, String& s) {
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

## Overloading []

File `string.h`:

```cpp
class String {
    public:
        ...
        // declare as friend to allow access to private members
        char& operator [](int index);

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
char& String::operator [](int index) {
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

## Overloading ++

File `string.h`:

```cpp
class String {
    public:
        ...
        char operator ++(); // prefix increment
        char operator ++(int); // postfix increment

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
char String::operator ++() {
    return storage_[0];
}

char String::operator ++(int) {
    char temp = storage_[0];
    storage_[0]++;
    return temp;
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

## Overloading --

File `string.h`:

```cpp
class String {
    public:
        ...
        char operator --(); // prefix decrement
        char operator --(int); // postfix decrement

    private:
        char* storage_;
        int length_;
};
```

File `string.cpp`:

```cpp
char String::operator --() {
    return storage_[0];
}

char String::operator --(int) {
    char tmp = *storage_
    storage_--;
    return tmp;
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
