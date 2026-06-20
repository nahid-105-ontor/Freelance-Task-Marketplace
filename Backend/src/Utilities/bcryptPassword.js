const bcrypt = require("bcrypt");
const hashPassword = async(password)=>{
    const hashedPassword=await bcrypt.hash(password,10);
    return hashedPassword;
};

const comparePassword = async (givenPassword, savedPassword) => {
  const compare = await bcrypt.compare(givenPassword, savedPassword);
  return compare;
};
module.exports={hashPassword,comparePassword};
