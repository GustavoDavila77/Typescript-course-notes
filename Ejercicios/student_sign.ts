function registerStudent(name: string, age: number, course: string= "General", ...subjects: string []): void {
    console.log(`Student Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Course: ${course}`);
    console.log(`Subjects: ${subjects.join(", ")}`);    
}

//registerStudent("Carlos", 20, "Ingeniería", "Matemáticas", "Física");
registerStudent("Laura", 19);