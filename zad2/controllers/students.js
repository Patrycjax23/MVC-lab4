const getAddNewStudentPage = (req, res) => {
    res.render('Home',
     { pageTitle: 'Add new student', message: ''
     });};
const postAddNewStudent = (req, res) => {
};

module.exports = { getAddNewStudentPage, postAddNewStudent };
