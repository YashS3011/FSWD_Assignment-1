// Create an array of task objects

const tasks=[{title:"Bath",status:"Completed",priority:5},
    {title:"Breakfast",status:"Completed",priority:3},
    {title:"Exercise",status:"Pending",priority:1},
    {title:"Rest",status:"Completed",priority:4},
];


//  functions:

//  Add task
const addtask=(alltasks,task)=>{
    alltasks.push(task);
};

addtask(tasks,{title:"Walk",status:"Pending",priority:2});
console.log(tasks);

//  Filter by Status
const basedonstatus =(alltasks,st)=>{
    return alltasks.filter(task=>task.status===st);
};
console.log(basedonstatus(tasks,"Pending"));

//  Find High Priority Task
const highprority = (alltasks)=>{
    return alltasks.reduce((high_prority,task)=>{ return high_prority.priority > task.priority ? high_prority : task});
};
console.log(highprority(tasks));

//  Use map() to create a list of task titles with their status
const mapping=(alltasks)=>{
    return alltasks.map(task=>({title:task.title ,status:task.status}));
};
console.log(mapping(tasks));

//  Use template literals to log the details of all tasks in a readable format
tasks.forEach(task => {
    console.log(` ${task.title} is ${task.status} and prority is ${task.priority}`);
});