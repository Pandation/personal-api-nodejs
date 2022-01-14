const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then((res) => console.log("Connection done succesfully."))
  .catch((e) =>
    console.log("An error occured when trying to connect to the DB...")
  );
