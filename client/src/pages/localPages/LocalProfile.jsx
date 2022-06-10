import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const LocalProfile = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log('nice try idiot');
    e.preventDefault();
    const updates = {
      // name: e.target.name.value,
      email: user.email,
      lastName: e.target.surname.value,
      aboutMe: e.target.aboutMe.value,
    };

    dispatch(updateUser(updates));
    navigate('/');
  };
  console.log(user);
  return (
    <section>
      <h2>LocalProfile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' />
        <label htmlFor='surname'>Surname</label>
        <input type='text' name='surname' />
        <label htmlFor='aboutMe'>About Me</label>
        <textarea id='textarea' name='aboutMe' rows='4' cols='50' />
        <button type='submit'>submit</button>
      </form>
    </section>
  );
};

export default LocalProfile;
