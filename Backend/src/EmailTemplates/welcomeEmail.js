const welcomeEmail = () => {
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
        Welcome to Job Bee!
      </h2>

      <p>
        Hello <strong>${name}</strong>,
      </p>

      <p style="line-height:1.8;">
        Thank you for joining <strong>Job Bee</strong>.
        We're excited to have you as part of our growing community.
      </p>

      <p style="line-height:1.8;">
        You can now explore jobs, connect with talented freelancers,
        and start building your professional career.
      </p>

      <p style="line-height:1.8;">
        Whether you're looking for work or searching for the right talent,
        Job Bee is here to help you succeed.
      </p>

      <div style="
        text-align:center;
        margin:35px 0;
      ">
        <a
          href="${profileUrl}"
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
          Go To Your Profile
        </a>
      </div>

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
        © 2026 Job Bee. All rights reserved.
      </p>
    </div>

  </div>
 `;
};
module.exports = welcomeEmail;
