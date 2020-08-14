const lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");
const adapter = new fileSync("./assets/data/events.json");
const database = lowdb(adapter);
const { v4: uuidv4 } = require("uuid");

const { Router } = require("express");
const router = new Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  const events = fs.createReadStream("./assets/data/events.json");
  events.pipe(res);
});

router.post("/admin", async (req, res) => {
  const eventInfo = req.body;
  eventInfo.id = uuidv4()
  
  const addEvent = database.get("events").push(eventInfo);
  const data = await addEvent.write();
  res.send(data);
});
router.post("/buy", async (req, res) => {
  const eventInfo = req.body;
  const ticketsNumber = uuidv4().split("-")[0];
  const myData = {
    event: eventInfo,
    ticket: ticketsNumber,
  };
  const addEvent = database.get("tickets").push(myData);
  await addEvent.write();

  await database
    .get("events")
    .find({ id: eventInfo.id })
    .get("tickets")
    .update("sold", (n) => n + 1)
    .write();

  res.send(myData);
});

router.get("/staff/:ticketNr", async (req, res) => {
  const ticketNu = database
    .get("tickets")
    .find({ ticket: req.params.ticketNr })
    .value();
  let valid = false;
  if (ticketNu != undefined) {
    valid = true;
  }
  let response = {
    valid: valid,
  };
  res.send(response);
});

module.exports = router;
