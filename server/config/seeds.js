const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Funko", image:"https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" },
    { name: "Figurines", image:"https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" },
    { name: "Plushies", image:"https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" },
    { name: "Posters", image:"https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" },
    { name: "On Sale", image:"https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Deku Funko",
      description:
        'Class is in session! Add Deku to your POP! collection *Product Dimensions	8"L x 6"W x 4"H',
      image: "https://m.media-amazon.com/images/I/514LP87FJXL._AC_SX466_.jpg",
      category: categories[0]._id,
      price: 12.99,
      quantity: 50,
    },
    {
      name: "Pikachu Funko (Firmin Exclusive!)",
      description:
        'Pika Pika! Add some shock value to your collection with this special edition Funko! *Product Dimensions	8"L x 6"W x 4"H',
      image: "https://m.media-amazon.com/images/I/61vX0KugfQL._AC_SX466_.jpg",
      category: categories[0]._id,
      price: 35.99,
      quantity: 10,
    },
    {
      name: "Samurai Brook Funko",
      category: categories[0]._id,
      description:
        'Bring home your favorite skeleton dawning a set of samurai armor! *Product Dimensions	8"L x 6"W x 4"H',
      image: "https://m.media-amazon.com/images/I/61NHi36YB0L._AC_SX466_.jpg",
      price: 49.99,
      quantity: 5,
    },
    {
      name: "All Might Figurine",
      category: categories[1]._id,
      description: ' 10" All Might Anime Manga Figurine - My Hero Academia.',
      image: "https://m.media-amazon.com/images/I/518-2L9IgKL.jpg",
      price: 25.99,
      quantity: 50,
    },
    {
      name: "Kyojuro Rengoku Figurine",
      category: categories[1]._id,
      description:
        "Flame Hashira Swordsman Statue Toy Gfit Collectible Manga Figure - Demon Slayer: Kimetsu no Yaiba",
      image: "https://m.media-amazon.com/images/I/71q6yR+C3ML._AC_SX466_.jpg",
      price: 19.99,
      quantity: 100,
    },
    {
      name: "Power Plush Doll",
      category: categories[2]._id,
      description: "Power plush toy - Chainsaw Man",
      image: "https://m.media-amazon.com/images/I/31O1MtzKPSL._AC_SX466_.jpg",
      price: 24.99,
      quantity: 30,
    },
    {
      name: "Gojo Satoru Doll",
      category: categories[2]._id,
      description: "Gojo Satoru Soft Plushie - Jujutsu Kaisen",
      image: "https://m.media-amazon.com/images/I/5156GfE1OlS._AC_SX466_.jpg",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "Catana",
      category: categories[3]._id,
      description: 'Product Dimensions	12" x 16"',
      image:
        "https://cdn.shopify.com/s/files/1/0082/5619/2602/products/vincent-trinidad-catana_01_33693eb2-31e7-4363-a0e8-d212536fe5fa_600x.jpg?v=1668174129",
      price: 39.99,
      quantity: 20,
    },
    {
      name: "Kitsune",
      category: categories[3]._id,
      description: 'Product Dimensions 12" x 16"',
      image:
        "https://cdn.shopify.com/s/files/1/0082/5619/2602/products/forbes_08_600x.jpg?v=1640702361",
      price: 39.99,
      quantity: 20,
    },
    {
      name: "Yuji Itadori Doll",
      category: categories[4]._id,
      description: "Yuji Itadori Soft Plushie - Jujutsu Kaisen",
      image: "https://m.media-amazon.com/images/I/51Bas2LBEeS._AC_SX466_.jpg",
      price: 12.99,
      quantity: 30,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Test",
    lastName: "User",
    email: "testinguser@gmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Tyler",
    lastName: "Testing",
    email: "tylertest@testing.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
