'use client'
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { ImHome, ImMenu } from "react-icons/im";
import { IoBag, IoBagHandle, IoClose } from "react-icons/io5";
import ProductView from "./Shop/Componets/ProductView";
import ProductsList from "./Shop/Componets/ProductsList";
//import ProductView from '../Support/ProductView';


function Home() {
  const [showCart, setShowCart] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)
  const [showShopView, setShowShopView] = useState(false)


  const mock = {
    price: 126,
    caption: 'this is the description',
    media: ['https://img.ltwebstatic.com/images3_pi/2021/09/13/16315032568193ac51c3403e29d4a0b00ad9cef0e9_wk_shein_thumbnail_900x.webp',
      'https://s3-eu-west-1.amazonaws.com/emap-nibiru-prod/wp-content/uploads/sites/2/2020/11/02173926/REISS_LUX_LEISURE_3648-1024x683.jpg',
      'https://img.ltwebstatic.com/images3_pi/2021/08/19/162936919953106120b021e87432cf0fd7cdb99e42.webp',

    ]
  }


  return (
    <div className='bg-white  relative overflow-x-hidden'>

      <ProductView
        showShopView={showShopView}
        setShowShopView={setShowShopView}
      />

      <div className='absolute h-screen w-screen hidden lg:block bg-[#fff9ee] '>

        <div className='w-40 top-20 left-auto trans ml-4 xl:ml-40 relative'>
          <h1 className='text-6xl font-extrabold '>Luxury</h1>
          <h1 className='text-6xl font-bold '>Lounge</h1>
          <h1 className='text-6xl font-bold '>Wear</h1>
        </div>

        <div className='xl:w-64 lg:w-48 trans top-20 left-auto ml-4 xl:ml-40 relative'>
          <h1 className='text-3xl font-bold font1 ' >100% Premier line silk</h1>


        </div>


      </div>


      <div className='md:h-[40rem] w-full flex items-center justify-center rounded-b-full  overflow-hidden'>
        <img className='h-auto lg:h-[50rem]   object-cover' src="https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww" alt="" />

      </div>
      <div className='absolute top-56 w-full center'>
        <motion.div
          initial={{
            x: "100%",
            opacity: '0%'
          }}
          animate={{
            x: "0%",
            opacity: '100%'
          }}
          className='grid grid-cols-12 md:w-3/4 xl:w-1/2 p-8 m-auto   overflow-hidden'>
          {[

            'https://images.unsplash.com/photo-1607892381203-0c54bd738575?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1627858266901-0429f55811d8?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            'Images/icon.png',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1517583106829-61e14fcbddf5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1532675432006-329c6fed7045?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'




          ].map((item, index) => {
            if (item == 'Images/icon.png' || item == 'Images/icon.png?t=1707812753283')
              return (
                <div key={index} className='col-span-4 group relative h-auto flex items-center justify-center'>
                  <div className='absolute  h-full w-full items-center justify-center flex'>
                    <h1 className='font-light group-hover:w-full text-white bg-black w-3/4  text-center trans-slow'>Shop Now</h1>
                  </div>
                  <img className='object-cover  h-full w-full m-auto' src={item} alt="" />
                </div>
              )

            return (
              <div className={`
                        ${index == 0 ? 'rounded-tl-full' : ''}
                        ${index == 8 ? 'rounded-br-full' : ''}
                        ${index == 2 ? 'md:rounded-tr-xl' : ''}
                        ${index == 8 ? 'md:rounded-bl-xl' : ''}
                         overflow-hidden   col-span-4  h-auto  flex items-center justify-center`}>
                <img className='w-full h-full object-cover trans-slow hover:scale-125 scale-100  aspect-square' src={item} alt="" />

              </div>
            )
          })}



        </motion.div>
      </div>

      <div className=' xl:top-72 lg:top-[30rem]  relative'>
        <h1 className='mt-24 mb-10 text-5xl text-center text-black font-light  '> NEW Arrivals</h1>



        <motion.div
          initial={{
            x: "-100%",
            opacity: '0%'
          }}
          animate={{
            x: "0%",
            opacity: '100%'
          }}
          className='gr id gri d-cols-4 relative '>

          <ProductsList search={'isNew'} category={'true'} list={true} limit={10} />

          {/* {[
            "https://www.bbxbrand.com/cdn/shop/files/2833BLACKSLIM_a2a384b0-6dc3-4f12-87cb-2c01d4956c4c.png?v=1706145096",
            'https://www.bbxbrand.com/cdn/shop/files/0083SLIM.png?v=1707756379',
            'https://www.bbxbrand.com/cdn/shop/files/0238SLIM.png?v=1706143758',
            'https://www.bbxbrand.com/cdn/shop/files/1358SLIM.png?v=1706181209'
          ].map((item, index) => {
            return (
              <button onClick={() => {
                setShowShopView({
                  name: 'Luxury Lounge Wear',
                  price: 176,
                  caption: 'brand new luxury wear',
                  media: mock.media
                })
              }} key={index} className=' group border-opacity-0 hover:border-opacity-100 rounded-lg relative  border-gray-700 trans flex items-center justify-center'>
                <div className='shopicon'>
                  <img className='object-cover h-72 lg:h-[35rem] ' src={item} alt="" />
                </div>
                <div className='absolute bottom-10 opacity-0 bg-opacity-75 group-hover:opacity-100 trans  py-2 w-3/4 rounded bg-black'>
                  <h1 className='text-white text-2xl text-center'>$175</h1>
                </div>
              </button>
            )
          })} */}


        </motion.div>
      </div>
    </div>
  )
}

export default Home
