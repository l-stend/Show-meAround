import React from 'react';
import { Carousel } from 'react-bootstrap';

const LandingSlideShow = () => {
  return (
    <section>
      <div
        style={{
          color: 'white',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '80vh',
          zIndex: '10',
        }}
      >
        <img
          src='https://github.com/l-stend/Show-meAround/blob/main/client/src/assets/logo-plain.png?raw=true'
          style={{
            height: '410px',
            width: '370px',
            paddingTop: '150px',
            objectFit: 'cover',
          }}
          alt='not found'
        />
        <h1 style={{ marginBottom: '90px' }}>Show meAround</h1>
        {/* <h3>Nulla vitae elit libero, a pharetra augue mollis interdum</h3> */}
      </div>
      <Carousel
        style={{
          height: '100vh',
          width: '100vw',
          zIndex: '1',
        }}
        className='text-center'
      >
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdn0.scrvt.com/86f1f1e2d836ca377960c1753403d83d/57b9727cf8e31196/98c78701d823/v/b7dd3f28a5ee/bologna_shutterstock_419143885.jpg'
            alt='First slide'
            style={{
              height: '100vh',
              width: '100vw',
              objectFit: 'cover',
              filter: 'brightness(0.85)',
            }}
          />
          <Carousel.Caption>
            <h3>Show Your Town</h3>
            <p>
              Create cool customized tours for travelers waiting at your local
              station.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.rainews.it/cropgd/840x480/dl/img/2021/07/1600x900_1627477613077.Bologna_Portici.jpg'
            alt='Second slide'
            style={{
              height: '100vh',
              width: '100vw',
              objectFit: 'cover',
              filter: 'brightness(0.85)',
            }}
          />

          <Carousel.Caption>
            <h3>Stop Waiting Around Bored</h3>
            <p>Have a unique experience while waiting for the next train.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.romolini.com/userfiles/lifestyle/3/1%20centro-storico-in-vendita.JPG'
            alt='Third slide'
            style={{
              height: '100vh',
              width: '100vw',
              objectFit: 'cover',
              filter: 'brightness(0.80)',
            }}
          />

          <Carousel.Caption>
            <h3>Meet New Friends</h3>
            <p>
              Make bonds in a new city and maybe invite them to visit yours.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default LandingSlideShow;
