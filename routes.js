const mongoose = require('mongoose');
const express = require('express');

//mongoose.connect('mongodb+srv://DustinHorton:Kitoshi@cluster0-ug0sk.mongodb.net/TheDataExpress?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connect('mongodb+srv://user:pass1234@cluster0-6simv.mongodb.net/TheDataExpress?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true});


const mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback =>{
});

const UserSchema = mongoose.Schema(
    {
    avatarUrl : String,    
    name: String,
    password: String,
    email: String,
    age: String,
    questionOne: String,
    questionTwo: String,
    questionThree: String
});

var cookiecounter = 0
let User = mongoose.model("Database_User", UserSchema);

exports.index = (req, res) => {
    User.find((err, user)=> {
        if (err) return console.error(err);
    res.render('index', {
        title: "Users List",
        userList: user
    })
  })
}

exports.private = (req,res) => {
    User.findOne({name:req.session.user.user}, (err, user) => {
        if (err) return console.error(err);
        cookiecounter = cookiecounter + 1;
    if(req.cookies.beenHereBefore == 'yes'){
        res.cookie('visited', cookiecounter, {maxAge: 9999999999})
        res.render('private',{title: 'Access granted', cookieData: `You have been here ${cookiecounter} time(s) before.`,user: user, avatarUrl: user.avatarUrl})
    } else {
        res.cookie('beenHereBefore', 'yes', {maxAge: 9999999999})
        res.cookie('visited', 0, {maxAge: 9999999999})
        res.render('private',{title: 'Access granted', cookieData: `This is your first time here.`,user: user, avatarUrl: user.avatarUrl})
    }
    })
}

exports.create = (req, res) => {
    res.render('create',{
        title: 'Add New User'
    });
}

exports.createUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        let user = new User({
            avatarUrl : '/myAvatars/' + req.body.name,
            name: req.body.name,
            password: hash,
            email: req.body.email,
            age: req.body.age,
            questionOne: req.body.question1,
            questionTwo: req.body.question2,
            questionThree: req.body.question3
        });
        user.save((err, user) => {
            if(err) return console.error(err);
            console.log(user.name + " has been added");
            console.log(user);
        });
    })
    
    res.redirect('/submitted');
};

exports.edit = (req, res) => {
    console.log(req.session.user.user);
    User.findOne({name:req.session.user.user}, (err, user) => {
        console.log(user)
        if (err) return console.error(err);
        res.render('edit', {
            title:'Edit User',
            user:user
        });
    });
};

exports.editUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        User.findOne({name:req.params.id}, (err, user) => {
            if(err) return console.error(err);
            req.session.user.user = req.body.name,
            console.log("Session user:" + req.session.user.user);
            user.avatarUrl = '/myAvatars/' + req.body.name,
            user.name = req.body.name,
            user.password = hash,
            user.email = req.body.email,
            user.age = req.body.age,
            user.questionOne = req.body.questionOne,
            user.questionTwo = req.body.questionTwo,
            user.questionThree = req.body.questionThree

            res.redirect('/private');

            user.save((err, user) => {
                if(err) return console.error(err);
                console.log(req.body.name + ' has been updated');
            });
        });
    });
    
};
111111111
const bcrypt = require('bcryptjs')

 exports.passwordSalting = (req, res) => {
     let salt = bcrypt.genSaltSync(10)
     let has = bcrypt.hashSync()
}

exports.avatar = (req,res) => {
    
}

exports.api = (req,res) => {
    User.find({},(err, users) => {
        if (users) {
            let questionOneAnswers = [];
            let questionTwoAnswers = [];
            let questionThreeAnswers = [];
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                questionOneAnswers.push(user.questionOne);
                questionTwoAnswers.push(user.questionTwo);
                questionThreeAnswers.push(user.questionThree);
            }
            let tootsieAnswerOne = questionOneAnswers.filter(answer => answer == '1').length;
            let tootsieAnswerTwo = questionOneAnswers.filter(answer => answer == '11').length;
            let tootsieAnswerThree = questionOneAnswers.filter(answer => answer == '364').length;
            let tootsieAnswerFour = questionOneAnswers.filter(answer => answer == 'Other').length;

            let tootsieTotal = questionOneAnswers.length

            let videoGameAnswerOne = questionTwoAnswers.filter(answer => answer == 'Yes').length;
            let videoGameAnswerTwo = questionTwoAnswers.filter(answer => answer == 'No').length;
            let videoGameAnswerThree = questionTwoAnswers.filter(answer => answer == 'Maybe').length;
            let videoGameAnswerFour = questionTwoAnswers.filter(answer => answer == 'Other').length;

            let videoGameTotal = questionTwoAnswers.length

            let accountAnswerOne = questionThreeAnswers.filter(answer => answer == 'Yes').length;
            let accountAnswerTwo = questionThreeAnswers.filter(answer => answer == 'No').length;
            let accountAnswerThree = questionThreeAnswers.filter(answer => answer == 'Maybe').length;
            let accountAnswerFour = questionThreeAnswers.filter(answer => answer == 'Other').length;

            let accountTotal = questionThreeAnswers.length

            //Converting to Percentages
            let tootsiePercentOne = Math.round(tootsieAnswerOne / users.length * 100);
            let tootsiePercentTwo = Math.round(tootsieAnswerTwo / users.length * 100);
            let tootsiePercentThree = Math.round(tootsieAnswerThree / users.length * 100);
            let tootsiePercentFour = Math.round(tootsieAnswerFour / users.length * 100);
            let videoGamePercentOne = Math.round(videoGameAnswerOne / users.length * 100);
            let videoGamePercentTwo = Math.round(videoGameAnswerTwo / users.length * 100);
            let videoGamePercentThree = Math.round(videoGameAnswerThree / users.length * 100);
            let videoGamePercentFour = Math.round(videoGameAnswerFour / users.length * 100);
            let accountPercentOne = Math.round(accountAnswerOne / users.length * 100);
            let accountPercentTwo = Math.round(accountAnswerTwo / users.length * 100);
            let accountPercentThree = Math.round(accountAnswerThree / users.length * 100);
            let accountPercentFour = Math.round(accountAnswerFour / users.length * 100);
            res.send({data:{
                tootsiePercentages:[
                    tootsiePercentOne,tootsiePercentTwo,tootsiePercentThree,tootsiePercentFour,tootsieTotal
                ],
                videoGamePercentages:[
                    videoGamePercentOne,videoGamePercentTwo,videoGamePercentThree,videoGamePercentFour,videoGameTotal   
                ],
                accountPercentages:[
                    accountPercentOne,accountPercentTwo,accountPercentThree,accountPercentFour,accountTotal
                ]
            }})
        }else{
            res.send({data:{
                tootsiePercentages:[
                    0,0,0,0
                ],
                videoGamePercentages:[
                    0,0,0,0    
                ],
                accountPercentages:[
                    0,0,0,0
                ]
            }});
        }
    });
}