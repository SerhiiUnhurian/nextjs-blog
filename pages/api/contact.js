import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
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
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Connecting to the database failed.' });
    }

    try {
      await insertDocument(client, 'contact-messages', newMessage);
    } catch (error) {
      client.close();
      return res
        .status(500)
        .json({ message: 'Inserting data to the database failed.' });
    }

    client.close();
    return res.status(201).json({ message: 'Message successfully stored.' });
  }
}

export default handler;
