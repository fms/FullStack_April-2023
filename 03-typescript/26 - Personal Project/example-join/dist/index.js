"use strict";
// Model - data classes
class Course {
    constructor(topic) {
        this.topic = topic;
    }
}
class Student {
    constructor(id) {
        this.id = id;
    }
}
// Model - relationship classes
class CourseStudent {
    constructor(course, student) {
        this.course = course;
        this.student = student;
    }
}
class CourseStudentRelationship {
    constructor() {
        this.relation = new Array();
    }
    add(course, student) {
        if (!this.relation.some(x => x.course === course && x.student === student)) {
            this.relation.push(new CourseStudent(course, student));
        }
    }
    remove(course, student) {
        const index = this.relation.findIndex(x => x.course === course && x.student === student);
        if (index !== -1) {
            this.relation.splice(index, 1);
        }
    }
    studentsInCourse(wantedCourse) {
        return this.relation.filter(x => x.course === wantedCourse).map(x => x.student);
    }
    coursesForStudent(wantedStudent) {
        return this.relation.filter(x => x.student === wantedStudent).map(x => x.course);
    }
}
// Sample data
const student1 = new Student("1");
const student2 = new Student("2");
const course1 = new Course("bio");
const course2 = new Course("cs");
// sample relationship
const courseStudents = new CourseStudentRelationship();
courseStudents.add(course1, student1);
courseStudents.add(course1, student2);
courseStudents.add(course2, student2);
// sample searches
console.log(courseStudents.coursesForStudent(student2));
console.log(courseStudents.studentsInCourse(course2));
