const router = require("express").Router();
const fs = require("fs");
const uuid = require("./uuid");
const {
  readAndAppend,
  readFromFile,
  writeToFile,
} = require("../helpers/fsUtils");
const { process } = require("process");

router.get("/", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => res.json(JSON.parse(data)));
});

// POST Route for a error logging
router.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (title && text) {
    const noteBody = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(noteBody, "./db/db.json");

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(noteBody);
        fs.writeFile("./db/db.json", JSON.stringify(parsedData), () => {
          const response = {
            status: "success",
            body: noteBody,
          };

          res.status(201).json(response);
        });
      }
    });

    // write to file
  }
});

router.get("/:id", (req, res) => {
  const routerId = req.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((title) => title.id === routerId);
      return result.length > 0
        ? res.json(result)
        : res.json("No note with that ID");
    });
});

router.delete("/:id", function (req, res) {
  const routerId = req.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((title) => title.id !== routerId);
      writeToFile("./db/db.json", result);
      res.json(`Item ${routerId} has been deleted`);
    });
});
module.exports = router;
