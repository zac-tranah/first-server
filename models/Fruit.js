const fruits = require("../fruits.json");

class Fruit {
  constructor({ genus, name, id, family, order, nutritions }) {
    this.genus = genus;
    this.name = name;
    this.id = id;
    this.family = family;
    this.order = order;
    this.nutritions = nutritions;
  }

  static showAll = () => {
    return fruits.map((fruit) => new Fruit(fruit));
  };

  static showOne = (name) => {
    const fruit = fruits.filter((fruit) => fruit.name.toLowerCase() == name);
    if (fruit.length == 1) {
      return new Fruit(fruit[0]);
    } else {
      throw Error("The fruit does not exist");
    }
  };

  static create = (data) => {
    const newFruit = data;
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() == newFruit.data.toLowerCase()
    );
    if (!updatedFruit) {
      newFruit["id"] = fruits.length + 1;
      fruits.push(newFruit);
      return new Fruit(newFruit);
    } else {
      throw Error("Fruit already exists");
    }
  };

  update(data) {
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() == this.name.toLowerCase()
    );

    if (updatedFruit) {
      updatedFruit.name = data.name;
      return new Fruit(updatedFruit);
    } else {
      throw new Error("Fruit not found");
    }
  }

  destroy() {
    // Find the index of the fruit in the underlying array
    const index = fruits.findIndex(
      (fruit) => fruit.name.toLowerCase() == this.name.toLowerCase()
    );

    if (index > -1) {
      // Remove the fruit from the array and return the deleted fruit
      const deletedFruit = fruits.splice(index, 1)[0];
      // Return the deleted fruit as a Fruit instance
      // Could also write: const [deletedFruit] = fruits.splice(index, 1)
      return new Fruit(deletedFruit);
    } else {
      throw new Error("Fruit not found");
    }
  }
}

module.exports = Fruit;
