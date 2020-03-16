const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const students = [
    {id: 1, name: "Thinh", checkin: []},
    {id: 2, name: "Hung", checkin: []},
    {id: 3, name: "Vuong", checkin: []},
];

const checkinHistory = [
    {
        id: 1,
        name: "Thinh",
        date: "2020-03-16T06:19:01.988Z"
    },
    {
        id: 1,
        name: "Thinh",
        date: "2020-04-16T06:19:01.988Z"
    }
];

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/api/checkinHistory', (req, res) => {
    res.json(checkinHistory);
});

app.post('/api/qrcode', (req, res) => {
    let id = parseInt(req.body.id);
    let date = new Date();
    let user = students.filter(student => student.id == id)[0];
    students.map(student => {
        if (student.id == id){
            student.checkin.push(date);
        }
    });
    checkinHistory.push({id: id, name: user.name, date: date});
    res.json(user);
});

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));