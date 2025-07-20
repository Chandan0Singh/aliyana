// 'use client';
// import React, { useState } from 'react';
// import { Dialog } from '@headlessui/react';

// const BuyNowModal = ({ isOpen, onClose, product }) => {
//   const [fullName, setFullName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // 👉 You can send this data to an API endpoint here
//     alert('Order Placed!');
//     onClose(); // Close modal after placing order
//   };

//   return (
//     <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen px-4">
        
//         {/* Overlay */}
//         <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>

//         <div className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-lg z-50">
//           <Dialog.Title className="text-xl font-bold mb-4">Place Your Order</Dialog.Title>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <input
//                 type="text"
//                 required
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//               <input
//                 type="tel"
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//               <textarea
//                 required
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               ></textarea>
//             </div>

//             <div className="flex justify-end gap-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 rounded-md bg-yellow-500 text-white font-semibold hover:bg-yellow-600"
//               >
//                 Confirm Order
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Dialog>
//   );
// };

// export default BuyNowModal;
