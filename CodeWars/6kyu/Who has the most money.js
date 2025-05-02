// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money


//My First Pass

function mostMoney(students) {
    if(students.length === 1) return students[0].name
    
    students.forEach(obj => {
      obj.total = obj.fives*5 + obj.tens*10 + obj.twenties*20
    })
    
    students.sort((a,b) => b.total - a.total)
    
   return students.every(stud => stud.total === students[0].total) ? "all" : students[0].name
  } 


// Code Wars Alternative

function mostMoney(s) {
    s.sort((x,y)=>sum(y)-sum(x));
    if(s.length>1 && sum(s[0])==sum(s[1]))return 'all';
    return s[0].name;
  }
  
  const sum = (s) => (s.fives*5)+(s.tens*10)+(s.twenties*20);


    // My Adjustment of alternative

    function mostMoney(s) {
        const sum = (s) => (s.fives*5)+(s.tens*10)+(s.twenties*20);

        s.sort((x,y)=>sum(y)-sum(x));

        return s.length>1 && sum(s[0])==sum(s[1]) ? 'all' :  s[0].name;
      }
      


  // Or

  const mostMoney = students =>
  (arr => arr.length > 1 && Math.max(...arr) === Math.min(...arr) ? `all` : students[arr.indexOf(Math.max(...arr))].name)
  (students.map(obj => obj.fives * 5 + obj.tens * 10 + obj.twenties * 20));