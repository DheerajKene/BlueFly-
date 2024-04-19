import React from 'react'
import "./Products.css"
import { useEffect } from 'react';

const Products = () => {


    FetchData('https://fakestoreapi.com/products');

    function HandleChange(e){
        let URL;
        let value = e.target.value;
        console.log(value);
        if(value === "All"){
            URL = 'https://fakestoreapi.com/products';
            FetchData(URL);
            
        }else{
            URL = `https://fakestoreapi.com/products/category/${value}`
            FetchData(URL);
            
        }
    }


    let container = document.getElementById("container");
  
    function ShowData(data){
        container.innerHTML = null;
        data.forEach(function(ele, i){
            let productBox = document.createElement("div");
            let image = document.createElement("img");
            image.src = ele.image;

            let title = document.createElement("h3");
            title.innerHTML = ele.title;

            let category = document.createElement('h5');
            category.innerHTML = ele.category;

            let price = document.createElement('h3');
            price.innerHTML = `Price: ${ele.price}`;

            // let desc = document.createElement('h5');
            // desc.innerHTML = ele.description;

            productBox.append(image, category, title, price);
            container.append(productBox);

        })
    }


    function FetchData(URL){
        let Data = fetch(URL);
        Data.then(function(res){
        res = res.json();
        return res;
        })

        .then(function(res){
        ShowData(res);
        })
    }
    useEffect(() => {
        // This function will be called when the component mounts
        FetchData('https://fakestoreapi.com/products');
      }, []);
     
  return (
    <>  
        
        <div>
            <select onChange={HandleChange}>
                <option value={"All"}>All</option>
                <option value={"electronics"}>electronics</option>
                <option value={"jewelery"}>jewelery</option>
                <option value={"men's clothing"}>men's clothing</option>
                <option value={"women's clothing"}>women's clothing</option>
            </select>
        </div>

        <div id='container'>
        {FetchData('https://fakestoreapi.com/products')}
        </div>
    </>
  )
  
}


export default Products