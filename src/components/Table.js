import React from 'react'
import orders from '../Data';
import './Table.css'

const Table = () => {
    return (
        <div className='bg-white w-full shadow shadow-xs p-3 rounded-lg'>

            <div className='flex items-center place-content-between'>
                <div className=' text-gray-500 rounded-md text-xs bg-white p-2 px-3 w-56 flex items-center gap-x-2 border border-gray-300'>
                    <i class="fas fa-search"></i>
                    <input className=' overflow-hidden' type="text" placeholder="Order ID or transaction ID" />
                </div>
                <div className='flex items-center gap-3 text-sm'>
                    <div className='flex items-center border border-gray-300 gap-1 p-1 rounded px-2 text-gray-600'>
                        <div>Sort</div>
                        <i class="fa-solid fa-arrow-up-short-wide"></i>
                    </div>
                    <div className='flex items-center border border-gray-300  rounded p-2 text-gray-600'><i class="fa-solid fa-download"></i></div>
                    
                
                </div>
                
            </div>

            <table className='w-full custom-table text-sm text-gray-600'>
            <thead className=' text-black'>
            <tr>
                <th className="border-b border-gray-300">Order ID</th>
                <th className="border-b border-gray-300">Status</th>
                <th className="border-b border-gray-300">Transaction ID</th>
                <th className="border-b border-gray-300">Refund Date</th>
                <th className="border-b border-gray-300">Order Amount</th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order, index) => (
                <tr key={index}>
                <td className="border-b border-gray-300">{order.orderId}</td>
                <td className="border-b border-gray-300">
                    <div  className=' flex items-center gap-1 justify-center'>
                    <div className={order.status === 'Successful' ? 'h-2 w-2 rounded-full bg-green-500' : 'h-2 w-2 rounded-full bg-gray-500'}></div>
                    <div>{order.status}</div>
                    </div>
                </td>
                <td className="border-b border-gray-300">{order.transactionId}</td>
                <td className="border-b border-gray-300">{order.refundDate}</td>
                <td className="border-b border-gray-300">{order.orderAmount}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        
      );
}

export default Table