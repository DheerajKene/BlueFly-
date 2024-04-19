import React from 'react'
import Navbar from '../../Componants/Navbar/Navbar'
import './Home.css'
import Footer from '../../Componants/Footer/Footer'
import Products from '../../Componants/Products/Products'

const Home = () => {



  return (
    <div>
        <Navbar/>
        <div id='banner'>
          <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/TOP_BANNER_ASSET.jpg?v=1712872949" alt="" />
        </div>
        <div id='information'>
          <h3>214 Products</h3>
        </div>
        <br />
        <h1 className='heading'>FREE STANDARD SHIPPING & HANDLING ON ORDERS OVER $199</h1>

        <Products/>

        <div id='banner'>
          <img src="https://cdn.shopify.com/s/files/1/0254/8878/5498/files/SHOP_PAY_BANNER_Top_1.jpg?v=1684348361" alt="" />
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home