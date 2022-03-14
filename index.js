/*  WEEK 1 - Registration (beginner)
You just got accepted into a four year coding bootcamp :)
Before registering starting, you have to fill out your personal information.


Declare a constant 'firstName' that is a string, and set it equal to your first name.
Declare a constant 'lastName' that is a string, and set it equal to your last name.
Initialize a variable 'age', that is a number, and set it equal to your current age.
Initialize a variable 'year' that is a string, and set it equal to a class title ("Freshman", "Sophomore", "Junior", "Senior").*/

const firstName = "Rea Carolyn";
const lastName = "Tabofunda";
let age = "30";
let year = "Freshman";


/*  WEEK 1 - Study Supplies (beginner)
You're getting ready to attend a coding bootcamp and need to buy some supplies to stay organized. 

You have a list of supplies ready to purchase from a local book store and need to calculate the total cost of each item in your list of supplies.  The store's inventory is provided to you below.

Create an object with the label bookStore using the mapping listed below.

Declare an array with the label supplyList, with Highlighter, Black pen, White-Out, index cards and Organizer as string elements within the array.

Declare a variable total and assign it the calculate cost of each item in your  supplyList.

Print the total purchase cost to the screen. */

// write code below 
const bookStore = {
 'No. 2 pencil': 3.00,
 'Pencil sharpener': 1.00,
 Highlighter: 2.30,
 Erasers: 0.50,
 'Post-Its': 1.00,
 'Blue Pen': 1.10,
 'Black pen': 1.25,
 'White-Out': 2.11,
 Organizer: 7.50,
 Glue: 4.20,
 'index cards': 3.25,
 'Loose-leaf Paper': 9.00,
 'Three-ring binder': 4.50,
 Folders: 0.99
}

let supplyList = ['Highlighter', 'Black pen', 'White-Out', 'index cards', 'Organizer'];

function getPrice(supply) {
  for (let aboutBookStore in bookStore) {
  if (aboutBookStore === supply)
    return bookStore[aboutBookStore];
  }
}

let total = 0
function supply() {
  for (i=0; i<supplyList.length; i++) {
    total += getPrice(supplyList[i])
  }
}

supply();
console.log(`Total Purchase Cost: $${total}`);

/*  WEEK 1 Arrays of Art (intermediate)
Art Supplies

Let's do some art this fall!

You've signed up for an art course and your teacher assigns projects using a somewhat unorthodox methodology. Even though they gave you a long list of art supplies, each project they assign can only use supplies that start with a specific letter of the alphabet. 

For this question you will first need to finish the firstLetter function. This function will return a boolean based on whether or not the argument (in this case one element from our art supply array) passed into it starts with the letter that we are checking for.

Next, you will finish creating the filter function, which takes in three arguments:
An array containing your list of art supplies
A single character string 
A callback (in this case firstLetter) to determine whether you can use a given art supply based on string

This function should return an array containing only the art supplies that received a true value from our firstLetter function. Do not use the native filter method.

For example:
const suppliesArray = ['pencils', 'brush', 'paint', 'clay', 'easel', 'crayons', 
'acrylic', 'glue', 'paper', 'marble', 'water colors'];

const projectLetter = 'p';

console.log(filter(suppliesArray, projectLetter, firstLetter);
//should log ['pencils', 'paint', 'paper'] */

const firstLetter = (el, letter) => {
  let projectLetter = letter;
  if (el[0]===letter) {
    return true;
  } else return false;
};

const filter = (array, letter, firstLetter) => {
let finalSupplies=[];
for (let i = 0; i < suppliesArray.length; i++) {
    if (firstLetter(suppliesArray[i], letter)) { 
      finalSupplies.push(suppliesArray[i]);
    }
  }
  return finalSupplies;
};
 
//uncomment below to test your work
const suppliesArray = ['pencils', 'brush', 'paint', 'clay', 'easel', 'crayons', 
'acrylic', 'glue', 'paper', 'marble', 'water colors'];
const projectLetter = 'p';
console.log(filter(suppliesArray, projectLetter, firstLetter));
 
