const express = require("express");
const { getAllmaterials, createMaterial, updatematerial, getMaterialsDetail, deleteMaterial } = require("../controllers/materialcontroller");


const router=express.Router();
 
//making routes
// for all students record
router.route("/materials").get(getAllmaterials);
router.route("/material/new").post(createMaterial);
router.route("/material/:id").put(updatematerial).get(getMaterialsDetail).delete(deleteMaterial);


module.exports= router