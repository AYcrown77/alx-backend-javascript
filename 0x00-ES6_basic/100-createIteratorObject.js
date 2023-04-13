export default function createIteratorObject(report) {
  const employeeIter = [];

  for (const key in report.allEmployees) {
    if ({}.hasOwnProperty.call(report.allEmployees, key)) {
      for (const employee of report.allEmployees[key]) {
        employeeIter.push(employee);
      }
    }
  }
  return employeeIter;
}
