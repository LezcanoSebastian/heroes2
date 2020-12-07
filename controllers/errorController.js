module.exports = {
    fallo: (req,res)=>{
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
    }
}