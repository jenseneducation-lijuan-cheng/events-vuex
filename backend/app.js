const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const eventsRouter = require("./routes/events");

app.use(cors());
app.use(express.json());
app.use("/api/events", eventsRouter);

app.listen(port, () => console.log(`Server started on port: ${port}`));
