const Order = require("../models/Order");

module.exports = {
  getUserOrders: async (req, res) => {
    const userId = req.paarams.id;

    try {
      const userOrders = await Order.find({ userId })
        .populate({
          path: "productId",
          select: "-description -product_location",
        })
        .exec();

      res.status(200).json(userOrders);
    } catch (error) {
      res.status(200).json(error);
    }
  },
};
