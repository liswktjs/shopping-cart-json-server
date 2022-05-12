const jsonServer = require("json-server");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(router);
app.listen(process.env.PORT || 5001, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
