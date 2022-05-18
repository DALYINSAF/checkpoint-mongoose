
const express = require("express");
require("dotenv").config();
const app = express();
//connection base de données
const mongoose = require("mongoose");
app.use(express.json());
const PersonModel = require("./personmodel");
mongoose
  .connect(process.env.mongo_url)
  .then(() => console.log("BD is connected"));

//traitemants
let person = new PersonModel({
  name: "Asma",
});
// person
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
const peopls = [
  {
    name: "John",
    age: 60,
    favoritefoods: ["Couscous"],
  },
  {
    name: "Amin",
    age: 24,
    favoritefoods: ["Mtabga", "Osban insaf nsibto laaziza"],
  },
  {
    name: "Najeh",
    age: 27,
    favoritefoods: ["Ma9rouna Fell 2"],
  },
];
// PersonModel.create(peopls, (err, data) =>
//   err ? console.log(err) : console.log(data)
// );
const Jibhom = async () => {
  try {
    const res = await PersonModel.find({});
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// Jibhom();
const JibliJohn = async () => {
  try {
    const res = await PersonModel.findOne({ favoritefoods: "Couscous" });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// JibliJohn();
const kaskeslou = async () => {
  try {
    const res = await PersonModel.findById("628229064af3a86f226959ce");
    //console.log(res);
    res.favoritefoods.push("Humborger");
    // console.log(res);
    res.save();
  } catch (error) {
    console.log(error);
  }
};
//kaskeslou();
const MachkimnJdid = async () => {
  try {
    const res = await PersonModel.findOneAndUpdate(
      { _id: "628229064af3a86f226959ce" },
      { $set: { name: "jason El-Borni" } },
      { new: true }
    );
    await res.save();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// MachkimnJdid();
app.post("/newperson", async (req, res) => {
  try {
    const newperson = req.body;
    // console.log(newperson);
    const existperson = await PersonModel.find({ name: newperson.name });
    // if (!existperson) {
    //   return res.send("deja exist");
    // }
    newperson.save();
    res.send(newperson);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.port, (err) =>
  err ? console.log(err) : console.log("server is running ")
);
app.get("/all", async (req, res) => {
  try {
    const all = await PersonModel.find({});

    res.send(all);
  } catch (error) {
    console.log(error);
  }
});