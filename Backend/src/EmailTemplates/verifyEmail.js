const verifyEmailTemplate = ({fullName, verificationLink}) => {
  return `
  <div style="
    max-width:600px;
    margin:0 auto;
    background:#ffffff;
    border:1px solid #e5e7eb;
    border-radius:12px;
    overflow:hidden;
    font-family:Arial, sans-serif;
  ">

    <div style="
      background:#f59e0b;
      padding:25px;
      text-align:center;
    ">
      <h1 style="
        color:white;
        margin:0;
        font-size:30px;
      ">
        🐝 Job Bee
      </h1>
    </div>

    <div style="
      padding:35px;
      color:#374151;
    ">

      <h2 style="
        margin-top:0;
        color:#111827;
      ">
        Verify Your Email Address
      </h2>

      <p>
        Hello <strong>${fullName}</strong>,
      </p>

      <p style="line-height:1.8;">
        Welcome to <strong>Job Bee</strong>! We're excited to have you join our community.
      </p>

      <p style="line-height:1.8;">
        Before getting started, please verify your email address to activate your account.
      </p>

      <div style="
        text-align:center;
        margin:35px 0;
      ">
        <a
          href="${verificationLink}"
          style="
            background:#f59e0b;
            color:white;
            text-decoration:none;
            padding:14px 28px;
            border-radius:8px;
            font-weight:bold;
            display:inline-block;
          "
        >
          Verify Email
        </a>
      </div>

      <p style="line-height:1.8;">
        If the button above doesn't work, copy and paste the following link into your browser:
      </p>

      <p style="
        word-break:break-all;
        color:#2563eb;
      ">
        ${verificationLink}
      </p>

      <p style="
        color:#dc2626;
        font-size:14px;
      ">
        This verification link may expire after a certain period for security reasons.
      </p>

      <p>
        If you did not create a Job Bee account, you can safely ignore this email.
      </p>

      <p>
        Best Regards,
      </p>

      <p>
        <strong>Team Job Bee 🐝</strong>
      </p>

    </div>

    <div style="
      background:#f9fafb;
      padding:18px;
      text-align:center;
      border-top:1px solid #e5e7eb;
    ">
      <p style="
        margin:0;
        font-size:12px;
        color:#6b7280;
      ">
        © 2025 Job Bee. All rights reserved.
      </p>
    </div>

  </div>
  `;
};

module.exports = verifyEmailTemplate;
