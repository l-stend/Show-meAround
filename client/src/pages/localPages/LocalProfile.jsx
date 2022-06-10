import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { addUserToLocalStorage } from '../../utils/localStorage';
import { storage } from '../../firebase';
import { ref, uploadBytes } from 'firebase/storage';

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

      <div>
        <label htmlFor='img'>Profile Image</label>
        <input
          type='file'
          name='img'
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <button onClick={uploadImage}>Update image</button>
      </div>
    </section>
  );
};

export default LocalProfile;
