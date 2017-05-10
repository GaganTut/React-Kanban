module.exports = function(sequelize, DataTypes) {
  let Card = sequelize.define("Card", {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priority: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Card.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false,
            name: 'createdBy'
          }
        });
        Card.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            name: 'assignedTo'
          }
        });
      }
    }
  });

  return Card;
};