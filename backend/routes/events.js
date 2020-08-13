const lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");
const adapter = new fileSync("./assets/data/events.json");
const database = lowdb(adapter);
const {
  v4: uuidv4
} = require('uuid');


const {
    Router
} = require('express')
const router = new Router()
const fs = require('fs');

router.get('/', async (req, res) => {
    const events = fs.createReadStream('./assets/data/events.json');
    events.pipe(res);
});

router.post('/admin', async (req, res) => {
        const eventInfo = req.body
        //console.log(eventInfo)
        const addEvent = database
        .get("events")
        .push(eventInfo
         
        )
        const data = await addEvent
        .write();
        res.send(data)
      });

module.exports = router