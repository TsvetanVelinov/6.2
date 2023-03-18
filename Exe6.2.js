function examPreparation (input) {
    let index = 0;
    let maxAllowedPoorGrades = Number(input[index]);
    index++;
 
    let command = input[index]; // 1
    index++; // 2
    let grade = Number(input[index]);
    index++; // 3
 
    let poorGradesCount = 0;
    let problemsSolved = 0;
    let totalGradesCount = 0;
    let lastProblemSolved = "";
 
    while (command !== "Enough") {
        lastProblemSolved = command;
 
        if (grade <= 4) {
            poorGradesCount++;
        }
 
        if (poorGradesCount === maxAllowedPoorGrades) {
            console.log(`You need a break, ${poorGradesCount} poor grades.`);
            break;
        }
 
        command = input[index];
        index++; // 4
        
        problemsSolved++;
        totalGradesCount += grade;
        grade = Number(input[index]);
        index++;
    }
 
    if (command === "Enough") {
        console.log(`Average score: ${(totalGradesCount / problemsSolved).toFixed(2)}`);
        console.log(`Number of problems: ${problemsSolved}`);
        console.log(`Last problem: ${lastProblemSolved}`);
    }
}

examPreparation (["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
])

examPreparation (["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
])
 