const app = require("express")();

app.get("/", (req, res) => {
  res.json(
    "from my docker container via aws ecr and ecs with fargate. I've just added codebuild to the stack and pushed my image to ecr"
  );
});

app.listen(3000, () => {
  console.log("the app is running");
});
