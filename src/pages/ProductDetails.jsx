import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import '../index.css'
import Footer from './Footer';
const ProductDetails = (props) => {
  const [compt, setCompt] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const[kk,setKK] = useState('')

  

  const decrementer = () => {
    setCompt(compt - 1);
    if (compt <= 1) {
      setCompt(1);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const { id } = useParams();
  const productDetails = props.listes.find((product) => product.id == id);
  const incrementer = () => {
    setCompt(compt + 1);
    
  };
  if (!productDetails) {
    return <div>Product not found {id}</div>;
  }
  const click = () => {
    setKK('le produit a été ajouté');
  };

   const prix = parseInt(productDetails.prix)

  return (
    <div className='container-fluid'>
      <Navbar  />
      <div className=" row" style={{ zIndex: 3}}>
        <div className="col-md-6 text-center">
          <img
            style={{ width: '80%',marginTop: '100px' }}
            src={productDetails.src}
            alt=""
          />
        </div>
        <div className="col-md-6" style={{ marginTop: '100px' }}>
          <b>
            <b>
        {productDetails.descriptiong
        }</b>
          </b>
          <h1 style={{color:'green'}}>{prix*compt} DH </h1>
          <div>
          <button className="btn btn-success" onClick={decrementer}>
              -
            </button>
            <label
              
              style={{
                width: '40px',
                textAlign: 'center',
                margin: '0 10px 0 10px',
                fontSize:'24px'
              }}
              
            >{compt}</label>
            <button onClick={incrementer} className="btn btn-success">
              +
            </button>
            
          </div>
          <hr />
          <div className="size-chart mt-1">
            <h5 style={{color:'grey'}}>TAILLE</h5>
            <button
              type="button"
              className={`btn btn-outline-success size-btn ${
                selectedSize === 'XS' ? 'selected' : ''
              }`}
              onClick={() => handleSizeClick('XS')}
            >
              XS
            </button>
            <button
              type="button"
              className={`btn btn-outline-success size-btn ${
                selectedSize === 'S' ? 'selected' : ''
              }`}
              style={{ marginLeft: '5px' }}
              onClick={() => handleSizeClick('S')}
            >
              S
            </button>
            <button
    type="button"
    className={`btn btn-outline-success size-btn ${
      selectedSize === 'M' ? 'selected' : ''
    }`}
    style={{ marginLeft: '5px' }}
    onClick={() => handleSizeClick('M')}
  >
    M
  </button>
  <button
    type="button"
    className={`btn btn-outline-success size-btn ${
      selectedSize === 'L' ? 'selected' : ''
    }`}
    style={{ marginLeft: '5px' }}
    onClick={() => handleSizeClick('L')}
  >
    L
  </button>
  <button
    type="button"
    className={`btn btn-outline-success size-btn ${
      selectedSize === 'XL' ? 'selected' : ''
    }`}
    style={{ marginLeft: '5px' }}
    onClick={() => handleSizeClick('XL')}
  >
    XL
  </button>
  <button
    type="button"
    className={`btn btn-outline-success size-btn ${
      selectedSize === 'XXL' ? 'selected' : ''
    }`}
    style={{ marginLeft: '5px' }}
    onClick={() => handleSizeClick('XXL')}
  >
    XXL
  </button>
  <button
    type="button"
    className={`btn btn-outline-success size-btn ${
      selectedSize === 'XXXL' ? 'selected' : ''
    }`}
    style={{ marginLeft: '5px' }}
    onClick={() => handleSizeClick('XXXL')}
  >
    XXXL
  </button>


            
          </div>
          <hr />
          <h5>Personnalisez cet article <span style={{position:'absolute',right:'30px',}}> +80.00DH</span></h5>  
          <p>Ajoutez un nom ou un numéro pour personnaliser votre t-shirt ou créer le cadeau parfait</p>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            
  <input type="text" placeholder='votre prénom' className='form-control' style={{width: '45%', marginRight: '20px'}} />
  <input type="text" placeholder='votre nom' className='form-control' style={{width: '45%'}} />
</div>
<hr />
          <div>
            
            <div>
      
      <div>
        <button className="btn w-100 btn-success text-center mt-1" onClick={click}>
          AJOUTER A LA CARTE
        </button>
        {kk && (
          <div className="alert alert-success mt-2">
            <strong>{kk}</strong>
          </div>
        )}
      </div>
    </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;