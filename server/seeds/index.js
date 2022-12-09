const dotenv = require('dotenv').config();
const userSeeds = require ('./seeds/users-seeds.js');
const productSeeds = require ('./seeds/products-seeds.js');
const userModel = require ('./seeds/User.js');
const productModel = require ('./seeds/Product.js');



const connectDB = require ('./config/db.js');

dotenv.config();

connectDB();

const importData = async () => {
  try {
   
 
    await productModel.deleteMany();
    await userModel.deleteMany();

   
    const createdUsers = await userModel.insertMany(userSeeds);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = productSeeds.map((item) => ({
      ...item,
      user: adminUser,
    }));

    await productModel.insertMany(sampleProducts);

    console.log('Data imported!');
    process.exit();
  } catch (error) {
    console.error(`Error importing: ${error}`);
    process.exit(1);
  }
};

const purgeData = async () => {
  try {
    
    await productModel.deleteMany();
    await userModel.deleteMany();

    console.log('Data pruged!');
    process.exit();
  } catch (error) {
    console.error(`Error purging: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d' || process.argv[2] === '-D') purgeData();
else importData();