var store = require('../Site/api/dal')(require('../Site/config/configs.json').db)

// store.repositories.shoots.get({
//     id_User: 1
// }).then(function (shoots) {
//     shoots.forEach(function (shoot) {
//         console.log("First : " + shoot.id_Shoot)
//     }, this);
// })

// store.repositories.shoots.get({
//     id_User: 1,
//     id_Shoot: 1
// }).then(function (shoots) {
//     shoots.forEach(function (shoot) {
//         console.log("Second : " + shoot.Title)
//     }, this);
// })

// store.repositories.shoots.get({idUser: 123})
// store.repositories.shoots.get({idUser: 123, idShoot})


store.repositories.shoots.add({
    Title: 'titre bidon',
    Description: 'lorem ipsum',
    NbEnds: 10,
    NbArrowsByEnd: 3,
    Type: 'Training',
    User: 1, //TODO: voir avec auth pour récuperer l'user
    Location: {
        Latitude: '',
        Longitude: ''
    }
}, (err, shoot) => {
    console.log('Shoot id: ', shoot.id)
    for (i = 0; i < 10; i++) {
        store.repositories.ends.add({
            IdShoot: shoot.id,
            Arrows: [{
                Point: 7
            }, {
                Point: 10
            }, {
                Point: 9
            }]
        }, (err, end) => {
            console.log('End id: ', end.id)
            end.arrows.map((arrow) => {
                console.log('arrow id: ', arrow.id)
            })
        })
    }
})


// store.repositories.ends.add({
//     id_shoot: 3,
//     arrows: [{
//         point: 10
//     }, {
//         point: 10
//     }, {
//         point: 9
//     }, {
//         point: 10
//     }, {
//         point: 10
//     }, {
//         point: 9
//     }] // TODO: verify Arrows.length!!
// }, (result) => {
//     /**
//      * result = {
//      *  nbRemainingEnds: [nbRemainingEnds],
//      *  
//      * }
//      */
// })


// optional: store.repositories.shoots.remove({id_Shoot: 123})

// store.repositories.end.add({...});
// store.repositories.end.get({FK_Shoot: 123});
// optional: store.repositories.end.remove({...});

// store.repositories.arrow.add({ ...});
// store.repositories.arrow.get({ ...});
// optional: store.repositories.arrow.remove({ ...});

// store.repositories.group.add({ ...});
// store.repositories.group.get({ ...});
// optional: store.repositories.group.remove({ ...});

// optional: store.repositories.coach.add({ ...});
// optional: store.repositories.coach.get({ ...});
// optional: optional: store.repositories.coach.remove({ ...});

// optional: store.repositories.groupUser.add({});
// optional: store.repositories.groupUser.remove({});
// optional: store.repositories.groupUser.get({});