import { MongoClient } from 'mongodb';

async function hanler(req, res) {
  const method = req.method;

  if (method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;
    const newMeetup = {
      title: title || 'no data',
      image: image || 'no data',
      address: address || 'no data',
      description: description || 'no data',
    };

    const connect = await MongoClient.connect(
      'mongodb+srv://root:root@cluster0.mvfd5ef.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = connect.db();
    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.insertOne(newMeetup);

    // console.log(result);

    connect.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default hanler;
