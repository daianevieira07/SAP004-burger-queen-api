'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    atendent_name: DataTypes.STRING,
    client_name: DataTypes.STRING,
    table_number: DataTypes.STRING,
    items: DataTypes.STRING,
    quantity: DataTypes.STRING,
    order_total: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};