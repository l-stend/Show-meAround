import React from 'react';
import { Card } from 'react-bootstrap';

const Description = () => {
  return (
    <section>
      <Card
        style={{
          width: '46vw',
          borderColor: 'black',
          border: 'solid 2px black',
          borderRadius: '0px',
          padding: '0vh 5vw 0vh 5vw',
          margin: '3vh 1vw 0vh 2vw',
        }}
      >
        <Card.Body>
          <Card.Title>Lorem ipsum dolor</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            dolor, sit amet consectetur adipisicing elit
          </Card.Subtitle>
          <Card.Text style={{ marginTop: '3vh' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            nisi distinctio tempore ut adipisci cumque quod inventore omnis
            laborum sit itaque ullam veniam fuga delectus voluptate.
          </Card.Text>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            nisi distinctio tempore ut adipisci cumque.
          </Card.Text>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            incidunt nobis, esse deserunt ea magnam ab voluptas placeat iusto.
            Quasi in quas animi delectus rem velit. Eum debitis vitae officiis
            qui.
          </Card.Text>
          <Card.Link style={{ color: '#ff8500' }} href='#'>
            Max's Mother's website
          </Card.Link>
          <Card.Link style={{ color: '#ff8500' }} href='#'>
            Another Link
          </Card.Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Description;

{
  /*<div>
         <h3>Lorem ipsum dolor sit</h3>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          nisi distinctio tempore ut adipisci cumque quod inventore omnis
          laborum sit itaque ullam veniam fuga delectus voluptate iure, nostrum
          deleniti ipsa possimus alias dolor. Molestias, labore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          nisi distinctio tempore ut adipisci cumque quod inventore omnis
          laborum
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          incidunt nobis, esse deserunt ea magnam ab voluptas placeat iusto.
          Quasi in quas animi delectus rem velit. Eum debitis vitae officiis
          qui, a dignissimos? Nihil laborum, odio molestias eligendi facere
          voluptatem.
        </p>
      </div> */
}
