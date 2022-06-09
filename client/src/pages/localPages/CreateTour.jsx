import React from 'react';

const CreateTour = () => {
  return (
    <section>
      <h2>Create Tour</h2>
      <form action=''>
        <label htmlFor='name'>Title</label>
        <input type='title' name='title' />
        <label htmlFor='aboutMe'>Description</label>
        <textarea id='textarea' name='aboutMe' rows='4' cols='50' />
        <label htmlFor='startAt'>Starts at</label>
        <input type='time' name='startAt' />
        {/* days checkbox thing */}
        <div>
          <input type='checkbox' id='mon' value='mon' />
          <label htmlFor='Mon'>Mon</label>
          <input type='checkbox' id='tue' value='tue' />
          <label htmlFor='tue'>Tue</label>
          <input type='checkbox' id='wed' value='wed' />
          <label htmlFor='wed'>Wed</label>
          <input type='checkbox' id='thu' value='thu' />
          <label htmlFor='thu'>Thu</label>
          <input type='checkbox' id='fri' value='fri' />
          <label htmlFor='fri'>Fri</label>
          <input type='checkbox' id='sat' value='sat' />
          <label htmlFor='sat'>Sat</label>
          <input type='checkbox' id='sun' value='sun' />
          <label htmlFor='sun'>Sun</label>
        </div>
        {/* duration select thing */}
        <div>
          <label htmlFor='duration'>Duration</label>
          <select name='duration' id='duration' form=''>
            <option value={1}>1</option>
            <option value={1.5}>1.5</option>
            <option value={2}>2</option>
            <option value={2.5}>2.5</option>
            <option value={3}>3</option>
            <option value={3.5}>3.5</option>
            <option value={4}>4</option>
          </select>
          <label htmlFor='duration'>Hours</label>
        </div>
      </form>
    </section>
  );
};

export default CreateTour;
