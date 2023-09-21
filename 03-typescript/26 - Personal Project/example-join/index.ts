// Model - data classes
class Course {
    constructor(public topic: string) {}
}

class Student {
    constructor(public id: string) {}
}

// Model - relationship classes
class CourseStudent {
    constructor(public course: Course, public student: Student) {}
}

class CourseStudentRelationship {
    private relation = new Array<CourseStudent>();

    add(course: Course, student: Student)
    {
        if (!this.relation.some(x => x.course === course && x.student === student))
        {
            this.relation.push(new CourseStudent(course, student));
        }
    }

    remove (course: Course, student: Student) {
        const index = this.relation.findIndex(x => x.course === course && x.student === student);
        if (index !== -1) {
            this.relation.splice(index, 1);
        }
    }
    
    studentsInCourse(wantedCourse: Course): Student[] {
        return this.relation.filter(x => x.course === wantedCourse).map(x => x.student);
    }

    coursesForStudent(wantedStudent:): Course[] {
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
