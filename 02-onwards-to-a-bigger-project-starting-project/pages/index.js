import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'first meetup',
    image:
      'https://cdn.tgdd.vn/Products/Images/44/301634/hp-15s-fq2716tu-i3-7c0x3pa-thumb-600x600.jpg',
    address: 'some address 5, 12345, city',
    description: 'Some description',
  },
  {
    id: 'm2',
    title: 'second meetup',
    image:
      'https://cdn.tgdd.vn/Products/Images/44/301634/hp-15s-fq2716tu-i3-7c0x3pa-thumb-600x600.jpg',
    address: 'some address 10, 12345, city',
    description: 'Some description 2',
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
