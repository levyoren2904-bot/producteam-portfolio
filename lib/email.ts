import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, company, projectType, message } = data;
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .header { border-bottom: 2px solid #EA3E3E; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { margin: 0; font-size: 24px; color: #0B0E11; }
          .field { margin-bottom: 20px; }
          .label { font-weight: 600; color: #5A6778; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { color: #0B0E11; font-size: 16px; }
          .message-box { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #8B9AAB; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Project Inquiry</h1>
          </div>
          
          <div class="field">
            <div class="label">From</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </div>
          
          ${company ? `
          <div class="field">
            <div class="label">Company</div>
            <div class="value">${company}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Project Type</div>
            <div class="value">${projectType}</div>
          </div>
          
          <div class="message-box">
            <div class="label">Message</div>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="footer">
            This message was sent from your portfolio website contact form.
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@example.com',
      replyTo: email,
      subject: `New Project Inquiry from ${name}${company ? ` at ${company}` : ''}`,
      html: htmlContent,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}
