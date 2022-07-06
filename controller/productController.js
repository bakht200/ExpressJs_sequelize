const db=require('../models')

/// create main model

const product = db.products;
const review = db.review;

///create product//


const addProduct = async(req,res)=>{
    let info = {
        title  :req.body.title,
        price  :req.body.price,
        description  :req.body.description,
        published : req.body.published?req.body.published:false,
    }

    const pro = await product.create(info)
    res.status(200).send(pro); 
   

}

//get Specific Attributes Products///
const getSpecific = async (req,res)=>{
    let products = await product.findAll({
        attributes :[
            'title',
            'price'
        ]
    });


    res.status(200).send(products);
  
   
}
///get All Product

const getAllProducts = async (req,res)=>{
    let products = await product.findAll({
        
    });


    res.status(200).send(products);
  
   
}

//get One Products///
const getOneProduct = async (req,res)=>{
    let id = req.params.id;
    let products = await product.findOne({where:{id:id}})
    res.status(200).send(products)
}


////Update products//
const updateProduct = async (req,res)=>{
    let id = req.params.id;
    const products = await product.update(req.body,{where :{id:id}});
      res.status(200).send("Updated")
}



////Delete product//
const deleteProduct = async (req,res)=>{
    let id = req.params.id;
    const products = await product.destroy({
  where: {
    id: id
}})
      res.status(200).send('product is deleted')
}

module.exports ={
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getSpecific
}