/* w2 - Schedule Planner
Schedule Planner

You're about to start your fall semester at university, and you're ready to start picking your classes.

Conveniently, your school has provided you the course listing in the form of a JavaScript array! You've decided to write a function to search through this array and find the classes that match your favorite subject...

Write a function schedulePlanner that takes two arguments:
An array classes containing strings representing your school's available classes
A string subject, which is the topic you're hoping to study

This function should return an array containing only the class names that match the subject you're interested in. For example:

const favoriteSubject = 'Music';
const fallClasses = ['Physics: Thermodynamics',
                     'Music Theory: Jazz',
                     'Computer Science: Algorithms',
                     'English: Literary Theory',
                     'Anthropology: World Music',
                     'History: The Renaissance'];

console.log(schedulePlanner(fallClasses, favoriteSubject));
// should log ['Music Theory: Jazz', 'Anthropology: World Music'] */ 

const schedulePlanner = (classes, subject) => {
  // Write code here
  let filtered = [];
  for(let i=0; i<classes.length; i++) {
    //console.log(classes[i]);
    if(classes[i].includes(subject)) {
      filtered.push(classes[i]);
    }
  }
  return filtered;
};

const isFavorite = (subject, fav) => {
  return subject.includes(fav);
}

// Uncomment below to test your work!
const favoriteSubject = 'Music';
const fallClasses = ['Physics: Thermodynamics',
                    'Music Theory: Jazz',
                    'Computer Science: Algorithms',
                    'English: Literary Theory',
                    'Anthropology: World Music',
                    'History: The Renaissance'];

console.log(schedulePlanner(fallClasses, favoriteSubject));
// should log ['Music Theory: Jazz', 'Anthropology: World Music']

/* w2 - Study Buddy 
Study Buddy
Uh-oh, final exams are right around the corner and you haven't yet started preparing! 

Luckily, a few of your friends share the same classes with you and each of them has invited you as a study buddy. But here's the catch: each friend is studying a different subject. 

If you want to prioritize studying your weakest subject based on your lowest grade, which of your friends should you study with?

Write a function studyBuddy that accepts two arguments:
An object reportCard containing your class names as keys and test average scores as values
An object subjects containing your friends' names as keys and their subject study preferences as values

The function should return a string of your friend's name who is also studying your weakest subject. If none of your friends are looking to study the same subject, then return the string 'Me'. You can assume you will not have two subjects with the same test average.

For example:

const reportCard = {
  Biology: 85,
  English: 75,
  Economics: 90,
  History: 67,
  Philosophy: 98,
};

const subjects = {
  Dylan: 'Biology',
  Jen: 'English',
  Emily: 'Economics',
  Amy: 'History',
  Lenny: 'Philosophy',
};

console.log(studyBuddy(reportCard, subjects));
// Should log: 'Amy'  */

const studyBuddy = (reportCard, subjects) => {
  let lowestSubj = Object.entries(reportCard).sort((a,b) => a[1]-b[1]).map(el=>el[0]).slice(0,1);
  getBuddy(subjects, lowestSubj);
  return getBuddy(subjects, lowestSubj);
};

function getBuddy(subjectsObj, subject) {
  const buddies = Object.entries(subjectsObj);
  for (let i=0; i< buddies.length; i++) {
    //console.log(buddies[i]);
    if(subject == buddies[i][1]) {
      //console.log ((buddies[i][1]))
      return buddies[i][0];
    }
  }
}

const reportCard = {
  Biology: 85,
  English: 75,
  Economics: 90,
  History: 67,
  Philosophy: 98
};

const subjects = {
  Dylan: 'Biology',
  Jen: 'English',
  Emily: 'Economics',
  Amy: 'History',
  Lenny: 'Philosophy'
};

console.log(studyBuddy(reportCard, subjects));

