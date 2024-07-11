import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='pt-4'>
      <div className='flex justify-between p-6 mt-2 bg-blue-50'>
        <div>
          <h2 className='font-bold text-2xl pb-2'>Topic Title</h2>
          <p>Topic Description</p>
        </div>
        <div className='list-none space-y-2'>
          <li><button  className='bg-blue-400 px-3 font-bold py-1 text-white'>Delete</button></li> 
          <li><Link href='/editTopic/123' className='bg-blue-400 text-white px-3 font-bold py-1 p-14 '>Edit</Link></li>
        </div>
      </div>

    </div>
  );
};

export default Page;