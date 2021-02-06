# Main Traits on Abstract Factory

- has a factory interface
- for each product, there is a product interface
- the factory interface contains the methods for creating the product interfaces

- any classes that implements the factory interface, would create the product objects

- add another class that implements the factory interface and you will get a set of products
- add another product interface, and now the abstract factory interface has another method that creates the product
- this will ensure that all the factory children would be creating that new product family

## Example

We have a factory that produces computer parts such as cpu, keyboard
And there are different ways of producing those computer parts i.e quality computer parts or cheap and basic parts

the class that creates the parts as a whole is the factor interface
the classes that creates either cheap or quality computer parts inherit the interface

the prodocuts require some attributes so it is preferred to seperate them into different classes
these classes will be the product class and they inherit the product part interface

since we have different quality computer parts , for each standard , there is a product class i.e quality parts will have quality cpu and quality monitor.
