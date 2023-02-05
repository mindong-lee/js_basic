class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.wrongFullName = `${this.lastName} ${this.firstName}`; //생성 때 1번 초기화
  }

  _fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set setFirstName(value) {
    this.firstName = value;
  }
}

const student = new Student('민동', '이');

console.log(student.firstName);
console.log(student._fullName()); //함수

student.firstName = '안나';
console.log(student.firstName);
console.log(student.wrongFullName);

student.setFirstName = '철수';
console.log(student.fullName); //getter
