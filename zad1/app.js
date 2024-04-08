const express=require("express");
const router=express.Router();
const PORT=3000;
function requestListener(req,resp){
    console.log(`Server is running on ${PORT}`);
}
app.get('/', (req, res) => {
    res.render('Home');
});
app.get('/success', (req, res) => {
    res.render('Success');
});
app.get('/students-list', (req, res) => {
    res.render('List');
});
app.post('/add-student', (req, res) => {
    res.redirect('/add-student');
});
