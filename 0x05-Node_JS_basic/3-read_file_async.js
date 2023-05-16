const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const studs = data.split('\n')
      .map((stud) => stud.split(','))
      .filter((stud) => stud.length === 4 && stud[0] !== 'firstname')
      .map((stud) => ({
        firstName: stud[0],
        lastName: stud[1],
        age: stud[2],
        field: stud[3],
      }));
  const csStuds = studs
      .filter((stud) => stud.field === 'CS')
      .map((stud) => stud.firstName);
  const sweStuds = studs
      .filter((stud) => stud.field === 'SWE')
      .map((stud) => stud.firstName);
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  return {studs, csStuds, sweStuds};
}

module.exports = countStudents;
