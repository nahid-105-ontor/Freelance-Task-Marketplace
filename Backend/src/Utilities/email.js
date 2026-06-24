const verifySuccess = require("../EmailTemplates/verifySuccess");
const verifyEmail = require("../EmailTemplates/verifyEmail");
const welcomeEmail = require("../EmailTemplates/welcomeEmail");
const { transporter } = require("../Services/emailService")

const sendWelcomeEmail = async ({ to, subject, fullName, dashboardUrl }) => {
  try {
    const info = await transporter.sendMail({
      from: `"noreply" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: welcomeEmail({ fullName:fullName, dashboardUrl:dashboardUrl }),
    });
    return info;
  } catch (error) {
    console.error("Welcome email send failed:", error);
    throw error;
  }
};

const sendVerificationEmail = async({to,subject,fullName,verificationLink})=>{
  try{
    const info = await transporter.sendMail({
      from: `"noreply" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html:verifyEmail({fullName:fullName,verificationLink:verificationLink})
    });
    return info;
  }
  catch(error){
        console.error("Welcome email send failed:", error);
        throw error;
  }
}

const successVerificationEmail = async({to,subject,fullName})=>{
    try {
      const info = await transporter.sendMail({
        from: `"noreply" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html: verifySuccess({fullName:fullName})
      });
      return info;
    } catch (error) {
      console.error("Welcome email send failed:", error);
      throw error;
    }
}



module.exports = {
  sendWelcomeEmail,
  sendVerificationEmail,
  successVerificationEmail,
};