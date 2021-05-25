function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email?.includes('@') ||
      name?.trim() === '' ||
      message?.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid data.' });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    // Store newMessage in database
    console.log(newMessage);
    return res.status(201).json({ message: 'Message successfully stored.' });
  }
}

export default handler;
