import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    disprice: {
        type: Number,
        required: true,
      },
    //city
    brand: {
      type: String,
      required: true,
    },
    //name
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    quantity: {
        type: Number,
        required: true,
      },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;