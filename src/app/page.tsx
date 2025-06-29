'use client';
import React from 'react'
// import '../styles.css/Orders.css';
// import "../iconMap";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";



const orders = [
  {
    id: '#3201',
    date: 'December 10, 2020',
    customer: 'Ryan Ford',
    paid: 'Partial',
    status: 'Shipped',
    items: '2000',
    total: '$1,200.00',
  },
  {
    id: '#3202',
    date: 'December 11, 2020',
    customer: 'Jane Doe',
    paid: 'Paid',
    status: 'Processing',
    items: '3000',
    total: '$980.00',
  },
  {
    id: '#3203',
    date: 'December 12, 2020',
    customer: 'John Smith',
    paid: 'Unpaid',
    status: 'Cancelled',
    items: '1000',
    total: '$100.00',
  },
];



const Orders = () => {
  return (
    <div className='Orders'>
      <div className='Orderstitle'>
        <div>
          <h2>Dashboard / Orders</h2>
          <h3>Orders</h3>
        </div>
        <div className='icon'>New Order</div>
      </div>

      <div className='orderspage'>
        <div className='search'>
          <IoMdSearch />
          <input type='search' placeholder='Start typing to search for orders' />
        </div>

        <div className='table'>
          <table>
            <thead>
              <tr>
                <th><input type='checkbox' /></th>
                <th>Number</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Paid</th>
                <th>Status</th>
                <th>Items</th>
                <th>Total</th>
                <th><CiMenuKebab /></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td><input type='checkbox' /></td>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.customer}</td>
                  <td>{order.paid}</td>
                  <td>{order.status}</td>
                  <td>{order.items}</td>
                  <td>{order.total}</td>
                  <td><CiMenuKebab /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders
