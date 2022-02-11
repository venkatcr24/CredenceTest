// var express = require('express');
// var router = express.Router();
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {

  var query = 'select * from emp order by Empid desc';
 
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
    res.render('index', { title: 'Employees',employees: rows});
  })
});


router.get('/create-form', function(req, res, next) {
  res.render('createform', {title: 'Employee Details'});
});


router.post('/create', function(req, res, next) {
  var firstname = req.body.fname;
  var middlename = req.body.mname;
  var lastname = req.body.lname;
  var dob = req.body.dob;
  var gender = req.body.gender;
  var basic = req.body.basic;
  var allowances = req.body.allowances;
  var deduction = req.body.deduction;
  var net_salary = parseInt(basic) + parseInt(allowances) - parseInt(deduction);

  if(firstname != "" || middlename != "" || lastname != "" || dob != ""||gender != "" || basic !=""|| allowances !=""|| deduction !=""){
    var sql = `INSERT INTO emp (First_name ,Middle_name,Last_name,DOB, Gender, Basic, Allowance, Deduction,Net_Salary) VALUES ("${firstname}","${middlename}","${lastname}", "${dob}", "${gender}", "${basic}", "${allowances}","${deduction}","${net_salary}")`;
    db.query(sql, function(err, result) {
      if (err) throw err;
      console.log('record inserted');
      res.redirect('/');
    });
  }else{
    res.render('createform', {title: 'Employee Details'});
  }
});


router.get('/edit-form/:id', function(req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM emp WHERE Empid=${id}`;
  db.query(sql, function(err, rows, fields) {
      res.render('editform', {title: 'Edit Employee', employee: rows[0]});
  });
});


router.post('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  var firstname = req.body.fname;
  var middlename = req.body.mname;
  var lastname = req.body.lname;
  var dob = req.body.dob;
  var gender = req.body.gender;
  var basic = req.body.basic;
  var allowances = req.body.allowances;
  var deduction = req.body.deduction;
  var net_salary = parseInt(basic) + parseInt(allowances) - parseInt(deduction);
  if(firstname != "" || middlename != "" || lastname != "" || dob != ""||gender != "" || basic !=""|| allowances !=""|| deduction !=""){
    var sql = `UPDATE emp SET First_name="${firstname}", Middle_name="${middlename}",Last_name="${lastname}",DOB="${dob}", Gender="${gender}", Basic="${basic}", Allowance="${allowances}", Deduction="${deduction}", Net_Salary="${net_salary}" WHERE Empid=${id}`;
    db.query(sql, function(err, result) {
      if (err) throw err;
      console.log('record updated!');
      res.redirect('/');
    });
  }
  
});


/*delete product*/
router.get('/delete/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  var sql = `DELETE FROM emp WHERE Empid=${id}`;

  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record deleted!');
    res.redirect('/');
  });
});


module.exports = router;
