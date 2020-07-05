
import Item from '../models/item.model'

// get all  items that have the same name
let getItem = async function (req, res) {
    let { name } = req.params
    let itemFromDb = await Item.find({ name }).exec()
    res.json(itemFromDb)
}

//create item by the mongoose Schama and add it to item colllections in store DB
let addItem = async function (req, res) {
    let { name, price, location } = req.body
    let isItem;
    try {
        let itemToAdd = new Item({ name, price, location })
        await itemToAdd.save()
        res.send('Product Created successfully' + itemToAdd)

    } catch (error) {
        res.json(error)
    }

}

// find an item and change it by the location it take from body
let editItem = async function (req, res) {
    // let location = 'Israel'
    let { name } = req.params
    let { location } = req.body
    try {
        let itemToEdit = await Item.findOneAndUpdate({ name }, { location })
        console.log(itemToEdit)
        if (!itemToEdit) res.json({ message: "There is no such OBj in DB" })
        // if(!itemToEdit) res.json()
        itemToEdit.save()
        res.json("thnx for UPDATE ")

    } catch (error) {
        res.json(error)
    }
}

//remvoe an item by its name
let removeItem = async function (req, res) {
    let { name } = req.params
    try {
        let itemToRemove = await Item.deleteOne({ name })
        console.log(itemToRemove)
        if (!itemToRemove.n) res.send('This item does not exitst in DB')
        else res.send('item was REMOVED')
    } catch (error) {
        res.json(error)
    }
}

//get all items that their prices are bigger than in req.params
let getItemByPrice = async function (req, res) {
    let { price } = req.params
    let items
    try {
        items = await Item.find({ price: { $gte: Number(price) } })
        res.json(items)

    } catch (error) {
        res.json(error)
    }
}

export default { addItem, getItem, editItem, removeItem, getItemByPrice }