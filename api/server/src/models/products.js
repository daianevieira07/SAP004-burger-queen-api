'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    item_id: DataTypes.STRING,
    item_name: DataTypes.STRING,
    item_price: DataTypes.STRING,
    breakfast: DataTypes.BOOLEAN,
    adds: DataTypes.STRING
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};