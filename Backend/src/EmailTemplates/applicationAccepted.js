const applicationAcceptedTemplate = (applicantName, jobTitle, nextStepLink) => {
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
        Congratulations! 🎉
      </h2>

      <p>
        Hello <strong>${applicantName}</strong>,
      </p>

      <p style="line-height:1.8;">
        Great news! Your application for the position has been <strong style="color:#16a34a;">accepted</strong>.
      </p>

      <p style="line-height:1.8;">
        <strong>Position:</strong> ${jobTitle}
      </p>

      <p style="line-height:1.8;">
        The employer was impressed with your profile and would like to move forward with the next steps.
      </p>

      <p style="line-height:1.8;">
        Please check your dashboard or contact the employer to continue the hiring process.
      </p>

      <div style="
        text-align:center;
        margin:35px 0;
      ">
        <a
          href="${nextStepLink}"
          style="
            background:#16a34a;
            color:white;
            text-decoration:none;
            padding:14px 28px;
            border-radius:8px;
            font-weight:bold;
            display:inline-block;
          "
        >
          View Next Steps
        </a>
      </div>

      <p style="line-height:1.8;">
        Keep up the great work — this is a big step forward in your career journey.
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

module.exports = applicationAcceptedTemplate;
