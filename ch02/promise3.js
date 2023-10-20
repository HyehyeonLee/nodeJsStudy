// promise 사용 X
function findAndSaveUser(Users){
    Users.findOne({}, (err, user) => { //첫번째 콜백
        if(err){
            return console.log(err);
        }
        user.name = 'zero';
        user.save((err) => { //두번째 콜백
            if(err){
                return console.log(err);
            }
            Users.findOne({gender : 'm'}, (err, user) =>{ //세번째 콜백
                //생략 
            });
        });
    });
}

// promise 사용
function findAndSaveUserPromise(Users){
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.find({gender : 'm'});
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {
            console.err(err);
        });
}

//async/await 사용
async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender : 'm'});
    //생략
}