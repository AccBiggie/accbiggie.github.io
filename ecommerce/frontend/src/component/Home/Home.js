import React, { Fragment, useEffect } from 'react';
import {ReactComponent as FetechLogo} from "../../images/ProjetoLogoFetech2.svg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productAction';
import {useSelector, useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader';
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert()
  const dispatch = useDispatch();
  const {loading, error, products, productsCount} = useSelector((state) => state.products);

  useEffect(() => {

    if(error){
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

      return ( 
      <Fragment>
        {loading ? (
          <Loader/>
        ) : (
          <Fragment>
            <MetaData title="Loja Fetech | Entre já para o mundo gamer"/>
        <div className="banner">
            <p> Seja Bem Vindo | Ecommerce Fetech</p>
              <h1>Teste H1</h1>
              <a href="#container">
                  <button >
                  Scroll
                  </button>
              </a>
        </div>

        <div className="logoFetech">
                <FetechLogo width={150}/>
            </div>
            <p>Teste</p>

        <h2 className="homeHeading">Produtos Mais Procurados</h2>

        <div className="container" id="container">
          {products && products.map((product) => <Product product = {product}/>)};  
        </div>
          </Fragment>
        )};
    </Fragment>
  );
};
export default Home;