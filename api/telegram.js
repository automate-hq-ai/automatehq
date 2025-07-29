// Serverless function for sending Telegram messages
// Deploy this to Vercel or Netlify

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, companyName, jobTitle, automationAreas, timeline, additionalInfo } = req.body;

    const TELEGRAM_BOT_TOKEN = '7797972407:AAFrmedp3vB2YxyuiP7Sj5ucTNDYcLjF8qQ';
    const TELEGRAM_CHAT_ID = '-4917452577';

    const telegramMessage = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Company Name: ${companyName}
Job Title: ${jobTitle}
Automation Areas: ${automationAreas.join(', ')}
Timeline: ${timeline}
Additional Info: ${additionalInfo || 'N/A'}
    `.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      }
    );

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      const errorData = await response.text();
      console.error('Telegram API error:', response.status, errorData);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 