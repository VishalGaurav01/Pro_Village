import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
//about
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
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Shop = mongoose.model('Shop', shopSchema);

export default Shop;