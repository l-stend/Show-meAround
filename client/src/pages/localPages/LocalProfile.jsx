import React from 'react';
import { useSelector } from 'react-redux';

const LocalProfile = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  return (
    <section>
      <h2>LocalProfile</h2>
      <form action=''>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' />
        <label htmlFor='surname'>Surname</label>
        <input type='text' name='surname' />
        <label htmlFor='aboutMe'>About Me</label>
        <textarea id='textarea' name='aboutMe' rows='4' cols='50' />
      </form>
    </section>
  );
};

export default LocalProfile;
