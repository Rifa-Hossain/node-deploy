const fs = require('fs');
const model = require('../model/product');
const Product = model.Product;

exports.getProduct = async(req,res)=>{

    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
    //res.sendStatus(404);
    //res.json(products)
    //res.sendFile('E:/Node/index.html');
};

exports.getAllProducts = async(req,res)=>{
    const products = await Product.find();
    res.json(products);
    //res.sendStatus(404);
    //res.json(products)
    //res.sendFile('E:/Node/index.html');
};

exports.createProduct = async(req,res)=>{
    const product = new Product(req.body);

    try{
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    }catch(err){
        res.status(400).json(err);
        console.log(err);
    }
    

    // On success, send back the created product document (savedProduct) 

};

exports.replaceProduct = async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findOneAndReplace({_id:id},req.body,{new:true});

    res.status(201).json(product);
};

exports.updateProduct = async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
    res.status(201).json(product);
};

exports.deleteProduct = async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findOneAndDelete({_id:id})
    res.status(201).json(product);
};
