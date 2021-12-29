//Stopwatch exercise
//define stopwatch object
//properties:
//duration, initialized to 0, private property
//reset(), resets duration to 0
//start(), throws exception if start method is called twice in a row
//stop(), throws exception if stop method is called twice in a row
class Stopwatch{
    #duration;
    #isRunning;
    #startTime;
    constructor(){
      this.#duration = 0;
      this.#isRunning = false;
      this.#startTime = 0;
    }

    getDuration(){
      return this.#duration;
    }

    reset(){
      this.#duration = 0;
      this.#isRunning = false;
      this.#startTime = 0;
    }

    start(){
      if(this.#isRunning)
        throw new Error('Stopwatch is already running');
      
      this.#isRunning = true;
      //sets the startTime in units of milliseconds
      this.#startTime = Date.now();
    }

    stop(){
      if(!this.#isRunning)
        throw new Error('Stopwatch is already stopped');
      
      this.#isRunning = false;
      //gets total number of milliseconds and converts to seconds
      const seconds  = (Date.now() - this.#startTime) / 1000;
      this.#duration += seconds;
    }
}



//modify the Stopwatch object above so that:
//all methods are placed on prototype
//functionality remains same
//remember the only reason we put methods on the prototype is for optimazation technique when we have multiple
//instances using same methods because the method is only stored in memory once
//this is an example of premature optimization because now properties are public
// class Stopwatch{
//   duration= 0
//   isRunning= false
//   startTime = 0
// }
// Stopwatch.prototype.start = function() {
//   if(this.isRunning)
//     throw new Error('Stopwatch is already running');

//   this.isRunning = true;
//   //sets the startTime in units of milliseconds
//   this.startTime = Date.now();
// }
// Stopwatch.prototype.stop = function() {
//     if(!this.isRunning)
//       throw new Error('Stopwatch is already stopped');
 
//     this.isRunning = false;
//     //gets total number of milliseconds and converts to seconds
//     const seconds  = (Date.now() - this.startTime) / 1000;
//     this.duration += seconds;
// }
// Stopwatch.prototype.reset = function() {
//     this.duration = 0;
//     this.isRunning = false;
//     this.startTime = 0;
// }



//implement stack class
//push method
//pop method,error handling
//count property
//peek, error handling
class Stack{
  #count = 0
  #stack = []
  
  get count(){
    return this.#count;
  }
  
  push(element){
    if(typeof element !== 'number') throw new Error('Invalid input, you must enter number');
    
    this.#stack.push(element);
    this.#count +=  1;
  }

  pop(){
    if(this.#count < 1) throw new Error('Stack is empty');

    this.#count -= 1;
    return this.#stack.pop() 
  }

  peek(){
    if(this.#count < 1) throw new Error('Stack is empty');
    return this.#stack[this.count - 1];
  }
}
const s = new Stack();




