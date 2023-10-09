import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      title="first meetup"
      image="https://cdn.tgdd.vn/Products/Images/44/301634/hp-15s-fq2716tu-i3-7c0x3pa-thumb-600x600.jpg"
      address="some address 5, 12345, city"
      description="Some descriptions"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  console.log(params.meetupId);

  return {
    props: {
      meetup: {
        title: 'first meetup',
        image:
          'https://cdn.tgdd.vn/Products/Images/44/301634/hp-15s-fq2716tu-i3-7c0x3pa-thumb-600x600.jpg',
        address: 'some address 5, 12345, city',
        description: 'Some descriptions',
      },
    },
  };
}
export default MeetupDetails;