/* w2 - Back-to-School Dance

The school dance is coming up! Everyone is excited but sadly, not everyone will be able to go. Only students who are passing at least half of their classes are allowed to attend the dance. 

Write a function whoCanAttend that determines which students are allowed to go to the dance, depending on their grades. This function will accept two arguments:
an object studentsGrades where the keys are student names and the values are arrays of grades
a callback gradeChecker that checks if a grade is passing. At our school, grades of 65 and over are considered passing, and below 65 are failing. The callback will return true for passing grades and false for failing grades. 

Your function should return an array containing the names of the students who are allowed to go to the dance.  */

const whoCanAttend = (obj, callback) => {
  let passedStudents = [];
  const students = Object.entries(obj);
  for (let i=0; i< students.length; i++) {
    //console.log(students[i]);
    let passCount = 0;
    const studentGrades = Object.values(students[i]);
    //console.log("grades", studentGrades[1]);
    for(let j=0; j<studentGrades[1].length;j++) {
      //console.log(studentGrades[1][j]);
      if(callback(studentGrades[1][j])) {
        passCount++;
      }
      if(passCount ===3) {
        passedStudents.push(studentGrades[0]);
        break;
      }
    }
    if (callback(Object.values(obj)) === true) {
    return(Object.keys(obj[i]));
   }
  }
  return(passedStudents);
};



const studentsGrades = {
  'Jaime': [50, 42, 44, 62, 100, 100],
  'Parker': [88, 91, 94, 78, 79, 85],
  'Victoria': [66, 57, 52, 68, 79, 85],
  'Rachel': [68, 63, 51, 68, 79, 85],
  'Max': [66, 57, 52, 52, 52, 85]
}

const gradeChecker = grade => {
  //console.log(grade, grade >= 65);
  if (grade >= 65) return true;
  else return false;
}

console.log(whoCanAttend(studentsGrades, gradeChecker)); // --> ['Parker', 'Victoria', 'Rachel']  


/* w3 - Shared Classes
HOF, compairing 3 arrays find common element


The new school year is about to start and you and your friends, Annie and Todd, are talking about which classes each of you will be taking. While it's exciting to hear about all the new things you will all be learning, you're really interested in which classes all three of you share! Let's utilize variables and higher order functions to make this process easier.

Create a variable called 'sharedClasses'. Utilizing higher order functions, iterate through the 'you' array, return a new array with only the classes that all three students share, and save it as the value for the 'sharedClasses' variable.

Use the console.log() method to output your results in the terminal 
Example:

const jimmy = ['US History', 'Algebra', 'Biology'];

const maria = ['World History', 'Chemistry', 'Algebra'];

const you = ['French', 'Algebra', 'Chemistry'];

console.log(sharedClasses);

Should log:

//['Algebra'] */

const annie = ['Algebra', 'Physics', 'Computer Science', 'French', 'World Literature', 'Italian History'];

const todd = ['World Literature', 'Chemistry', 'Spanish', 'Roman History', 'Geometry', 'Computer Science'];

const you = ['Algebra', 'Computer Science', 'Biology', 'World Literature', 'Italian History', 'German'];

// Write code below

function compareTwo(person1,person2){
  const sharedClasses =[];
  person1.forEach((e1) => person2.forEach((e2) => { if (e1 === e2) {
    sharedClasses.push(e1)
    // console.log(sharedClasses);
  }}));
  return sharedClasses;
}
sharedClasses= compareTwo(annie,todd);
compareTwo(sharedClasses,you);

/* w3 - Teacher's Pet
Teacher's Pet
Today is the first day back to school. 

You wake up early and plan to be the first person to arrive to class with an offering for your new teacher, a Red Delicious apple. 

With a spring in your step you round the bend in the corridor that leads to your new classroom and to your surprise, there's already a line of goody-apple-giving-two-shoes! 

A few specifications:

The variable appleHolderLine is an array where each index represents a person's position in line, and the values represent the type of apple each person is holding.

Initialize a variable called lineCount which should ultimately store the evaluation of having determined the total amount of people on the appleHolderLine.

Initialize a variable called appleMap which will serve as a reference to an object. The final object shape should contain multiple properties where the keys will reflect all the apples present in the appleHolderLine array, and their respective values should be arrays of numbers corresponding to the indices of the people holding the specified apple, in the appleHolderLine array. There should be no duplicate keys.

Use the console.log() method to output your results in the terminal 

Example:

const appleHolderLine = ['GreenApples', 'RedDelicious','OrangeApples', PurpleApples', 'RedDelicious']

console.log (lineCount, appleMap) 

Should Log: 
//5 {'GreenApples':[0], 'RedDelicious': [1,4], 'OrangeApples':[2], 'PurpleApples': [3]} */

