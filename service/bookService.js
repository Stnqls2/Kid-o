const pool = require("../config/db");

exports.bookinfo = async (data) => {

    const conn = await pool.getConnection();
     try {
        let sql = "insert into book(bookname, author) values (?, ?) "
        await conn.query (sql, [data.bookname, data.author]);
        return true

     } catch(err) {
        console.log (err)
        return err


     } finally {

        conn.release();
     }

}

exports.list = async () => {
    
    const conn = await pool.getConnection();
    try { 
        let sql = "select * from book";
        let [result] = await conn.query(sql);
        
        
        return result;

    } catch(err) {
        console.log(err);
       return err;
    } finally {
        conn.release();

    }

}