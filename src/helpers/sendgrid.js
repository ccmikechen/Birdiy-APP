const ENDPOINT = 'https://api.sendgrid.com/v3/mail/send';

class SendGrid {
  apikey = '';

  setApiKey(apikey) {
    this.apikey = apikey;
  }

  send(mail) {
    const body = {
      personalizations: [{
        to: [{
          email: mail.to,
        }],
      }],
      from: {
        email: mail.from,
      },
      subject: mail.subject,
      content: [{
        type: 'text/plain',
        value: mail.text,
      }],
    };

    return fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apikey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }
}

export default new SendGrid();
