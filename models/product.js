const fs = require('fs');
const path = require('path');
const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
    try {
      const fileContent = fs.readFileSync(p);
      const products = JSON.parse(fileContent);
      products.push(this);
      fs.writeFileSync(p, JSON.stringify(products));
    } catch (err) {
      console.error(err);
    }
  }

  static fetchAll(cb) {
    const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
    try {
      const fileContent = fs.readFileSync(p);
      cb(JSON.parse(fileContent));
    } catch (err) {
      cb([]);
    }
  }
};
