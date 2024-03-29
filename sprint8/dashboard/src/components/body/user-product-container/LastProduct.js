import React, {Fragment, useState, useEffect} from 'react';
import LastTitle from './LastTitle';
import LastImg from './LastImg';
import LastInfo from './LastInfo';
import './lastProduct.css';

function LastProduct() {
    const [lastProduct, setLastProduct] = useState([]);
    let tipoDePlato = "Cargando"
    let status = "Cargando"
    let discount = 0
    let newPrice = 0
    let finalPrice = ''
    let originalPrice = ''

    useEffect(() => {
      const endpoint = 'http://localhost:3000/api/products/last'
		
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          setLastProduct(data);
        })
        .catch(error => console.log(error));
		// eslint-disable-next-line
	}, []);
    

    if(lastProduct.length !==0 ){
        tipoDePlato = lastProduct.relaciones[0].category
        status = lastProduct.relaciones[1].status
        newPrice = lastProduct.price-(lastProduct.price*((lastProduct.discount)/100))
        finalPrice = `$ ${newPrice.toFixed(2)}`
        originalPrice = `$ ${lastProduct.price}`
        discount = `${lastProduct.discount}%`
      }

  return (
    <Fragment>
        <div className="last-card">
          { !lastProduct  && <p>Cargando</p>}

          <LastTitle title='Producto' id={lastProduct.name}/>
          <div className='last-info-container'>
              <div>
                <LastImg img={lastProduct.imgURL} name={lastProduct.name}/>
              </div>
              <div className='last-info-detail'>
                <LastInfo title="Categoría:" data={tipoDePlato} />
                <LastInfo title={status} />
                { lastProduct.discount !== 0  && <LastInfo title='Precio inicial:' data={originalPrice} /> }
                { lastProduct.discount !== 0  && <LastInfo title='Descuento:' data={discount}/>}
                <LastInfo title='Precio final:' data={finalPrice}/>
                <LastInfo title='Descripción:' data={lastProduct.description}/>
              </div>
              
          </div>
          
        </div>
    </Fragment>
  )
}

export default LastProduct