import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'animate.css';

const styles = {
  produit: {
    width: '240px',
    height: '450px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgs: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  prix: {
    color: 'green',
    textAlign: 'center',
  },
  btn: {
    textAlign: 'right',
  },
  description: {
    textAlign: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    width: '100%',
    height: '80px',
    backgroundColor: 'white',
    padding: '0 20px',
  },
  links: {
    margin: '0 20px 0 20px',
  },
  iconsContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '20px',
  },
};

const Menu = (props) => {
  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productSliderSettings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
    

  return (
    <div className='container-fluid'>
      <Navbar />
      <div >
        <Slider {...imageSliderSettings}  style={{ overflow: 'hidden' }}>
          <div style={{overFlow:'hidden',height:'350px'}}>
            <img className='w-100'
              style={{ marginTop: '100px', height: '350px' }}
              src={require('../images/slide-4.png')}
              alt=""
            />
          </div>
          <div>
            <img className='w-100'
              style={{ marginTop: '100px', height: '350px' }}
              src={require('../images/head.png')}
              alt=""
            />
          </div>
          <div>
            <img className='w-100'
              style={{ marginTop: '100px', height: '350px' }}
              src={require('../images/slide-5.png')}
              alt=""
            />
          </div>
        </Slider>
        <div className='text-center' style={{ marginTop: '20px' }}>
        <h1 className='text' style={{ color: 'green', margin: '20px 0' }}>
          OUR PRODUCT
        </h1>
      </div>
      <Slider {...productSliderSettings}  style={{ overflow: 'hidden' }}>
        {props.listes.map((e, index) => (
          <div >
            <div
            className={`card animate__animated animate__fadeInUp `}
            key={index}
            style={styles.produit}
          >
            <Link to={`/ProductDetails/${index + 1}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={e.src} alt="" style={styles.imgs} />
              <div className='card-body'>
                <h6 className='card-title text-left'>{e.title.length >19 ? e.title.substring(0,19)+"...":e.title}</h6>
                <b><p>{e.description.length >21 ? e.description.substring(0,21)+"...":e.description}</p></b>
                <h3 style={styles.prix}>{e.prix}</h3>
                <button className='btn btn-success text-center w-100'>Acheter</button>
              </div>
            </Link>
          </div>
          </div>
        ))}
      </Slider>
      </div>

      
      <div className='text-center' style={{ marginTop: '20px' }}>
        <h1 className='text' style={{ color: 'green', margin: '20px 0' }}>
          OUR PRODUCT
        </h1>
      </div>

      <div className="w-100">
      <div className="container-fluid" style={styles.container}>
        {props.listes.map((e, index) => (
          <div className={`card animate__animated animate__fadeInUp`} key={index} style={styles.produit}>
            <Link to={`/ProductDetails/${index + 1}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={e.src} alt="" style={styles.imgs} />
              <div className='card-body'>
                <h6 className='card-title text-left'>{e.title.length >19 ? e.title.substring(0,19)+"...":e.title}</h6>
                <b><p>{e.description.length >21 ? e.description.substring(0,21)+"...":e.description}</p></b>
                <h3 style={styles.prix}>{e.prix}</h3>
                <button className='btn btn-success text-right w-100'>AJOUTER A LA CARTE</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default Menu;