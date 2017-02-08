var store = require ('../Site/api/dal')(require('../Site/api/config/configs.json').db)

console.log(store.repositories.shoots.get({}))

// store.repositories.shoots.get({FK_User: 123})
// store.repositories.shoots.get({FK_User: 123, Id_Shoot})
// store.repositories.shoots.add({FK_User: 123, desc: "totto", ...})
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