import React from 'react'
// import '../styles.css/Customers.css'
// import { products } from '../componets/Shop'
import { CiMenuKebab } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

export  const products = [
    {
        // id: 1,
        // image: image2,
        // title: "All in one bottle",
        // price: '$22.00 – $55.00',
        // ratings: 3,
        // color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'Out of Stock', 
        stock: '100',
        registered: 'May 15, 2021',
        country: 'Russia',
        group: 'Default',
        spent:'$34,392.10',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        // id: 2,
        // image: image3,
        // title: "Amazon Alexa",
        // price: "$49.00 – $69.00",
        // ratings: 4,
        // color: ["#6B705C", "#B08968", "#EDEDED"],
        status: '7 in Stock', 
        stock: '100',
        registered:'February 26, 2021',
        spent:'$25,486.20',
        country: 'Italy',
        group: 'Wholesaler',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        // id: 3,
        // image: image4,
        // title: "Headset Gamer Legion",
        // price: "$22.00 – $55.00",
        // ratings: 5,
        // color: ["#6B705C", "#B08968", "#EDEDED"],
        status: '2 in Stock', 
        stock: '100',
        registered:'August 17, 2021',
        spent:'$1,332.58',
        country: 'Germany',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 4,
        // image: image5,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'On Backorder', 
        stock: '100',
        registered:'June 26, 2021',
        spent:'$28,522.35',
        country: 'Canada',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 5,
        // image: image6,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: '1 in Stock', 
        stock: '100',
        registered:'	May 12, 2021',
        spent:'$911.27',
        country: 'Russia',
        group: 'Wholesaler',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 6,
        // image: image7,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'Out of stock', 
        stock: '100',
        registered:'October 2, 2021',
        spent:'$35,762.74',
        country: 'China',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 7,
        // image: image8,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'Preorder', 
        stock: '100',
        registered:'February 23, 2021',
        spent:'$5,702.02',
        country: 'China',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 8,
        // image: image9,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: '3 in Stock', 
        stock: '100',
        registered:'September 28, 2021',
        spent:'$594.97',
        country: 'Ukraine',
        group: 'Wholesaler',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 9,
        // image: image10,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'Out of Stock', 
        stock: '123,400',
        registered:'December 31, 2021',
        spent:'$5,192.42',
        country: 'USA',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    }

];



const Customers = () => {
  return (
     <div className='Orders'>
              <div className='Orderstitle'>
                <div><h2>Dashboard / Customers</h2>
                <h3>Customers</h3>
                </div>
                
                <div className='icon'>New Customer</div>
              </div>
        
              <div className='orderspage'>
              <div className='search'> <IoMdSearch /> <input type='search' placeholder='Start typing to search for customers'/></div>
              <div className='table'> 
             <table>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Registered</th>
                <th>Country</th>
                <th>Group</th>
                <th>Spent</th>
                
                <th></th>
              </tr>
              
              {products.map((product, index) =>(
                   <tr key={index}>
                   <td> < input type='checkbox'/></td>
                   <td><img src={product.image} alt="" class="image" /></td>
                   <td>{product.namecustomer}</td>
                   <td>{product.registered}</td>
                   <td>{product.country}</td>
                   <td>{product.group}</td>
                   <td>{product.spent}</td>
                   <td><CiMenuKebab /></td>
                 </tr>
              ))}
              
                </table>
              </div>
              </div>
              
            </div>
  )
}

export default Customers