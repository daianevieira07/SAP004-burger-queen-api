'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    item_name: DataTypes.STRING,
    item_price: DataTypes.DECIMAL(10,2),
    breakfast: DataTypes.BOOLEAN,
    burger: DataTypes.BOOLEAN,
    adds: DataTypes.STRING
      }, {}),
      
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.Products_Order)
  };
  return Product;
};


