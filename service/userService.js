const pool = require("../config/db");

exports.register = async(data) => {

   const conn =  await pool.getConnection();
    try {

        let sql = "insert into user(name, id, password) values(?, ?, ?)";
        await conn.query (sql, [data.name, data.id, data.password])
        return true
    } catch(err) {


        console.log(err)
        return err
    } finally{

        conn.release();
    }

}