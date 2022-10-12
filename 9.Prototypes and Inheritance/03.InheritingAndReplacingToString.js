function toStringExtension() {

    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }

        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    };

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
        toString(){
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    };


    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course = course;
        }
        toString(){
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    };


    return {
        Person,
        Teacher,
        Student
    }
}


let classes = toStringExtension();

let Teacher = classes.Teacher;
let Person = classes.Person;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com');
let t = new Teacher('Ivo','Ivo@pesho.com','JS')
let s = new Student('Atanas','Atanas@asd.bg', "JS ADVANCEd")

console.log(p.toString());
console.log(t.toString());
console.log(s.toString());