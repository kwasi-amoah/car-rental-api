import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { carId, quantity = 1 } = req.body;

    if (!carId) {
      return res.status(400).json({ error: "Car ID is required" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // No cart yet – create one with the item
      cart = await Cart.create({
        userId,
        items: [{ carId, quantity }],
      });
      return res.status(201).json(cart);
    }

    // Check if car already exists in cart
    const existingItem = cart.items.find(item => item.carId.toString() === carId);

    if (existingItem) {
      return res.status(409).json({ error: "Car already in cart" });
    }

    // Add new item to the cart
    cart.items.push({ carId, quantity });
    await cart.save();

    res.status(200).json(cart);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

