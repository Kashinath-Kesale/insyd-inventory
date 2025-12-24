const InventoryItem = require('../models/InventoryItem');

// adding new item

const addItem = async(req, res) => {
    try{
        const {name, quantity, minThreshold} = req.body;
        if(!name || quantity == null || minThreshold == null) {
            return res.status(400).json({message: 'all fields are required'});
        }

        const newItem = new InventoryItem({name, quantity, minThreshold, lastUpdated: new Date()});
        const ItemSaved = await newItem.save();
        res.status(201).json(ItemSaved);
    }
    catch(err){
        res.status(500).json({message: 'failed to add item'});
    }
};

// get items

const getItems = async(req, res) => {
    try{
        const items = await InventoryItem.find();
        res.status(200).json(items);
    }
    catch(err){
        res.status(500).json({messsage:'failes to fetch items'})
    }
}

// update
const updateItem = async(req,res) =>{
    try{
        const{ id } = req.params;
        const { quantity, minThreshold } = req.body;

        const item = await InventoryItem.findById(id);
        if(!item) return res.status(404).json({message: 'item not found'});

        if(quantity != null) item.quantity = quantity;
        if(minThreshold != null) item.minThreshold = minThreshold;
        item.lastUpdated = new Date();

        const itemUpdated = await item.save();
        res.status(200).json(itemUpdated);
    }
    catch(err){
        res.status(500).json({message: 'failed to update item'});
    }
}

// get low stock items
const getLowStock = async(req, res)=> {
    try{
        const lowStockItems = await InventoryItem.find({
            $expr: {
                $lt: ['$quantity', '$minThreshold']
            }
        })
        res.status(200).json(lowStockItems);
    }
    catch(err){
        res.status(500).json({message:'failed to fetch low stock items'});
    }
};


module.exports = {addItem, getItems, updateItem, getLowStock};