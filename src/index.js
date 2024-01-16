import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Form } from 'react-router-dom';
import Menu from './pages/Menu';
// import Tenu1 from './article/1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Tenu2 from './article/2';
import ProductDetails from './pages/ProductDetails';
import Footer from './pages/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const tenu = [
  { id: 1, src: require('./images/cuir-0005-calque-7.png'), title: 'SAC DE LUXE', description: 'Découvrez notre somptueux sac en cuir de la plus haute qualité. Un accessoire incontournable pour les amateurs de luxe.', prix: '799.99 DH', descriptiong: 'Collection exclusive de sacs de luxe pour le Raja Athletic Club UMBRO 23/24' },
  { id: 2, src: require('./images/cuir-0009-calque-3.png'), title: 'SAC ÉLÉGANT', description: 'Explorez notre gamme de sacs en cuir élégants, y compris ce modèle unique. Ajoutez une touche de classe à votre style quotidien.', prix: '649.99 DH', descriptiong: 'Collection exclusive de sacs élégants pour le Raja Athletic Club UMBRO 23/24' },
  { id: 3, src: require('./images/lun-0005-calque-1.png'), title: 'LUNETTES DE DESIGN', description: "Optez pour l'exclusivité avec nos lunettes de design. Protégez vos yeux tout en faisant une déclaration de mode audacieuse.", prix: '299.99 DH', descriptiong: 'Collection exclusive de lunettes pour le Raja Athletic Club UMBRO 23/24' },
  { id: 4, src: require('./images/pod-0002-calque-7-1.png'), title: 'TENUE DE MATCH OFFICIELLE', description: 'Affichez votre passion pour le Raja Athletic Club avec cette tenue de match officielle. Confortable, respirante et conçue pour la performance.', prix: '899.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 5, src: require('./images/pod-0004-calque-5-1.png'), title: 'ENSEMBLE SPORTIF DE QUALITÉ', description: 'Découvrez notre ensemble sportif de qualité exceptionnelle. Parfait pour les entraînements intensifs ou simplement pour montrer votre soutien au Raja Athletic Club.', prix: '749.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 6, src: require('./images/tshirt-noir.png'), title: 'T-SHIRT NOIR DE STYLE', description: 'Ajoutez une touche de style décontracté à votre garde-robe avec notre t-shirt noir. Un incontournable pour tous les fans du Raja Athletic Club.', prix: '199.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 7, src: require('./images/pod-0003-calque-6-1.png'), title: 'TENUE D\'ENTRAÎNEMENT', description: "Optimisez vos séances d'entraînement avec notre tenue d'entraînement de haute qualité. Confortable, flexible et conçue pour la performance.", prix: '599.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 8, src: require('./images/sac.png'), title: 'SAC EN CUIR CLASSIQUE', description: 'Un classique intemporel, notre sac en cuir classique est parfait pour toutes les occasions. Fabriqué avec précision pour une élégance durable.', prix: '449.99 DH', descriptiong: 'Collection exclusive de sacs en cuir pour le Raja Athletic Club UMBRO 23/24' },
  { id: 9, src: require('./images/pod-0002-calque-7-1.png'), title: 'TENUE DE SUPPORTER', description: 'Exprimez votre passion en portant notre tenue de supporter du Raja Athletic Club. Montrez votre soutien avec style.', prix: '349.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 10, src: require('./images/vsdvsd.png'), title: 'ENSEMBLE DÉCONTRACTÉ', description: 'Adoptez un look décontracté avec notre ensemble décontracté du Raja Athletic Club. Parfait pour les journées décontractées et les moments de détente.', prix: '299.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 11, src: require('./images/pod-0005-calque-4-1.png'), title: 'TENUE DE STADE', description: "Préparez-vous pour le stade avec notre tenue de stade du Raja Athletic Club. Confortable, stylée et prête pour l'action.", prix: '799.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 12, src: require('./images/pod-0006-calque-3-1.png'), title: 'TENUE DE CÉLÉBRATION', description: 'Célébrez les victoires du Raja Athletic Club avec notre tenue de célébration. Un choix parfait pour les moments de gloire.', prix: '999.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 13, src: require('./images/cas1.png'), title: 'CASQUETTE DE SUPPORTER', description: 'Complétez votre look avec notre casquette de supporter du Raja Athletic Club. Un accessoire essentiel pour tous les fans.', prix: '79.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 14, src: require('./images/cas2.png'), title: 'CASQUETTE DE COLLECTION', description: 'Ajoutez une touche de style à votre tenue avec notre casquette de collection du Raja Athletic Club. Un choix tendance pour les aficionados de la mode.', prix: '89.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 15, src: require('./images/cas3.png'), title: 'CASQUETTE DE PERFORMANCE', description: 'Optimisez votre look avec notre casquette de performance du Raja Athletic Club. Conçue pour un confort optimal pendant les activités sportives.', prix: '99.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 16, src: require('./images/cas4.png'), title: 'CASQUETTE DE STYLE', description: 'Affirmez votre style avec notre casquette de style du Raja Athletic Club. Un accessoire incontournable pour les amateurs de mode.', prix: '69.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 17, src: require('./images/cas5.png'), title: 'CASQUETTE CLASSIQUE', description: 'Restez classique avec notre casquette classique du Raja Athletic Club. Un choix intemporel pour compléter votre tenue.', prix: '59.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 18, src: require('./images/cas6.png'), title: 'CASQUETTE VINTAGE', description: "Adoptez une touche vintage avec notre casquette vintage du Raja Athletic Club. Un hommage élégant à lhistoire du club", prix: '79.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 19, src: require('./images/trnu8.png'), title: 'ENSEMBLE DE SUPPORTER', description: 'Montrez votre dévouement avec notre ensemble de supporter du Raja Athletic Club. Parfait pour les jours de match et les rassemblements sportifs.', prix: '399.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
  { id: 20, src: require('./images/tenu7.jpg'), title: 'ENSEMBLE DE CÉLÉBRATION', description: 'Célébrez les moments forts avec notre ensemble de célébration du Raja Athletic Club. Un choix festif pour les supporters passionnés.', prix: '599.99 DH', descriptiong: 'Maillot Extérieur White Raja Athletic Club UMBRO 23/24' },
];




root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
  <Route key="menu" path='/' element={<Menu listes={tenu} />} />
  <Route key="productDetails" path='/ProductDetails/:id' element={<ProductDetails listes={tenu} /> } />
</Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
