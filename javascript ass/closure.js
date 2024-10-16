//Example 1

// function createCounter() {
//     let count = 0;  // Private variable
    
//     return function() {
//       count++;  // Accessing the outer function's variable
//       return count;
//     };
//   }
  
//   const counter = createCounter();  // Create a new counter
//   console.log(counter());  // Output: 1
//   console.log(counter());  // Output: 2
//   console.log(counter());  // Output: 3
  

//Example 2

function createGreeting(greeting) {
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    };
  }
  
  const sayHello = createGreeting("Hello");
  const sayHi = createGreeting("Hi");
  
  sayHello("pranav");  // Output: Hello, Pranav!
  sayHi("Bob");       // Output: Hi, Bob!
  