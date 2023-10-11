import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';
import Head from 'next/head';

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetup) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enteredMeetup),
    });

    // console.log(response);
    const data = await response.json();
    // console.log(data);

    router.push('/');
  }
  return (
    <Fragment>
      <Head>
        <title>New meetup</title>
        <meta name="description" content="Create new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetup;
