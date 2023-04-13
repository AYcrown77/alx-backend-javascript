export default function createReportObject(employeesList) {
  const result = {
    allEmployees: employeesList,
    getNumberOfDepartments(depts) {
      return Object.keys(depts).length;
    },
  };
  return result;
}
