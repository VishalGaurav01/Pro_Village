import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    aadhar: {
      type: Number,
      required: true,
      unique: true,
    },
    ifsc: {
      type: String,
      required: true,
      unique:true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    //city
    city: {
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
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
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

const Post = mongoose.model('Post', postSchema);

export default Post;