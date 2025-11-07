import React from 'react';
import error from "../../assets/error-404.png"
import { Link } from 'react-router';

const PageError = () => {
    return (
        <div className='w-10/12 m-auto text-center'>
            <img src={error} className='flex m-auto w-[300px]'/>
            <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
            <p className='text-[13px] text-[#00000088] py-3'>The page you are looking for is not available.</p>
           
           <Link to={"/"}><button className='btn btn-primary mb-5'>Go to Home</button></Link>
          
        </div>
    );
};

export default PageError;