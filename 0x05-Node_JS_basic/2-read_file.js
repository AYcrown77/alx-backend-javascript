const fs = require('fs');
function countStudents(filepath) {
  let myData = [];
  const fields = {};
  try {
    myData = fs.readFileSync(filepath).toString().split('\n').slice(1);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  console.log('Number of students: ' + myData.length);
  myData.map((student) => student.split(','))
      .map((student) => {
        if (!(student[3] in fields)) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      });
  for (const key in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, key)) {
      console.log((`Number of students in ${key}: ${fields[key].length}.\
        List: ${fields[key]}`).replace(/,/g, ', '));
    }
  }
}

module.exports = countStudents;
