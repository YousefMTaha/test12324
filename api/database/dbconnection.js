import mysql from 'mysql2'
export const dbconnection =()=>{

     const conn=  mysql.createConnection('mysql://ujf3elh6brteiugc:DCGTSLrqKp2lmjjWUydA@bcqsvdvijimqp7z5yjzf-mysql.services.clever-cloud.com:3306/bcqsvdvijimqp7z5yjzf')

    conn.connect((err) =>{
        if (err) return console.log("database error");
        console.log("database connected successfully.")
    })

    return conn

}