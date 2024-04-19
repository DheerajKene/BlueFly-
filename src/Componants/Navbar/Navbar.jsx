import React from 'react'
import './Navbar.css'
import Announcement from '../Announcement Bar/Announcement';

const Navbar = () => {

    let searchbox = document.getElementById('Search-Box');
    let SearchIcon = document.getElementById('Search_icon');
    function handleSearch(){
        SearchIcon.style.display='none';
        searchbox.style.display='flex';
        
    }

    function HandleCancleSearch(){
        searchbox.style.display='none';
        SearchIcon.style.display='block';
        
    }
  return (
    <>
    <div id='top-navbar'>

{/* ----------------------------BlueFly LOGO------------------------------------- */}

        <div id='Bluefly-header'>
                <img src="https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141" alt="" />
        </div>

{/* --------------------Side Search Bar------------------------------------       */}

        <div id='Search-bar'>
            <button onClick={handleSearch} id='Search_icon'>🔍 SEARCH</button>
            <div id='Search-Box'>
                <button>🔍</button>
                <input placeholder='Search our store' type="text" />
                <button onClick={HandleCancleSearch}>❌</button>
            </div>
            <div className='sidebar'>
                <a href="/Login"alt="">
                    <img src="https://pluspng.com/img-png/png-user-icon-man-person-user-icon-512.png" alt="" />
                </a>
                <a href="">
                    <img src="https://www.logolynx.com/images/logolynx/2f/2fd9abfa6c80a65c15a808977bebbcda.png" alt="" />
                </a>
            </div>
           
        </div>
    
    </div>

{/* ---------------------------------NavBar Mega Menu----------------------------------- */}
    <nav>
        <div className='wrapper'>
            <div className='logo'>
                <a href=""></a>
            </div>
            <ul className='NavLinks'>
                <li className='Underline'>
                {/* ---------------------------Clothings------------------------ */}
                    <a href="">CLOTHINGS</a>
                    <div className='mega-box'>
                        <div className='content'>
                            <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/women.jpg?v=1613619704" alt="" />
                                <h4>Dresses</h4>
                                <h5>Up to 80% off</h5>
                            </div>
                            <div className='row'>
                                <header>WOMEN'S CLOTHING</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Activewear</a></li>
                                    <li><a href="">Coats & jackets</a></li>
                                    <li><a href="">Jeans & Denim</a></li>
                                    <li><a href="">Jumpsuite & Rompers</a></li>
                                    <li><a href="">Lingerie & Hosiery</a></li>
                                    <li><a href="">Loungewear & Sleepwear</a></li>
                                    <li><a href="">Pants & Leggings</a></li>
                                    <li><a href="">Shorts</a></li>
                                    <li><a href="">Skirts</a></li>
                                    <li><a href="">Sweaters</a></li>
                                    <li><a href="">Swearshirt & Hoodies</a></li>
                                    <li><a href="">Swimwear & Coverups</a></li>
                                    <li><a href="">Tops & Tees</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>MEN'S CLOTHING</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Activewear</a></li>
                                    <li><a href="">Casual Button-Down shirts</a></li>
                                    <li><a href="">Jeans & Denim</a></li>
                                    <li><a href="">Coats & jackets</a></li>
                                    <li><a href="">Dress shirt</a></li>
                                    <li><a href="">Pants</a></li>
                                    <li><a href="">Polo Shirts</a></li>
                                    <li><a href="">Shorts</a></li>
                                    <li><a href="">Suits & Separates</a></li>
                                    <li><a href="">Sport Coats & Blazers</a></li>
                                    <li><a href="">Sweaters</a></li>
                                    <li><a href="">Swearshirt & Hoodies</a></li>
                                    <li><a href="">Swimwear & Coverups</a></li>
                                    <li><a href="">T-Shirts</a></li>
                                    <li><a href="">Under wear & Socks</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------Shoes------------------------ */}
                    <a href="">SHOES</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/women.jpg?v=1613619704" alt="" />
                                <h4>Dresses</h4>
                                <h5>Up to 80% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>WOMEN'S SHOES</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Boots</a></li>
                                    <li><a href="">Espadrilles</a></li>
                                    <li><a href="">Flats</a></li>
                                    <li><a href="">Mules & Slides</a></li>
                                    <li><a href="">Oxfords & Loafers</a></li>
                                    <li><a href="">Pumps & Heels</a></li>
                                    <li><a href="">Sandles</a></li>
                                    <li><a href="">Slippers</a></li>
                                    <li><a href="">Sneakers</a></li>
                                    <li><a href="">Wedges</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>WOMEN'S DESIGNERS</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Alexander & McQueen</a></li>
                                    <li><a href="">Balenciaga</a></li>
                                    <li><a href="">Bottega Veneta</a></li>
                                    <li><a href="">Chrstian Louboutin</a></li>
                                    <li><a href="">Dolce & Gabbana</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Gianvito Rossi</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Jimmy choo</a></li>
                                    <li><a href="">Monolo Blanhik</a></li>
                                    <li><a href="">Saint Lunrent</a></li>
                                    <li><a href="">Stuart Wtieztman</a></li>
                                    <li><a href="">Salvatore Ferrangamo</a></li>
                                    <li><a href="">Valentino</a></li>
                                    <li><a href="">VEJA</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>MEN'S SHOES</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Boots</a></li>
                                    <li><a href="">Drivers Loafers & slip-Ones</a></li>
                                    <li><a href="">Oxford & Derby Shoes</a></li>
                                    <li><a href="">Sandle & Flip Flop</a></li>
                                    <li><a href="">Slippers</a></li>
                                    <li><a href="">Sneakers</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>MEN'S DESIGNERS</header>
                                <ul className="mega-links">
                                <li><a href="">shop all</a></li>
                                    
                                    <li><a href="">Balenciaga</a></li>
                                    <li><a href="">Bottega Veneta</a></li>
                                    <li><a href="">Dolce & Gabbana</a></li>
                                    <li><a href="">Chrstian Louboutin</a></li>
                                    <li><a href="">Alexander & McQueen</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Gianvito Rossi</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">VEJA</a></li>
                                    <li><a href="">Monolo Blanhik</a></li>
                                    <li><a href="">Saint Lunrent</a></li>
                                    <li><a href="">Stuart Wtieztman</a></li>
                                    <li><a href="">Jimmy choo</a></li>
                                    <li><a href="">Salvatore Ferrangamo</a></li>
                                    <li><a href="">Valentino</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------HandBags------------------------ */}
                    <a href="">HANDBAGS</a>
                    <div className='mega-box'>
                        <div className='content'>
                            <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag2.jpg?v=1613619716" alt="" />
                                <h4>SATCHELS</h4>
                                <h5>Up to 60% off</h5>
                            </div>
                            <div className='row'>
                                <header>ALL HANDBAGS</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Backpacks</a></li>
                                    <li><a href="">Buckets Bags</a></li>
                                    <li><a href="">Clutches</a></li>
                                    <li><a href="">CrossBody Bags</a></li>
                                    <li><a href="">HoboBags</a></li>
                                    <li><a href="">Satchels</a></li>
                                    <li><a href="">Shoulder Bags</a></li>
                                    <li><a href="">Tote Bags</a></li>
                                    <li><a href="">Travel Bags & Luggage</a></li>
                                    <li><a href="">Wallets & Cardholders</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>MEN'S CLOTHING</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Balenciago</a></li>
                                    <li><a href="">Boltega veneta</a></li>
                                    <li><a href="">Burberry</a></li>
                                    <li><a href="">Celine</a></li>
                                    <li><a href="">Chloe</a></li>
                                    <li><a href="">Dolce & Gabbana</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Givenchy</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Mario valentino</a></li>
                                    <li><a href="">Prada</a></li>
                                    <li><a href="">Saint Laurent</a></li>
                                    <li><a href="">Salvatore Ferragemo</a></li>
                                    <li><a href="">Stella McCartney</a></li>
                                    <li><a href="">Valentino</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------Designers------------------------ */}
                    <a href="">DESIGNERS</a>
                    <div className='mega-box'>
                        <div className='content'>
                            <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div>
                            <div className='row'>
                                <header>WOMEN'S SUNGLASSES</header>
                                <ul className="mega-links">
                                    <li><a href="">Boltega veneta</a></li>
                                    <li><a href="">Burberry</a></li>
                                    <li><a href="">Celine</a></li>
                                    <li><a href="">Chloe</a></li>
                                    <li><a href="">Dolce & Gabbana</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Givenchy</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Mario valentino</a></li>
                                    <li><a href="">Prada</a></li>
                                    <li><a href="">Saint Laurent</a></li>
                                    <li><a href="">Salvatore Ferragemo</a></li>
                                    <li><a href="">Stella McCartney</a></li>
                                    <li><a href="">Valentino</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                            <header>MEN'S SUNGLASSES</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Balenciago</a></li>
                                    <li><a href="">Boltega veneta</a></li>
                                    <li><a href="">Burberry</a></li>
                                    <li><a href="">Celine</a></li>
                                    <li><a href="">Chloe</a></li>
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Alexander & McQueen</a></li>
                                    <li><a href="">Balenciaga</a></li>
                                    <li><a href="">Bottega Veneta</a></li>
                                    <li><a href="">Chrstian Louboutin</a></li>
                                    <li><a href="">Dolce & Gabbana</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Gianvito Rossi</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Jimmy choo</a></li>
                                    <li><a href="">Monolo Blanhik</a></li>
                                    <li><a href="">Saint Lunrent</a></li>
                                    <li><a href="">Stuart Wtieztman</a></li>
                                    <li><a href="">Salvatore Ferrangamo</a></li>
                                    <li><a href="">Valentino</a></li>
                                    <li><a href="">VEJA</a></li>
                                    <li><a href="">Stella McCartney</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------Sunglasses------------------------ */}
                    <a href="">SUNGLASSES</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>Featured Designers</header>
                                <ul className="mega-links">
                                    <li><a href="">Boltega veneta</a></li>
                                    <li><a href="">Burberry</a></li>
                                    <li><a href="">Celine</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Gianvito Rossi</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Jimmy choo</a></li>
                                    <li><a href="">Monolo Blanhik</a></li>
                                    <li><a href="">Saint Lunrent</a></li>
                                    <li><a href="">Prada</a></li>
                                    <li><a href="">VEJA</a></li>
                                    <li><a href="">Monolo Blanhik</a></li>
                                    <li><a href="">Saint Lunrent</a></li>
                                    <li><a href="">Stuart Wtieztman</a></li>
                                    <li><a href="">Saint Laurent</a></li>
                                    <li><a href="">Salvatore Ferragemo</a></li>
                                    <li><a href="">Stella McCartney</a></li>
                                    <li><a href="">Valentino</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Balenciago</a></li>
                                    <li><a href="">Boltega veneta</a></li>
                                    <li><a href="">Burberry</a></li>
                                    <li><a href="">Celine</a></li>
                                    <li><a href="">Chloe</a></li>
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Alexander & McQueen</a></li>
                                    <li><a href="">Balenciaga</a></li>
                                    <li><a href="">Bottega Veneta</a></li>
                                    <li><a href="">Chrstian Louboutin</a></li>
                                    <li><a href="">Dolce & Gabbana</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Gianvito Rossi</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Jimmy choo</a></li>
                                    <li><a href="">Monolo Blanhik</a></li>
                                    <li><a href="">Saint Lunrent</a></li>
                                    <li><a href="">Stuart Wtieztman</a></li>
                                    <li><a href="">Salvatore Ferrangamo</a></li>
                                    <li><a href="">Valentino</a></li>
                                    <li><a href="">VEJA</a></li>
                                    <li><a href="">Stella McCartney</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------JWELLARY & WATCHES------------------------ */}
                    <a href="">JWELLARY & WATCHES</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>JWELLARY</header>
                                <ul className="mega-links">
                                    <li><a href="">Shop all</a></li>
                                    <li><a href="">Bracelets</a></li>
                                    <li><a href="">Brooches & Pins</a></li>
                                    <li><a href="">Earrings</a></li>
                                    <li><a href="">Necklace</a></li>
                                    <li><a href="">Rings</a></li>
                                    <li><a href="">Watches</a></li>
                                    <li><a href="">Men's Jwellary</a></li>
                                   
                                </ul>
                            </div>
                            <div className='row'>
                            <header>Featured Designers Watches</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Calvin Klein</a></li>
                                    <li><a href="">CCCP</a></li>
                                    <li><a href="">CT Scuderia</a></li>
                                    <li><a href="">Danial Vilington</a></li>
                                    <li><a href="">Diesel</a></li>
                                    <li><a href="">Esprit</a></li>
                                    <li><a href="">Glycine</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Hamilton</a></li>
                                    <li><a href="">Invicta</a></li>
                                    <li><a href="">Jacques Lemans</a></li>
                                    <li><a href="">Jacy</a></li>
                                    <li><a href="">Juicy Cauture</a></li>
                                    <li><a href="">Michel Kore</a></li>
                                    <li><a href="">Mida</a></li>
                                    <li><a href="">Monolo Blanhik</a></li>
                                    <li><a href="">Saint Lunrent</a></li>
                                    <li><a href="">Stuart Wtieztman</a></li>
                                    <li><a href="">Salvatore Ferrangamo</a></li>
                                    <li><a href="">Valentino</a></li>
                                    <li><a href="">VEJA</a></li>
                                    <li><a href="">Stella McCartney</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------ACCESSORIES------------------------ */}
                    <a href="">ACCESSORIES</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>WOMEN'S ACCESSORIES</header>
                                <ul className="mega-links">
                                    <li><a href="">Shop all</a></li>
                                    <li><a href="">Bags Charms, Straps, & Accessories</a></li>
                                    <li><a href="">Belts</a></li>
                                    <li><a href="">Cosmetic Bags</a></li>
                                    <li><a href="">Hats</a></li>
                                    <li><a href="">Gloves</a></li>
                                    <li><a href="">Scarves & Wraps</a></li>
                                    <li><a href="">Optical & Reading Glasses</a></li>
                                    <li><a href="">SunGlasses</a></li>
                                    <li><a href="">Travel bags & Luggage</a></li>
                                   
                                </ul>
                            </div>
                            <div className='row'>
                                <header>MEN'S ACCESSORIES</header>
                                <header>SHOP ALL</header>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------Home------------------------ */}
                    <a href="/">HOME</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>HOME</header>
                                <ul className="mega-links">
                                    <li><a href="">Shop all</a></li>
                                    <li><a href="">Travel bags & Luggage</a></li>
                                   
                                </ul>
                            </div>
                            <div className='row'>
                            <header>BEAUTY</header>
                                <ul className="mega-links">
                                    <li><a href="">Shop all</a></li>
                                    <li><a href="">Perfume</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------UNDER $50------------------------ */}
                    <a href="">UNDER $50</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>SHOP BY PRICEPOINT</header>
                                <ul className="mega-links">
                                    <li><a href="">Shop all under $50</a></li>
                                    <li><a href="">Under $25</a></li>
                                    <li><a href="">$25 - $49.99</a></li>
                                   
                                </ul>
                            </div>
                            <div className='row'>
                            <header>SHOP BY CATEGORY</header>
                                <ul className="mega-links">
                                    <li><a href="">Women</a></li>
                                    <li><a href="">Men</a></li>
                                    <li><a href="">Shoes</a></li>
                                    <li><a href="">Handbags & Accessories</a></li>
                                    <li><a href="">Jewelry</a></li>
                                    <li><a href="">Kids</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a id='clearance' href="">CLEARANCE</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>WOMEN'S</header>
                                <ul className="mega-links">
                                    <li><a href="">Shop all</a></li>
                                    <li><a href="">Backpacks</a></li>
                                    <li><a href="">Buckets Bags</a></li>
                                    <li><a href="">Clutches</a></li>
                                    <li><a href="">CrossBody Bags</a></li>
                                    <li><a href="">HoboBags</a></li>
                                    <li><a href="">Satchels</a></li>
                                    <li><a href="">Shoulder Bags</a></li>
                                    <li><a href="">Belts</a></li>
                                    <li><a href="">Cosmetic Bags</a></li>
                                    <li><a href="">Hats</a></li>
                                    <li><a href="">Gloves</a></li>
                                    <li><a href="">Bracelets</a></li>
                                    <li><a href="">Brooches & Pins</a></li>
                                    <li><a href="">Earrings</a></li>
                                    <li><a href="">Necklace</a></li>
                                    <li><a href="">Rings</a></li>
                                    <li><a href="">Watches</a></li>
                                    <li><a href="">Scarves & Wraps</a></li>
                                    <li><a href="">Optical & Reading Glasses</a></li>
                                    <li><a href="">Tote Bags</a></li>
                                    <li><a href="">Handbags & Accessories</a></li>

                                   
                                </ul>
                            </div>
                            <div className='row'>
                            <header>MEN'S</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Activewear</a></li>
                                    <li><a href="">Casual Button-Down shirts</a></li>
                                    <li><a href="">Jeans & Denim</a></li>
                                    <li><a href="">Coats & jackets</a></li>
                                    <li><a href="">Dress shirt</a></li>
                                    <li><a href="">Pants</a></li>
                                    <li><a href="">Polo Shirts</a></li>
                                    <li><a href="">Shorts</a></li>
                                    <li><a href="">Suits & Separates</a></li>
                                    <li><a href="">Sport Coats & Blazers</a></li>
                                    <li><a href="">Drivers Loafers & slip-Ones</a></li>
                                    <li><a href="">Oxford & Derby Shoes</a></li>
                                    <li><a href="">Sandle & Flip Flop</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav> 

</>
  )
}

export default Navbar