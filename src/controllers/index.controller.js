const controller = {}
const connection = require ('../dbConnection/db')
 
controller.index = async (req, res)=> {
    try {
    const title = 'INDEX DESDE EL SERVIDOR CON PUG Y DESDE UNA VARIABLE'
    await connection ();
    console.log('CONEXION ESTABLECIDA')
    res.render('index', {title})
    }catch(err){
      console.error(err)
    }
}
 
module.exports = controller
