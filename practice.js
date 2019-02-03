
// Declaring variables
let n = 'Hey';
console.log(typeof n);
n = 3;

// typeof
console.log(typeof n);

// Objects
let student = {
    name : 'Raghu',
    id : 703
};

// Accessing Objects

// Dot Notation
student.name = 'Ravi';

// Bracket Notation
student['name'] = "Raj";

console.log(student);

// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 5;
console.log(selectedColors + ' ' + selectedColors.length);


function greet(person){
    console.log("Hello " + person.name);
    person.name = 'Raj';
}
let person = {
    name : 'Raghu'
};

greet(person);
console.log(person.name);

let MyEventEmmitter = require('events');
let emmiter = new MyEventEmmitter();

// Register Listener
emmiter.on('messageLogged', function(msg){
    console.log('message Logged by '+msg);
});

// Raise an Event 
emmiter.emit('messageLogged', 'Raghu');

// Class def
class Fruit{
    constructor(name, shape, color){
        this.name = name;
        this.shape = shape;
        this.color = color;
    }
    describe(){
        // Text Formatting (notice that its not single quotes rather(`))
        return `Name : ${this.name}\nShape : ${this.shape}\nColor : ${this.color}`; 
    };
}

// Function as a Constructor Pattern
function Student(name, id, age){
    this.name = name;
    this.id = id;
    this.age = age;
}

let apple = new Fruit('apple', 'round', 'red');
let raghu = new Student('Raghu', '2017A7PS0703H', 19);

console.log(Fruit);
console.log(JSON.stringify(raghu));

console.log(apple.describe());
