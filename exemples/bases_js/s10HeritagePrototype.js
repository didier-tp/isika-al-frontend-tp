function Person(firstName, lastName) {
    this.firstName = firstName || "unknown";
    this.lastName = lastName || "unknown";
};

Person.prototype.comment = "person";
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

let p1 = new Person("axelle" , "Aire");
console.log("p1="+JSON.stringify(p1));
let p2 = Object.create(p1);//créer simplement p2 via le prototype de p1
console.log("p2="+JSON.stringify(p2));
console.log("p2.comment="+p2.comment);//person

function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.schoolName = schoolName || "unknown";
    this.grade = grade || 0;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let s1 = new Student("jean" , "Bon" , "SchoolA" , 4);
console.log("s1="+JSON.stringify(s1));
console.log("Student.prototype="+JSON.stringify(Student.prototype));

console.log("s1.getFullName()="+s1.getFullName());
if(s1 instanceof Student) console.log("s1 is instanceof Student");
if(s1 instanceof Person) console.log("s1 is instanceof Person");