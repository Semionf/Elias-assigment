class Zionet {
  constructor(
    studentNames,
    numberOfStudents,
    location,
    numberOfTeachers,
    teacherNames
  ) {
    this.studentNames = studentNames;
    this.numberOfStudents = numberOfStudents;
    this.location = location;
    this.numberOfTeachers = numberOfTeachers;
    this.teacherNames = teacherNames;
  }
  getLocation() {
    console.log(this.location);
  }
}

let z1 = new Zionet("Yossi, hiam, avi", 3, "Akko", 3, "Elias, haim, alon");
z1.getLocation();
