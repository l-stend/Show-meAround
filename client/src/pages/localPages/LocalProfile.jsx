import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { addUserToLocalStorage } from '../../utils/localStorage';
import { storage } from '../../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import '../pages-style/LocalProfileStyle.css';

const LocalProfile = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  console.log(user?.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updates = {
      name: e.target.name.value,
      email: user.email,
      lastName: e.target.surname.value,
      aboutMe: e.target.aboutMe.value,
    };

    addUserToLocalStorage({ ...user, ...updates });
    dispatch(updateUser(updates));
    navigate('/');
  };

  const uploadImage = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `userImages/${user.email}/avatar.png`);
    uploadBytes(imageRef, imageUpload)
      .then(() => console.log('img uploaded'))
      .catch((e) => console.log(e));
  };

  return (
    <section>
      <h2 className='text-center' style={{ marginTop: '3vh' }}>
        Update your Profile
      </h2>
      <form className='profile-form' onSubmit={handleSubmit}>
        <label className='profile-input' htmlFor='name'>
          Name
        </label>
        <input className='profile-input' type='text' name='name' />
        <label className='profile-input' htmlFor='surname'>
          Surname
        </label>
        <input className='profile-input' type='text' name='surname' />
        <label className='profile-input' htmlFor='aboutMe'>
          About Me
        </label>
        <textarea
          className='profile-input'
          id='textarea'
          name='aboutMe'
          rows='4'
          cols='50'
        />

        <button className='profile-input profile-input-btn' type='submit'>
          submit
        </button>
        <div style={{ paddingTop: '2vh' }}>
          <label className='profile-input' htmlFor='img'>
            Profile Image
          </label>
          <input
            type='file'
            name='img'
            onChange={(e) => setImageUpload(e.target.files[0])}
            className='profile-input'
          />
          <button className='profile-input' onClick={uploadImage}>
            Update image
          </button>
        </div>
      </form>
    </section>
  );
};

export default LocalProfile;
