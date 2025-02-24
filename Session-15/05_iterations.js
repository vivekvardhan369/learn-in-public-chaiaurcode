// Calculate total expense in each category
let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
  ];
  
let expenseReport = expenses.reduce(
    (report,expense)=>{
        report[expense.category] += expense.amount;

    // report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report
},
{Food:0}
);

console.log("Expense Report", expenseReport);
// [{"Food": 150} , {"XYZ":20}]


// Filter out the tasks which are incompleted and sort them based on priority.
let tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
  ];

  let pendingSortedTasks = tasks
    .filter((task)=> !task.completed)
    .sort((a,b)=>a.priority - b.priority)
  console.log(pendingSortedTasks);
  

// calculate and print Avg ratings of each movie
  let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
  ];


let averageRatings = movieRatings.map((movie)=>{
    let total= movie.ratings.reduce((acc,curr)=>acc+curr,0)
    let average = (total/movie.ratings.length).toFixed(2)
    // movie.ratings=average  // If we write like these, it will mutate the original object(movieRatings)
    // return movie
    return {title: movie.title, ratings: average} // It is best Practice to return an object without effecting origianl Object (Yeh bug Piyush sir ka dho rathe karab kar diya tha🥲)
})


console.log(averageRatings);
console.log(movieRatings);



  