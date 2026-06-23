const applicationSubmittedTemplate = (
  applicantName,
  jobTitle,
  applicationLink
) => {
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
        Application Submitted Successfully
      </h2>

      <p>
        Hello <strong>${applicantName}</strong>,
      </p>

      <p style="line-height:1.8;">
        Great news! Your application has been successfully submitted.
      </p>

      <p style="line-height:1.8;">
        <strong>Position:</strong> ${jobTitle}
      </p>

      <p style="line-height:1.8;">
        The employer has received your application and may contact you if your profile matches their requirements.
      </p>

      <p style="line-height:1.8;">
        You can track the status of your application from your dashboard.
      </p>

      <div style="
        text-align:center;
        margin:35px 0;
      ">
        <a
          href="${applicationLink}"
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
          View Application
        </a>
      </div>

      <p>
        Thank you for using Job Bee and best of luck with your application!
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

module.exports = applicationSubmittedTemplate;
