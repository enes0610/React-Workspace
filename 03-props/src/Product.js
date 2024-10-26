import React from 'react'

function Product(props) {
    console.log(props)
  return (
    <div>
        <h1>Ürün Bilgisi</h1>
        <hr/>

        <div>
            <h2>Ürün: {props.name}</h2>
            <p>Fiyat: {props.money} ₺</p>
        </div>
        <hr></hr>

    </div>
  )
}

export default Product