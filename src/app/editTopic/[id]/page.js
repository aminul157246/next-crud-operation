import React from 'react';

const EditTopic = () => {
    return (
        <div className='bg-blue-50 mt-4 p-12'>
            <input type="text" name="" id="" className='p-2 border w-full ' placeholder='Topic Title' /> <br />
            <textarea type="text" name="" id="" className='p-2 border w-full mt-4' placeholder='Topic Title' />
            <div className="flex justify-center mt-4 ">
                <button className='bg-blue-400 text-white w-full px-3 font-bold py-1 '>Edit Topic</button>
            </div>
        </div>
    );
};

export default EditTopic;