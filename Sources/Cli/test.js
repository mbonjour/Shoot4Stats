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


// Data Envoyées: {
//         title: 'titre bidon',
//         description: 'lorem ipsum',
//         nb_ends: 10,
//         nb_arrows_end: 3,
//         type: 'Training',
//         user: 1, //TODO: voir avec auth pour récuperer l'user
//         Location: {
//             latitude: '',
//             longitude: ''
//         }

        store.repositories.ends.add({
            idShoot: 4,
            arrows: [{
                point: 7
            }, {
                point: 10
            }, {
                point: 9
            }]
        }, (err, arrows) => {
            if (err) {
                console.log(err)
            } else {
                arrows.map((arrow) => {
                    console.log('arrow id: ', arrow.id)
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