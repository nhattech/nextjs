import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  const { title, image, address, description } = props.meetup;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail
        title={title}
        image={image}
        address={address}
        description={description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const connect = await MongoClient.connect(
    'mongodb+srv://root:root@cluster0.mvfd5ef.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = connect.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  connect.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const connect = await MongoClient.connect(
    'mongodb+srv://root:root@cluster0.mvfd5ef.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = connect.db();
  const meetupCollection = db.collection('meetups');
  const meetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  connect.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetails;
