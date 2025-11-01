'use strict';

//Array to hold interns grades

const interns = [
  { name: 'Tola Norman', scores: [85, 98, 88, 92, 79] },
  { name: 'Chinedu Eze', scores: [97, 98, 89, 85, 96] },
  { name: 'Bolu lawal', scores: [77, 68, 79, 70, 83] },
  { name: 'Amaka Obi', scores: [91, 88, 92, 85, 87] },
  { name: 'Mustapha Bello', scores: [68, 75, 70, 72, 80] },
];

//Calculate average score
function calcAverage(scores) {
  //using for loop to access each score
  let total = 0;

  //loop through the scores array
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  //calculate average
  const average = total / scores.length;
  return average;
}

//Looping through each interns to log the results
interns.forEach((intern) => {
  const averageScore = calcAverage(intern.scores);
  console.log(`Intern: ${intern.name}, Average Score: ${averageScore}`);
});
