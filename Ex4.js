let arr = [1, 2, 3, 4, 5];
//1.
let clone = (arr) => {
  let temp = [];
  temp = [...arr];
  console.log(temp);
};
//2.
let firstAndSecond = (arr) => {
  let temp = [[...arr][0], [...arr][1]];
  console.log(temp);
};
//3.
let thirdSumsTheRest = (arr) => {
  let temp = [];
  const [a, b, ...c] = arr;
  temp.push(a);
  temp.push(b);
  temp.push(c);
  console.log(temp);
};
//4.
let Person = {
  firstName: "John",
  job: "Gardner",
  lastName: "Billy",
};

let { firstName, lastName, job } = { ...Person };
console.log(firstName, lastName);
//console.log(string);

//5.
let func1 = (a, b, ...args) => {
  console.log(a);
  console.log(b);
  console.log(args);
};

//func1(1, 2, 3, 4, 5, 6, 7);
//6.
class Tzionet {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  static AddStudent(fname, lname, age1) {
    return new Tzionet(fname, lname, age1);
  }
  static RemoveStudent(stud) {
    delete stud.fname;
    delete stud.lname;
    delete stud.age;
  }
}
let t1 = Tzionet.AddStudent("moshe", "levi", 30);
let t2 = Tzionet.AddStudent("moshe1", "levi1", 32);
Tzionet.RemoveStudent(t2);
console.log(t2);
