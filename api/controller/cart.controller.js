import Cart from '../models/cart.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {

const { slug, title, brand, disprice, price, content, userId, quantity, category, image } = req.body;

const newCart = new Cart({
    slug:slug,
    title:title,
    brand:brand,
    disprice:disprice,
    price:price,
    content:content,
    userId:userId,
    quantity:quantity,
    category:category,
    image:image,
  });
  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart); 
  } catch (error) {
    next(error);
  }
  
};

export const getcarts = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    let sortField = 'createdAt'; // Default sort field
    let sortOrder = -1; // Default sort order (descending)

    // Determine sort field and order based on query parameter
    if (req.query.sort === 'asc') {
      sortField = 'price'; // Sort by price ascending
      sortOrder = 1;
    } else if (req.query.sort === 'dsc') {
      sortField = 'price'; // Sort by price descending
      sortOrder = -1;
    }
    const carts = await Cart.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.cartId && { _id: req.query.cartId }),
      ...(req.query.price && { price: req.query.price }),
      ...(req.query.disprice && { disprice: req.query.disprice }),
      ...(req.query.quantity && { quantity: req.query.quantity }),
      ...(req.query.brand && { brand: req.query.brand }),

      ...(req.query.searchTerm && {
        $or: [
          { brand: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
          { category: { $regex: req.query.searchTerm, $options: 'i' } },
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ [sortField]: sortOrder })
      .skip(startIndex)
      .limit(limit);

    const totalcarts = await Cart.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthcarts = await Cart.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      carts,
      totalcarts,
        lastMonthcarts,
    });
  } catch (error) {
    next(error);
  }
};

export const deletecart = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this shop'));
  }
  try {
    await Cart.findByIdAndDelete(req.params.cartId);
    res.status(200).json('The cart has been deleted');
  } catch (error) {
    next(error);
  }
};
