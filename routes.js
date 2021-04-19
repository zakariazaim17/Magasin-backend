import express from "express";
const router = express.Router();
import User from "./MongoModels/user.js";
import db from "./db/db.js";
import solde from "./MongoModels/solde.js";
import Product from "./MongoModels/product.js";
import Complain from "./MongoModels/complaint.js";
import image from "./MongoModels/image.js";
import fs from "fs";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import Image from "./MongoModels/image.js";
import Category from "./MongoModels/categorie.js";
import Bidings from "./MongoModels/biding.js";
import Favourites from "./MongoModels/favourite.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/").post(async (req, res) => {
  try {
    const newuser = await User.create({
      Username: req.body.Users.Username,
      Email: req.body.Users.Email,
      Pass: req.body.Users.Pass,
      Joined: new Date(),
      ClientLevel: 1,
      Verified: false,
    });

    res.send(newuser);
  } catch (e) {
    res.send(e.message);
  }
});
router.route("/solde").post(async (req, res) => {
  try {
    const newSolde = await solde.create({
      Expiry: new Date(req.body.Soldes.Expiry),
      Percentage: req.body.Soldes.Percentage,
      Code: req.body.Soldes.Code,
    });

    res.send(newSolde);
  } catch (e) {
    res.send(e.message);
  }
});

router
  .route("/product")
  .post(async (req, res) => {
    try {
      const newproduct = await Product.create({
        Title: req.body.Products.Title,
        Price: req.body.Products.Price,
        Category: req.body.Products.Category,
        Description: req.body.Products.Description,
        Published: new Date(),
        OnStore: true,
        Quantity: req.body.Products.Quantity,
        //Sizes: req.body.Products.Sizes,
        CodePromo: req.body.Products.CodePromo,
        Owner: req.body.Products.Owner,
      });
      res.send(newproduct);
    } catch (e) {
      res.send(e.message);
    }
  })
  .get(async (req, res) => {
    res.send(
      await Product.find().populate([{ path: "CodePromo" }, { path: "Owner" }])
    );
  });

router.route("/complain").post(async (req, res) => {
  try {
    const newComplain = await Complain.create({
      From: req.body.Complains.From,
      To: req.body.Complains.To,
      Content: req.body.Complains.Content,
      Status: "pending",
    });
    res.send(newComplain);
  } catch (e) {
    res.send(e.message);
  }
});

router
  .route("/uploadphoto")
  .post(upload.single("photo"), async (req, res) => {
    const photo = req.file.filename;

    const newUserData = {
      photo,
    };

    const newimage = await Image.create(newUserData);

    newimage
      .save()
      .then(() => res.send(newimage.id))
      .catch((err) => res.status(400).json("Error: " + err));
  })
  .get(async (req, res) => {
    res.send(await Image.find());
  });

router.route("/category").post(async (req, res) => {
  try {
    const newCategory = await Category.create({
      Name: req.body.Categories.Name,
      TotalItems: 0,
    });
    res.send(newCategory);
  } catch (e) {
    res.send(e.message);
  }
});

router.route("/bidings").post(async (req, res) => {
  try {
    const newBiding = await Bidings.create({
      Title: req.body.Bidings.Title,
      Initialprice: req.body.Bidings.Initialprice,
      participants: 0,
      Owner: req.body.Bidings.Owner,
    });

    res.send(newBiding);
  } catch (e) {
    res.send(e.message);
  }
});

router.route("/favourites").post(async (req, res) => {
  try {
    const newFavourite = await Favourites.create({
      Owner: req.body.Favourite.Owner,
      Products: req.body.Favourite.Product,
    });
    res.send(newFavourite);
  } catch (e) {
    res.send(e.message);
  }
});

export default router;
