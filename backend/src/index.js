const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./Route/route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect("mongodb+srv://choudharyprateek131:9927729187@cluster0.nkeq4ce.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });

app.use('/', route);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server has started on the port:", process.env.PORT || 8080);
});