const appleHolderLine = ['Rome', 'Ambrosia', 'Rome', 'RedDelicious', 'Akane','RedDelicious', 'SweeTango', 'RedDelicious', 'RedDelicious', 'Opal', 'Winesap', 'RedDelicious', 'Empire', 'RedDelicious', 'Liberty']; 

let lineCount = appleHolderLine.length;
//for (const [i, v] of appleHolderLine.entries()) {
//  console.log(v, [i])
//}

let appleMap = {};

for (let i = 0; i < appleHolderLine.length; i++) {
  if (appleHolderLine[i] in appleMap) {
     //console.log("existing:",appleMap[appleHolderLine[i]]);
     let existingLocation = appleMap[appleHolderLine[i]];
     existingLocation.push(i);
     appleMap[appleHolderLine[i]] = existingLocation;
  } else {
    //console.log("new:",appleMap[appleHolderLine[i]]);
    let location = [];
    location.push(i)
    appleMap[appleHolderLine[i]] = location;
  }
  //console.log(appleMap[appleHolderLine[i]]);
}
//let b = Object.keys
console.log(appleMap)


/* w3 - School Shopping
Summer is over and we need to go back-to-school shopping! Let's track a way to know which school supplies we need to purchase or not. 

Create a function called backToSchool that takes in an object as an argument. The keys of the object are names of school supplies and the values are booleans to check if the student currently has that item or not. Then the function returns a new function. This returned function takes in zero arguments. 

When first invoked, the returned function will check to see if the first key of the object is true or false.
If it's true,  return "You already have " + item name + "!"
If it's false, return "Go buy " +  item name + "!"

When invoked a second time, the returned function will check the second key in the object and print accordingly. Each proceeding invocation will be checking the next key until it finishes handling the last key of the object.  */

const backToSchool = (object) => {
  function itemCheck () {
    //console.log("before:",object);
    for (let item in object) {
      if (object[item] === true) {
        delete object[item];
        //console.log("after:",object);
        return (`You already have ${item}!`) ;
      } else {
        delete object[item];
        //console.log("after:",object);
        return (`Go buy ${item}!`);
      }
    }
  }
  return itemCheck;
}

// Uncomment these to check your work!
const schoolSupplies = {
    pencils: true, 
    markers: false, 
    notebooks: false,
    highlighters: true
};


const getItem = backToSchool(schoolSupplies);
console.log(getItem()); //-> should log "You already have pencils!"
console.log(getItem()); //-> should log "Go buy markers!"
console.log(getItem()); //-> should log "Go buy notebooks!"
console.log(getItem()); //-> should log "You already have highlighters!"



/* w4 - Student Records
Today is the first day of a new school year! Last year's freshmen are becoming sophomores, last years juniors are becoming seniors! But wait, there's something wrong with the school's records.

Looks like there was some kind of bug in the system. Last years freshmen are still marked as "freshmen." They never got promoted to sophomores! This can cause all kinds of problems.

Before we can add the new incoming class of freshmen, we have to go through the list of all of our students, find the students still marked as freshmen, and create a new list of these students with their status updated to "sophomores."

Actually, it sounds like we can extract this logic to a generic function and make it reusable for a lot of different cases.

Write a function called filterMap that has an array and two callbacks as its parameters, and returns a new array.

The first callback represents a condition and should return a boolean.

Iterate over the array. If any value passes the condition, the result of running it through the second callback should be included in the output array.

For example, if you pass in an array with odd and even numbers like [1,2,3,4,5], have your first callback check if numbers are even, and have your second callback multiply numbers by 100, you should get back [200, 400].
If you use this function to look through an array of students (objects with name and grade properties), pass in a condition that checks if a student is a freshman, and a second callback that changes their grade to "sophomore," you should get an array that only contains old freshmen but with their grade changed to sophomore.

This function can help our school's administration in all kinds of situations.

DO NOT use the built in array.filter or array.map methods! */
function filterMap(array, condition, callback) {
  const answer = [];
  for (const aboutStudents of array) {
    if (condition(aboutStudents) === true) {
      var updatedStudent = callback(aboutStudents);
      answer.push(updatedStudent);
    } 
  }
  return answer;
}

