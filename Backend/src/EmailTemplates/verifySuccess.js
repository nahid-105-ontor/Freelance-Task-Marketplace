const verifySuccess = ({ fullName }) => {
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
      background:#22c55e;
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
        🎉 Email Verified Successfully
      </h2>

      <p>
        Hello <strong>${fullName}</strong>,
      </p>

      <p style="line-height:1.8;">
        Great news! Your email address has been successfully verified.
        Your Job Bee account is now fully activated.
      </p>

      <p style="line-height:1.8;">
        You can now log in and start exploring opportunities, applying for jobs, and managing your profile.
      </p>

      <div style="
        text-align:center;
        margin:35px 0;
      ">
        <a
          href="https://your-frontend-url.com/login"
          style="
            background:#22c55e;
            color:white;
            text-decoration:none;
            padding:14px 28px;
            border-radius:8px;
            font-weight:bold;
            display:inline-block;
          "
        >
          Go to Login
        </a>
      </div>

      <p style="line-height:1.8;">
        If you did not perform this action, please contact our support team immediately.
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

module.exports = verifySuccess;
