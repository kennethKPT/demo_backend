const db = require("../util/mysql-db");

module.exports = class Menu {
  constructor(id, name, desc, price) {
    this.menu_id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO product (name, price, `desc`, price)" + " VALUES (?, ?, ?)",
      [this.name, this.desc, this.price]
    );
  }

  static deleteById() {}

  static fetchAll() {
    return db.query("SELECT * FROM menu");
  }

  static findById(id) {
    return db.query("SELECT * FROM menu WHERE menu_id = ?", [id]);
  }
};
