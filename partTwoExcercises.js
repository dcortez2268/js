//Stopwatch exercise
//define stopwatch object
//properties:
//duration, initialized to 0, private property
//reset(), resets duration to 0
//start(), throws exception if start method is called twice in a row
//stop(), throws exception if stop method is called twice in a row
// function Stopwatch(){
//     let duration= 0;
//     let isRunning = false;
//     let startTime = 0;

//     this.reset = function(){
//       duration = 0;
//       isRunning = false;
//       startTime = null;
//     }

//     this.start = function(){
//       if(isRunning)
//         throw new Error('Stopwatch is already running');
      
//       isRunning = true;
//       //sets the startTime in units of milliseconds
//       startTime = Date.now();
//     }

//     this.stop = function(){
//       if(!isRunning)
//         throw new Error('Stopwatch is already stopped');
      
//       isRunning = false;
//       //gets total number of milliseconds and converts to seconds
//       const seconds  = (Date.now() - startTime) / 1000;
//       duration += seconds;
//     }

//     Object.defineProperty(this, 'duration', 
//     {get: function(){ return duration;} 
//     });
// }



// //modify the Stopwatch object above so that:
// //all methods are placed on prototype
// //functionality remains same
// //remember the only reason we put methods on the prototype is for optimazation technique when we have multiple
// //instances using same methods because the method is only stored in memory once
// //this is an example of premature optimization because now properties are public so now we have to define the properties as read only
// function Stopwatch(){
//    let duration= 0;
//    let isRunning = false;
//    let startTime = 0;
  
//   Object.defineProperty(this, 'duration', 
//   {get: function(){ return duration;},
//   set: function(value){ duration = value;} 
//   });
//   Object.defineProperty(this, 'isRunning', 
//   {get: function(){ return isRunning;} 
//   });
//   Object.defineProperty(this, 'startTime', 
//   {get: function(){ return startTime;} 
//   });
// }



// Stopwatch.prototype.reset = function(){
//   this.duration = 0;
//   this.isRunning = false;
//   this.startTime = null;
// }

// Stopwatch.prototype.start = function(){
//   if(this.isRunning)
//   throw new Error('Stopwatch is already running');
  
//   this.isRunning = true;
//   //sets the startTime in units of milliseconds
//   this.startTime = Date.now();
// }

// Stopwatch.prototype.stop = function(){
//   if(!this.isRunning)
//   throw new Error('Stopwatch is already stopped');
  
//   this.isRunning = false;
//   //gets total number of milliseconds and converts to seconds
//   const seconds  = (Date.now() - this.startTime) / 1000;
//   this.duration += seconds;
// }



// // two objects, HtmlElement and HtmlSelectElement which represents drop down list,
// // HtmlElement is prototype of HtmlSelectElement

// //HtmlSelectElement:
// // optional array constructor, initialized to empty array if no arguments given
// // items array property,
// // addItem and removeItem methods,
// // prototype is HtmlElement

// // HtmlElement:
// // instance 
// // click method, console.log

// // HtmlElement prototype has method focus, console.log

// function HtmlElement(){
//   this.click= function(){
//     console.log("htmlelement click method");
//   }
// }

// HtmlElement.prototype.focus = function(){
//   console.log("htmlelement prototype focus method");
// }

// function HtmlSelectElement(items = []){
  
//   this.items = items;

//   this.addItem = function(item){
//     this.items.push(item);
//   }

//   this.removeItem = function(item){
//     // if(this.items.includes(item))
//     //   this.items = this.items.filter( p => p !== item );  
//     // }
//     this.items.splice(this.items.indexOf(item), 1); //deletes item at given index
// }
// new HtmlElement() instead of Object.create(HtmlElement.prototype) bc we  need instance method for functionality, ES6 classes does this process for us under the hood
// HtmlSelectElement.prototype = new HtmlElement(); 
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;




//implement stack class
//push method
//pop method,error handling
//count property
//peek, error handling
class Stack {
  #count = 0;
  #stack = [];
  
  get count(){
    return this.#count;
  }
  
  push(element){
    if(typeof element !== 'number') throw new Error('Invalid input, you must enter number');
    
    this.#stack.push(element);
    this.#count +=  1;
  }

  pop(){
    if(this.#count.length === 0) throw new Error('Stack is empty');

    this.#count -= 1;
    return this.#stack.pop() 
  }

  peek(){
    if(this.#count < 1) throw new Error('Stack is empty');
    return this.#stack[this.count - 1];
  }
}