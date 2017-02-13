// var store = require('../Site/api/dal')(require('../Site/api/config/configs.json').db)

// // store.repositories.shoots.get({
// //     id_User: 1
// // }).then(function (shoots) {
// //     shoots.forEach(function (shoot) {
// //         console.log("First : " + shoot.id_Shoot)
// //     }, this);
// // })

// // store.repositories.shoots.get({
// //     id_User: 1,
// //     id_Shoot: 1
// // }).then(function (shoots) {
// //     shoots.forEach(function (shoot) {
// //         console.log("Second : " + shoot.Title)
// //     }, this);
// // })


// var Shoots = [];

// getShoots(Shoots,function(){
//     console.log(Shoots)
// }) 

// function getShoots(Shoots, callback) {
//     store.repositories.shoots.get({
//             id_User: 1,
//             id_Shoot: 1
//         }).then(function (shoots) {
//                 var i = 0;
//                 shoots.forEach((shoot, index, array) => {
//                     store.repositories.ends.get({
//                             id_Shoot: shoot.id_Shoot
//                         })
//                         .then(function (ends) {
//                             shoot.dataValues.nb_EndsReal = ends.length
//                             Shoots.push(shoot.dataValues)
//                             i++
//                             if (i === array.length) {
//                                 callback();
//                             }
//                         })
//                 });
//             });

//             // store.repositories.shoots.get({FK_User: 123})
//             // store.repositories.shoots.get({FK_User: 123, Id_Shoot})
//             // store.repositories.shoots.add({FK_User: 123, desc: "totto", ...})
//             // optional: store.repositories.shoots.remove({id_Shoot: 123})

//             // store.repositories.end.add({...});
//             // store.repositories.end.get({FK_Shoot: 123});
//             // optional: store.repositories.end.remove({...});

//             // store.repositories.arrow.add({ ...});
//             // store.repositories.arrow.get({ ...});
//             // optional: store.repositories.arrow.remove({ ...});

//             // store.repositories.group.add({ ...});
//             // store.repositories.group.get({ ...});
//             // optional: store.repositories.group.remove({ ...});

//             // optional: store.repositories.coach.add({ ...});
//             // optional: store.repositories.coach.get({ ...});
//             // optional: optional: store.repositories.coach.remove({ ...});

//             // optional: store.repositories.groupUser.add({});
//             // optional: store.repositories.groupUser.remove({});
//             // optional: store.repositories.groupUser.get({});