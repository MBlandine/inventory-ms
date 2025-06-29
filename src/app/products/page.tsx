import React from 'react'
// import '../styles.css/Products.css'
// import { products } from '../componets/Shop'
import { CiMenuKebab } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";


export  const products = [
    {
        // id: 1,
        // image: image2,
        title: "bottle",
        price: '$22.00 – $55.00',
        status: 'Out of Stock', 
        stock: '100'

    },
    {
        // id: 2,
        // image: image3,
        title: "Amazon Alexa",
        price: "$49.00 – $69.00",
        status: '7 in Stock', 
        stock: '100'

    },
    {
        // id: 3,
        // image: image4,
        title: "Headset",
        price: "$22.00 – $55.00",
        status: '2 in Stock', 
        stock: '100'

    },
    {
        id: 4,
        // image: image5,
        title: "Headset",
        price: "$22.00 – $55.00",
        status: 'On Backorder', 
        stock: '100'

    },
    {
        id: 5,
        // image: image6,
        title: "Headset",
        price: "$22.00 – $55.00",
        status: '1 in Stock', 
        stock: '100',

    },
    {
        id: 6,
        // image: image7,
        title: "Headset",
        price: "$22.00 – $55.00",
        status: 'Out of stock', 
        stock: '100',

    },
    {
        id: 7,
        // image: image8,
        title: "Headset",
        price: "$22.00 – $55.00",
        status: 'Preorder', 
        stock: '100',

    },
    {
        id: 8,
        // image: image9,
        title: "Headset",
        price: "$22.00 – $55.00",
        status: '3 in Stock', 
        stock: '100',
       

    },
    {
        id: 9,
        // image: image10,
        title: "Headset",
        price: "$22.00 – $55.00",
        status: 'Out of Stock', 
        stock: '123,400',
      

    }

];

const Products = () => {
  return (
    <div className='Orders'>
          <div className='Orderstitle'>
            <div><h2>Dashboard / Products</h2>
            <h3>Products</h3>
            </div>
            
            <div className='icon'>New Product</div>
          </div>
    
          <div className='orderspage'>
          <div className='search'> <IoMdSearch /> <input type='search' placeholder='Start typing to search for orders'/></div>
          <div className='table'> 
         <table>
          <tr>
            <th>< input type='checkbox'/></th>
            <th>Product</th>
            <th>Category</th>
            <th>Product</th>
            <th>Category</th>
            <th>Product</th>
            <th>Category</th>
            <th></th>
            
            <th><CiMenuKebab /></th>
          </tr>
          
          {products.map((product, index) =>(
               <tr key={index}>
               <td> < input type='checkbox'/></td>
               <td><img src={product.image} alt="" class="image" /></td>
               <td>{product.title}</td>
               <td>{product.stock}</td>
               <td>{product.status}</td>
               <td>{product.price}</td>
               <td><CiMenuKebab /></td>
             </tr>
          ))}
          
            </table>
          </div>
          </div>
          
        </div>
  )
}

export default Products