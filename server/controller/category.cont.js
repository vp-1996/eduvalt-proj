import categoryModel from "../models/category.model";
import Category from "../models/category.model";

export const addCategory = (req, res) => {

    try {
        const { name } = req.body;
        console.log(req.body);
        const data = new Category({ name: name });

        const saveData = data.save()

        //   const token = JWT.sign(
        //    {name},process.env.JWT_SECRET,{expiresIn:"2d"}
        //   )

        if (data) {
            res.status(200).json({
                success: true,
                //  token,
                data: data,
                message: 'Successfully Category Created !!!'
            })
        }

    }

    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//////////GET ALL CAT///////////

export const getAllCategories = async (req, res) => {

    try {
        let data = await Category.find({})

        res.status(200).json({
            success: true,
            data: data,
            message: "All categories fetched successfully"
        })

    }

    catch (error) {
        res.status(400).json({
            success: false,
            message: "Error in fetching Categories"
        })
    }
}

//////////////Get Single Categories////////////

export const getSingleCategory = async (req, res) => {

    try {
        // const { catID } = req.query;
        const catID = req.params.categoryID
        // console.log("131",catID);
        const category = await Category.findById(catID);
        // console.log("191",category);

        res.status(200).json({
            success: true,
            message: "Single Category ",
            category: category
        })

    }

    catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Error while fetching category"
        })
    }
}

///////////Edit Category///////////////

export const updateCategory = async (req, res) => {

    try {
        const catID = req.params.cat_id;
        const { name } = req.body;
        const editCategory = await Category.updateOne({ _id: catID }, { $set: { name: name } });

        if (editCategory.acknowledged) {
            res.status(200).json({
                message: 'Category Update Success'
            })
        }

    }

    catch (error) {
        res.status(400).json({
            message: "Error in updating Category"
        })
    }

}

/////////Delete Category/////////////

export const deleteCategory = async (req, res) => {

    try {
        let catID = req.params.cat_id
        let existingCategory = await Category.findOne({ _id: catID })
        if (!existingCategory) {
           return res.status(400).json({
            message: "Category Does not exist"
        }) 
        }
        let deleteData = await Category.deleteOne({_id:catID})

        if (deleteData.acknowledged) {
            
            res.status(200).json({
                message: "Category Deleted Sucessfully"
            })
        }

    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
      }