// Loop over an array of student grades (values from 50-100) 
// and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

const scoresA = []
const scoresB = []
const scoresC = []
const scoresD = []
const scoresF = []

for (i = 0; i < scores.length; i++){
    const grades = scores[i]
    if (grades > 90) {
        scoresA.push(grades)
    }
    else if (grades > 80 && grades < 91) {
        scoresB.push(grades)
    }
    else if (grades > 70 && grades < 81) {
        scoresC.push(grades)
    }
    else if (grades > 60 && grades < 71) {
        scoresD.push(grades)
    }
    else if (grades < 61) {
        scoresF.push(grades)
    }

}
// Use console.log() to output the following criteria:
// How many of each grade?
console.log("there are " + scoresA.length + " A's")
console.log("there are " + scoresB.length + " B's")
console.log("there are " + scoresC.length + " C's")
console.log("there are " + scoresD.length + " D's")
console.log("there are " + scoresF.length + " F's")
// What is the lowest grade?
console.log("The lowest grade was a " + Math.min(...scores))
// What is the highest grade?
console.log("The highest grade was a " + Math.max(...scores))