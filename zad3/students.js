const getAddNewStudentPage = (req, res) => {
    res.render('Home',
     { pageTitle: 'Add new student', message: ''
     });};
const postAddNewStudent = (req, res) => {
    const newStudent = { id: nextId, fullName, code, fieldOfStudies };
    students.push(newStudent);
    nextId++;
};

module.exports = { getAddNewStudentPage, postAddNewStudent };
let students = [];
let nextId = 1;
students.get('/', studentsController.getAddNewStudentPage);
students.post('/add-student', studentsController.postAddNewStudent);
students.get('/success', studentsController.getAddingNewStudentSuccessPage);
students.get('/students-list', studentsController.getStudentsListPage);

