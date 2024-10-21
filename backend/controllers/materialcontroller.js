const Material = require("../models/materialmodel");



// create category --Admin
exports.createMaterial = (async (req, res, next) => {
    const material = await Material.create(req.body);

    res.status(201).json({
        success: true,
        material,

    });
});




exports.getAllmaterials = async (req, res) => {
    const materials = await Material.find();
    res.status(200).json({
        success: true,
        materials,
    });

}

// get single item 

exports.getMaterialsDetail = async (req, res, next) => {
    const material = await Material.findById(req.params.id);

    if (!material) {
        return res.status(500).json({
            success: false,
            message: "Material not Found"
        });
    }

    res.status(200).json({
        success: true,
        material,
    })

};




exports.updatematerial = async (req, res, next) => {
    let material = await Material.findById(req.params.id);

    if (!material) {
        return res.status(500).json({
            success: false,
            message: "Material not Found"
        });
    }
    material = await Material.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        material,
    });

}


exports.deleteMaterial = async (req, res, next) => {

    // req.body.student=req.student.id
    console.log(res.params)
    const material = await Material.findById(req.params.id);
   

    if (!material) {
        return next(new ErrorHandler("Item not found ", 404));
    }

    // ==========================================================================

    // another trick to delete one record

    await material.deleteOne({_id:req.params.id});

    //   ===========================================================================

    // await Item.findOneAndDelete();

    res.status(200).json({
        success: true,
        message: "Material delete successfully",
    });
};