const applicationRejectedTemplate = (applicantName, jobTitle, jobLink) => {
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

    <!-- Header -->
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

    <!-- Body -->
    <div style="
      padding:35px;
      color:#374151;
    ">

      <h2 style="
        margin-top:0;
        color:#111827;
      ">
        Application Update
      </h2>

      <p>
        Hello <strong>${applicantName}</strong>,
      </p>

      <p style="line-height:1.8;">
        Thank you for taking the time to apply for the position.
      </p>

      <p style="line-height:1.8;">
        <strong>Position:</strong> ${jobTitle}
      </p>

      <p style="line-height:1.8; color:#dc2626; font-weight:bold;">
        We regret to inform you that your application was not selected for this role.
      </p>

      <p style="line-height:1.8;">
        This decision does not define your skills or potential. We encourage you to keep applying,
        as new opportunities are posted regularly on Job Bee.
      </p>

      <div style="
        text-align:center;
        margin:35px 0;
      ">
        <a
          href="${jobLink}"
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
          Explore More Jobs
        </a>
      </div>

      <p>
        Keep building your profile and stay active — your next opportunity is just around the corner.
      </p>

      <p>
        Best Regards,
      </p>

      <p>
        <strong>Team Job Bee 🐝</strong>
      </p>

    </div>

    <!-- Footer -->
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

module.exports = applicationRejectedTemplate;
