import { dbconnection } from "../database/dbconnection.js"
import bycryptjs from 'bcryptjs'

const connection =dbconnection()

export const checkEmailExist = (req, res, next) => {

      connection.execute(`select email from customers where email ='${req.body.email}'`, (err,data) => {

         if(data.length != 0) return res.status(409).json({message:"email is already exist please try another email."})
            req.body.password = bycryptjs.hashSync(req.body.password,8)

         next()
      })

}




