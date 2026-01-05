function registerStudent(name, age, course) {
    if (course === void 0) { course = "General"; }
    var subjects = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        subjects[_i - 3] = arguments[_i];
    }
    console.log("Student Name: ".concat(name));
    console.log("Age: ".concat(age));
    console.log("Course: ".concat(course));
    console.log("Subjects: ".concat(subjects.join(", ")));
}
//registerStudent("Carlos", 20, "Ingeniería", "Matemáticas", "Física");
registerStudent("Laura", 19);