// UNCOMMENT THESE LINES TO TEST YOUR CODE 
const students = [
  {name: 'Max', grade: 'freshman'},
  {name: 'Rachel', grade: 'junior'},
  {name: 'Victoria', grade: 'freshman'},
  {name: 'Natalie', grade: 'senior'},
  {name: 'Jaime', grade: 'junior'},
  {name: 'Parker', grade: 'freshman'},
];

const isFreshman = student => student.grade === 'freshman'; 
const changeGradeToSophomore = student => ({name: student.name, grade: "sophomore"});
const newFreshmen = filterMap(students, isFreshman, changeGradeToSophomore);
console.log(newFreshmen);
// newFreshmen should be [
//   {name: 'Max', grade: 'sophomore'}, 
//   {name: 'Victoria', grade: 'sophomore'}, 
//   {name: 'Parker', grade: 'sophomore'}
// ];


/* w4 - Attendance (intermediate)
School is back! It is the start of a new semester and a new chance to be thankful for our teachers. Let's help them out with one of their daily routine tasks and build something that keeps track of students' attendance for them.

Create a function called getAttendance that takes an array of enrolled students’ names as an argument. getAttendance should return another function that can receive any number of arguments.

Your function should return an object where the keys are student(s) names and the values are each student’s individual attendance (%) for that semester. The object should also include as a key the string 'attendance' and the value is the average class attendance in the semester.

Keep in mind you can't have present students that aren't enrolled. If the array contains a name of a non-enrolled student, do not count count the attendance of any of the students, and return a string warning about the error: 'there are students in class that are not enrolled'.  */


/* w4 - Student Enrollment (OOP) (advanced)
Student Enrollment

It is the end of summer vacation and a new school semester is about to begin. The IT department is looking to streamline the student enrollment process by removing the monotony of manual paper registrations.  You're part of the team building out the new platform and you are tasked with finalizing the process of digitizing the enrollment process. 

for the constructor Course:
complete the method printStudents that returns an array of the entire roster of student names
each Student in the students array inside of a Course should be a reference to a Student object
the outputted string should originate from name property inside of the Student object (inherited by Person)
ex:
Course.printStudents(); => ["student1", "student2", "student3"]



for the constructor Teacher:
complete the method enrollStudent that allows teachers to enroll students into a course
each student pushed into the students array inside a Course will be a reference to a Student object
the reference to the Course should be inserted into the student's courses array
a teacher cannot enroll a student into a class they do not teach. 
If a teacher cannot enroll a student into a course, return the string:
unauthorized

If a student is successfully added, return the string:
student added

(hint: in a Course, the teacher property should be a reference to a teacher in memory, so when using a comparison operator on non primitive data types, it'll compare the two references rather than their values.) ex:
let a = {}
let b = {}
let c = a

console.log(a === b) //false
console.log(b === c) //false
console.log(c === a) //true



for the constructor Student:
complete the method printCourses that returns an array of strings for each course and teacher in the format of:
  <COURSE> taught by <TEACHERNAME>
  ex:
    English taught by Plato
each course in the courses array should be a reference to a Course object and the <COURSE> should be a string originating from the courseName property within a Course object as well as <TEACHERNAME> and Teacher */ 
HOF, compairing 3 arrays find common element