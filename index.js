//jshint esversion:6
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const username = encodeURIComponent(process.env.USERNAME)
const password = encodeURIComponent(process.env.PASSWORD)

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ckjnfxv.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true })

const itemSchema = {
  name: String
}

const Item = mongoose.model("item", itemSchema)

const item1 = new Item({
  name: "Welcome to your TODO List"
})

const item2 = new Item({
  name: "Hit the + button for adding an item"
})

const item3 = new Item({
  name: "<----Hit this to delete an item."
})

const defaultItems = [item1, item2, item3]

const listSchema = {
  name: String,
  items: [itemSchema]
}

const List = mongoose.model("list", listSchema)

app.get("/", function (req, res) {



  Item.find({}).then((foundItems) => {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems).then((value) => {
        console.log("Successfully is added to the items collection")
        res.redirect("/")
      }).catch((err) => {
        console.log("OOps you got an error")
      })
    } else {
      console.log("=========================================")
      console.log(`The found items are ${foundItems}`)
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  })



});


app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName
  })

  if (listName === "Today") {
    item.save()
    res.redirect("/")
  } else {
    List.findOne({ name: listName }).then((foundList) => {
      foundList.items.push(item)
      foundList.save()
      res.redirect("/" + listName)
    })
  }

});

app.get("/:customListName", (req, res) => {
  const customListName = req.params.customListName
  const list = new List({
    name: customListName,
    items: defaultItems
  })
  List.findOne({ name: customListName }).exec().then((foundList) => {
    if (!foundList) {
      console.log("Doesn't exist")
      list.save()
      res.redirect("/" + customListName)
    } else {
      console.log("Already Exists")
      res.render("list", { listTitle: foundList.name, newListItems: foundList.items })
    }
  })
})

app.post("/delete", (req, res) => {
  const listName = req.body.listName
  if (listName === "Today") {
    Item.findByIdAndDelete({ _id: req.body.checkbox }).then((value) => {
      console.log(`The item with ${req.body.checkbox} is deleted.`)
      res.redirect("/")
    })
  } else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: req.body.checkbox } } }).then((value) => {
      console.log("item deleted success fully")
    })

    res.redirect("/" + listName)
  }

})

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {

  console.log("Server started on port 3000");
});
