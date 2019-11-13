const app = require("express")();

app.get("/", (req, res) => {
  res.json("from my docker container via aws ecr and ecs with fargate");
});

app.listen(3000, () => {
  console.log("the app is running");
});
