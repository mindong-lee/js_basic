class WageTable {
  static getWage(type) {
    return type == 1 ? 10000 : 8000;
  }
}

class Employee {
  #name;
  #dept;
  #workHour = 0;
  #payRate;

  constructor(name, dept, workHour) {
    this.#name = name;
    this.#dept = dept;
    this.#workHour = workHour;
  }

  work() {
    this.#workHour += 2;
  }
  get salary() {
    return this.#workHour * WageTable.getWage(this.#type);
  }
}

const emp = new Employee('anna', 'hr', 1);
emp.work();
console.log(emp.salary);
