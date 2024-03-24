import adminModel from "../models/admin.model";
import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const registerAdmin = async (req, res) => {

    try {
        const { email, password } = req.body
        const existingAdmin = await adminModel.findOne({ email })

        if (existingAdmin) {
            return res.status(400).send({
                success: false,
                message: "Admin already exist"
            })
        }

        /// For New Admin

        let hashedPass = await bcrypt.hash(password, 10)

        let adminData = new adminModel({ email, password: hashedPass })

        const save = adminData.save()

        res.status(200).json({
            success: true,
            message: "Admin Sucessfully Registered"
        })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "error in Reg"
        })
    }
}


export const adminLogin = async (req, res) => {

    try {
        const { email, password } = req.body

        const admin = await adminModel.findOne({ email })

        if (!admin) {
            return res.status(400).send({
                success: false,
                message: "Email is not registered/Invalid"
            })
        }

        const match = await bcrypt.compare(password, admin.password)

        if (!match) {
            return res.status(400).send({
                success: false,
                message: "Invalid Passsword"
            })
        }

        let token = JWT.sign(
            { _id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" }
        )

        res.status(200).send({
            success: true,
            message: "login successful",
            admin: {
                _id: admin._id,
                email: admin.email
                // role:user.role
            },
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
        })
    }

}



