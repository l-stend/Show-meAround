import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTour } from '../features/tours/toursSlice';
import uniqid from 'uniqid';

const HostDashboard = ({ tour }) => {
  const { user } = useSelector((store) => store.user);
  const [content, setContent] = useState('');
  const [dashArr, setDashArr] = useState(tour.dashboard);
  const dispatch = useDispatch();

  const postOnDashboard = (id) => {
    const newMessage = {
      id: uniqid(),
      content: content,
      time: Date.now(),
    };

    const existingDashboard = dashArr;
    const updates = {
      _id: id,
      dashboard: [newMessage, ...existingDashboard],
    };

    setDashArr([newMessage, ...existingDashboard]);
    dispatch(updateTour(updates));
    setContent('');
  };

  return (
    <section>
      <h3>hostdash</h3>
      <div>
        {dashArr.map((item) => (
          <article key={item.id}>
            {user.name} : {item.content}
          </article>
        ))}
      </div>
      <div>
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={() => postOnDashboard(tour._id)}>Post</button>
      </div>
    </section>
  );
};

export default HostDashboard;
