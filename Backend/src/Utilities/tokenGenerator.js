const jwt = require("jsonwebtoken");
const refreshTokengenerator= async(id , role)=>{
    const refresh = await jwt.sign(
      {
        id,
        role
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
    return refresh;
};
const accessTokengenerator = async (id, role,email) => {
  const access = await jwt.sign(
    {
      id,
      role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
  return access;
};
module.exports = { refreshTokengenerator, accessTokengenerator };
