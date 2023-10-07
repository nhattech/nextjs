import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
  function addMeetupHandler(enteredMeetup) {
    console.log(enteredMeetup);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
