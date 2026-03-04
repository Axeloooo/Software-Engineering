# Creational Patterns

---

## Table of Contents

- [Singleton](#singleton)
- [Factory Method](#factory-method)
- [Abstract Factory](#abstract-factory)
- [Builder](#builder)

---

## Singleton

**📖 Definition**

Singleton Pattern is a creational design pattern that guarantees a class has only one instance and provides a global point of access to it.

Two requirements define the pattern:

1. **Single instance**: No matter how many times any part of the code requests it, the same object is returned.
2. **Global access**: Any component can reach the instance without needing it passed through constructors or method parameters.

Singleton is useful in scenarios like:

- Managing Shared Resources (database connections, thread pools, caches, configuration settings)
- Coordinating System-Wide Actions (logging, print spoolers, file managers)
- Managing State (user session, application state)

**🧩 Class Diagram**

To implement the singleton pattern, we must prevent external objects from creating instances of the singleton class. Only the singleton class should be permitted to create its own objects.

Additionally, we need to provide a method for external objects to access the singleton object.

![Singleton Class Diagram](../images/design_patterns/singleton.png)

- An `instance` field stores the one and only Singleton object.
- The constructor is private or otherwise restricted, so other code cannot create new instances directly.
- A `getInstance()` (or similar) class-level method returns the shared instance and is accessible from anywhere.

**🛠 Implementation**

{{#tabs}}
{{#tab name="Java"}}

```java
class Singleton {
    // Holds the single shared instance (initially not created)
    private static Singleton instance;

    // Private constructor prevents creating objects from outside the class
    private Singleton() {}

    // Global access point to get the Singleton instance
    public static Singleton getInstance() {

        // Create the instance only when first requested (initialization)
        if (instance == null) {
            instance = new Singleton();
        }

        // Return the shared instance
        return instance;
    }
}
```

{{#endtab}}
{{#tab name="Python"}}

```python
class Singleton:
    # Holds the single shared instance (initially not created)
    _instance = None

    # Constructor prevents direct creation if instance already exists
    def __init__(self):
        if Singleton._instance is not None:
            raise Exception("Use get_instance() instead.")

    # Global access point to get the Singleton instance
    @staticmethod
    def get_instance():

        # Create the instance only when first requested (lazy initialization)
        if Singleton._instance is None:
            Singleton._instance = Singleton()

        # Return the shared instance
        return Singleton._instance
```

{{#endtab}}
{{#tab name="C++"}}

```cpp
class Singleton {
private:
    // Holds the single shared instance (initially not created)
    static Singleton* instance;

    // Private constructor prevents creating objects from outside the class
    Singleton() {}

public:

    // Global access point to get the Singleton instance
    static Singleton* getInstance() {

        // Create the instance only when first requested (initialization)
        if (instance == nullptr) {
            instance = new Singleton();
        }

        // Return the shared instance
        return instance;
    }
};
```

{{#endtab}}
{{#tab name="C#"}}

```csharp
class Singleton
{
    // Holds the single shared instance (initially not created)
    private static Singleton instance;

    // Private constructor prevents creating objects from outside the class
    private Singleton() { }

    // Global access point to get the Singleton instance
    public static Singleton GetInstance()
    {
        // Create the instance only when first requested (initialization)
        if (instance == null)
        {
            instance = new Singleton();
        }

        // Return the shared instance
        return instance;
    }
}
```

{{#endtab}}
{{#tab name="TypeScript"}}

```typescript
class Singleton {
  // Holds the single shared instance (initially not created)
  private static instance: Singleton;

  // Private constructor prevents creating objects from outside the class
  private constructor() {}

  // Global access point to get the Singleton instance
  public static getInstance(): Singleton {
    // Create the instance only when first requested (initialization)
    if (Singleton.instance == null) {
      Singleton.instance = new Singleton();
    }

    // Return the shared instance
    return Singleton.instance;
  }
}
```

{{#endtab}}
{{#endtabs}}

---

## Factory Method

**📖 Definition**

Defines an interface for creating an object but lets subclasses decide which class to instantiate.

**🧩 Class Diagram**

![Factory Method Class Diagram](../images/design_patterns/factory_method.png)

**🛠 Implementation**

```python

```

---

## Abstract Factory

**📖 Definition**

Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

**🧩 Class Diagram**

![Abstract Factory Class Diagram](../images/design_patterns/abstract_factory.png)

**🛠 Implementation**

```python

```

---

## Builder

**📖 Definition**

The Builder Design Pattern is a creational pattern that lets you construct complex objects step-by-step, separating the construction logic from the final representation.

**🧩 Class Diagram**

![Builder Class Diagram](../images/design_patterns/builder.png)

**🛠 Implementation**

```python

```

---
