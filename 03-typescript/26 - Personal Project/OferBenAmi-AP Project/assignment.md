# Personal Project
- Consider a topic for a project based on the guidelines below.
- Get approval before starting work on the project.

## Easy
- Create a CRUD application using a single entity.

## Medium
- Expend the project to include two entities, with joins (see explanation below).
- Design at least two pages, using the same model.
- Share data between the pages using `localStorage`.
- Use the same model by placing the classes in a separate file, and use multiple `<script src="" defer>` lines, one for each file.


## Advanced
- Develop a cool game with a leader board and an admin panel.
- Use at least two entities.
- Use CRUD for keeping track of players and scores.

## Grading
Total: 90
- 10 BEM model
- 10 beautiful and accurate design
- 10 responsive design
- 10 clear code
- 10 clear structure
- 20 using MVC
- 10 Error handling (as needed) using try/catch
- 10 no bugs

Difficulty level Bonus:
- 0 - Easy
- 5 - Medium
- 10 - Advanced

Extra bonus (regardless of the difficulty level):
- Amaze me! 10 points

## Joins

`Joins` represent the relationship between entities. The following is a specific implementation for such a relationship. Later, we will learn other, better ways of doing this.

You can find the full code in the `example-join` folder.

***
Take the following classes for example:
```typescript
class Course {
    constructor(public topic: string) {}
}

class Student {
    constructor(public id: string) {}
}
```
To list all the students that belong to a course, we might include an array of students inside the `Course` class.

But, how can we find all the courses a student belongs to? We could implement a similar approach (array of courses in the `Student` class), but required updating both the course and the student with each operation.

A different approach is to keep the relation outside the classes all together, using another class that holds the relation:
```typescript
class CourseStudent {
  constructor(public course: Course, public student: Student) {}
}
```

And a wrapper for implementing the relationship:
```typescript
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

```

An example of using this:
```typescript
const student1 = new Student("1");
const student2 = new Student("2");

const course1 = new Course("bio");
const course2 = new Course("cs");

const courseStudents = new CourseStudentRelationship();
courseStudents.add(course1, student1);
courseStudents.add(course1, student2);
courseStudents.add(course2, student2);

console.log(courseStudents.coursesForStudent(student2));
console.log(courseStudents.studentsInCourse(course2));
```