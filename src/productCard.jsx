import React from 'react'
import prodctpc from "./asset/images/image-product-desktop.jpg"
import carticon from "./asset/images/icon-cart.svg"

const ProductCard = () => {
  return (
    <div className="bg-[#F3E5D8] h-screen">
      <div className="flex justify-center items-center p-5">
        <div className="bg-white flex w-4/12 rounded-xl my-[4rem] mx-[5rem] ">
          <div className='w-1/2 '>
            <img className='rounded-l-xl w-full h-full object-cover' src={prodctpc} alt="" />
          </div>
          <div className='w-1/2 flex flex-col p-5'>
            <div className='tracking-[.40rem] text-[15px] opacity-50 font-medium'>
              <span>PERFUME</span>
            </div>
            <div className='mt-8 font-serif'>
              <div className='flex flex-col items-start justify-start font-extrabold text-2xl'>
                <p>Grabrielle</p>
                <p>Essence Eau</p>
                <p>De Parfum</p>
              </div>
              <div>
                <span className=' text-[14px] opacity-35 font-semibold font-sans'>
                  A froral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL
                </span>
              </div>
              <div className='my-5'>
                <div className='flex gap-8 items-center'>
                  <span className='font-serif text-2xl text-[color:hsl(158,36%,37%)] font-[900]'>
                    $149.99
                  </span>
                  <span className='line-through text-[color:hsl(158,42%,18%)] opacity-60 text-xs font-[500]'>
                    $169.99
                  </span>
                </div>
              </div>

              <div>
                <div className='flex items-center justify-center p-3 rounded-xl bg-[color:hsl(158,36%,37%)] w-full'>
                  <span className='flex gap-5'>
                    <img src={carticon} alt="" className='w-5 h-5' />
                    <span className='text-[15px] text-white font-bold font-sans'>Add to Cart</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='bg-white w-1/2 flex items-center justify-center p-3 rounded-xl'>
          <span className=" py-4 text-center text-sm text-gray-600">
            <div className="container mx-auto px-4">
              <p>
                Challenge by{' '}
                <a
                  href="https://www.frontendmentor.io?ref=challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:hsl(158,36%,37%)] hover:underline"
                >
                  Frontend Mentor
                </a>
                . Coded by{' '}
                <a
                  href="https://github.com/tuitenthai123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:hsl(158,36%,37%)] hover:underline"
                >
                  TuiTenThai
                </a>
                .
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard