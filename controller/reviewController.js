const db=require('../models')

/// create main model
const review = db.reviews;

///create product//

const addRating = async(req,res)=>{
    let info = {
        rating  :req.body.rating,
    
        description  :req.body.description
    }

    const pro = await review.create(info)
    res.status(200).send(pro); 
   

}

///get All Product

const getAllRatings = async (req,res)=>{
    let products = await review.findAll({
        
    });


    res.status(200).send(products);
  
   
}

module.exports ={
    addRating,
    getAllRatings
    
}



