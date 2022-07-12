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
          <Card.Title>Connect Travelers and Locals</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Developed by{' '}
            <a
              href='https://www.linkedin.com/in/luca-stendardo/?locale=en_US'
              style={{ color: '#ff8500' }}
            >
              Luca Stendardo
            </a>
          </Card.Subtitle>
          <Card.Text style={{ marginTop: '3vh' }}>
            We all like to travel, and probably all of us have experienced being
            in a station waiting for a connection for hours not knowing what to
            do. What if that time could turn into a great opportunity to be
            seized?
          </Card.Text>
          <Card.Text>
            Show-meAround is a platform designed to meet the needs of both
            travelers and local communities. Through this app, residents can
            offer their very own guided tours to those who face long and tedious
            waits.
          </Card.Text>
          <Card.Text>
            The idea for this Beta version came from APS Creative 108's SOJUEN
            project. A course of design thinking as part of which the
            municipality of Bologna provided a group of young social innovators
            concrete problem areas to analyze. After a phase of empathising,
            i.e., reaching out directly with the people involved to understand
            their real needs, the group designed the platform that I had the
            pleasure of implementing.
          </Card.Text>
          <Card.Link
            style={{ color: '#ff8500' }}
            href='https://github.com/l-stend/Show-meAround'
          >
            GitHub Repository
          </Card.Link>
          <Card.Link
            style={{ color: '#ff8500' }}
            href='https://www.creativi108.com/'
          >
            Meet Creativi108
          </Card.Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Description;
