var express = require("express");
var router = express.Router();
const sender = require("../helpers/sender");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/auth/register", function (req, res, next) {
  console.log(req.body);
  sender
    .Sender(req.body)
    .then((dat) => console.log(dat))
    .catch((err) => console.log(err));

  res.json({
    Subject: "Hola bienvenido",
    Message: "Este es el curso de Mailing con Node"
  });
});

module.exports = router;
