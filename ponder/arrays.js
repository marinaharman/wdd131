let courses = ["WDD131", "ITM220", "WDD231", "CSE212"];
//arrays start with the index 0
console.log(courses[0]);
console.log(courses[4]);

let courseAndGPA = ["WDD131", 3.7, "ITM220", 4];


// javascript object
let coursesAndGPA = {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner"
}

console.log(coursesAndGPA.professor);
// access variables inside an object
console.log(coursesAndGPA.courseName);


// array of objects
let coursesAndGpa = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner",
        assignments: [
            {
                assignmentName: "W01 Prove",
                assignmentGrade: 89
            }
        ]
    },
    {
        courseName: "WDD231",
        courseGPA: 4,
        professor: "Brother Warner"
    }
]

console.log(coursesAndGpa[1].courseName);
console.log(coursesAndGpa[0].assignments[0].assignmentName);


// looping through an array traditional for loop
for(let i = 0; i < coursesAndGpa.length; i++) {
    console.log(coursesAndGpa[i].courseName);
    console.log(coursesAndGpa[i].courseGPA);
}

// looping through with a for each loop
coursesAndGpa.forEach(item => {
    console.log(item.courseGPA)
    console.log(item.courseName)
});


let body = document.querySelector("body");
let course = coursesAndGpa[0];

// build out HTML dynamically based on array contents
let dynamicHTML = `
    <div>
        <h1>${course.courseName}</h1>
        <h2>${course.courseGPA}</h2>
    </div>
`;

coursesAndGpa.forEach(course => {
    let dynamicHTML = `
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h2>
        </div>
    `;
    body.innerHTML += dynamicHTML;
})