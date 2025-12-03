const Fruit = require("../models/Fruit")

// ! INDEX
const index = async (req, res) => {
    try {
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    } catch (err) {
        res.status(500).send({"error": "Server error"})
    }


}

// ! SHOW
const show = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        res.status(200).send(fruit)
    } catch (err) {
        res.status(404).send({"error": "Fruit not found"})
    }
}

// ! CREATE
const create = async (req, res) => {
    try {
        const fruitData = req.body
        const newFruit = await Fruit.create(fruitData)
        res.status(201).send(newFruit)
    } catch (err) {
        res.status(409).send(("No fruit for you"))
    }
}

// ! UPDATE
const update = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)

        const result = await fruit.update(req.body)
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send("No fruit with that name found")
    }
}

// ! DELETE
const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        const deletedFruit = await fruit.destroy()
        res.status(200).send(deletedFruit)
    } catch (err) {
        res.status(404).send("No fruit with that name found")
    }
}


module.exports = {
    index, show, create, update, destroy
}