const passwordResetTemplate = (name, resetLink) => {
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
        Reset Your Password
      </h2>

      <p>
        Hello <strong>${name}</strong>,
      </p>

      <p style="line-height:1.8;">
        We received a request to reset the password for your Job Bee account.
      </p>

      <p style="line-height:1.8;">
        Click the button below to create a new password and regain access to your account.
      </p>

      <div style="
        text-align:center;
        margin:35px 0;
      ">
        <a
          href="${resetLink}"
          style="
            background:#ef4444;
            color:white;
            text-decoration:none;
            padding:14px 28px;
            border-radius:8px;
            font-weight:bold;
            display:inline-block;
          "
        >
          Reset Password
        </a>
      </div>

      <p style="line-height:1.8;">
        If the button above doesn't work, copy and paste the following link into your browser:
      </p>

      <p style="
        word-break:break-all;
        color:#2563eb;
      ">
        ${resetLink}
      </p>

      <p style="
        color:#dc2626;
        font-size:14px;
        font-weight:bold;
      ">
        This password reset link will expire shortly for security reasons.
      </p>

      <p style="line-height:1.8;">
        If you did not request a password reset, please ignore this email.
        Your password will remain unchanged.
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

module.exports = passwordResetTemplate;