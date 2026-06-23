const welcomeEmail = require("../EmailTemplates/welcomeEmail");
const { transporter } = require("../Services/emailService");
const apiResponse = require("../Utilities/apiResponse");
const asyncHandler = require("../Utilities/asyncHandler");

const send = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { to, subject } = req.body;
  try {
    const info = await transporter.sendMail({
      from: `"noreply" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: welcomeEmail()
    });
    return res.status(200).json(new apiResponse(200, info, "Email Send"));
  } catch (error) {
    console.log(error);
  }
});
module.exports = send;
