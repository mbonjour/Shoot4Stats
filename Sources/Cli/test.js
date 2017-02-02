var store = require ('../Site/api/dal')(require('../Site/api/config/configs.json').db)

console.log(store.repositories.shoots.get({}))

// store.repositories.shoots.add({IdUser: 123, desc: "totto", ...})

// store.repositories.arrow.add({ ...});
// store.repositories.end.add({...});
