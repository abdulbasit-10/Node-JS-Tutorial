const router = express.Router();

router.use((req, res, next) => {
  console.log("Router middleware triggered");
  next();
});

router.get('/user', (req, res) => {
  res.send("User Page");
});

app.use('/api', router);
