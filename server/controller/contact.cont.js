import contactModel from "../models/contact.model";

export const sendMessage = (req, res) => {
    try {   
       
        const { name, email, phone, subject, message } = req.body

        const data = new contactModel({ name: name, email: email, phone: phone, subject: subject, message: message })
      //  console.log(data);  

         let saveData = data.save()

        if (data) {
            console.log(data);
            res.status(200).json({
                success: true,
                //  token,
                data: data,
                message: 'Successfully Message Sent !!!'
            })
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}