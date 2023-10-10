import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const connect = await MongoClient.connect(
    'mongodb+srv://root:root@cluster0.mvfd5ef.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = connect.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();

  connect.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
