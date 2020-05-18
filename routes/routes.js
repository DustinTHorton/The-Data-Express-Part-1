const mongoose = require('mongoose');
const express = require('express'); 

mongoose.connect('mongodb+srv://DustinHorton:Kitoshi@cluster0-ug0sk.mongodb.net/TheDataExpress?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true});

const mbd = mongoose.connection;
mbd.on('error', console.error.bind(console, 'connection error'));
mbd.once('open', callback =>{
});

let personSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String,
    age: String,
    questionOne: String,
    questionTwo: String,
    questionThree: String
});

let Person = mongoose.model('Database_User', personSchema);

exports.index = (req,res) => {
    Person.find((err, person)=> {
        if (err) return console.error(err);
    res.render('index', {
        title: "Users List",
        people: person
    })
  })
}


exports.create = (req,res) => {
    res.render('create',{
        titile: 'Add New User'
    });
}

exports.createPerson = (req, res) => {
    let person = new Person({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
        questionOne: req.body.questionOne,
        questionTwo: req.body.questionTwo,
        questionThree: req.body.questionThree
    });
    person.save((err,person) => {
        if(err) return console.error(err);
        console.log(req.body.name + " has been added");
    });
    res.redirect('/');
};

exports.edit = (req, res) => {
  Person.findById(req.params.id, (err, person) => {
    if(err) return console.error(err);
    res.render('edit', {
      title: 'Edit User',
      person
    });
  });
};

exports.editPerson = (req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if(err) return console.error(err);
        person.name = req.body.name,
        person.password = req.body.password,
        person.email = req.body.email,
        person.age = req.body.age,
        person.questionOne = req.body.questionOne,
        person.questionTwo = req.body.questionTwo,
        person.questionThree = req.body.questionThree
        person.save((err, person) => {
            if(err) return console.error(err);
            console.log(req.body.name + ' has been updated');
        });
    });
    res.redirect('/');
};


exports.delete = (req,res) => {
    Person.findByIdAndRemove(req.params.id, (err,person)=>{
        if(err) return console.error(err);
        res.redirect('/');
    });
};

exports.details = (req,res) => {
    Person.findById(req.params.id, (err,person) => {
        if(err) return console.error(err);
        res.render('User details', {
            title: person.name + "'s Details",
            person
        });
    });
};


const bcrypt = require('bcryptjs')

 exports.passwordSalting = (req, res) => {
     let salt = bcrypt.genSaltSync(10)
     let has = bcrypt.hashSync()
 }
