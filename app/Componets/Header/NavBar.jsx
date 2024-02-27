'use client'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import useFilterEmptyCategory from '@/app/Hooks/useFilterCategory'
import { NavBarVideoURL, categoryLinks, siteName } from '@/app/META'
import { Button } from '@nextui-org/react'
import { HomeIcon, ShoppingBagIcon, User } from 'lucide-react'
import { Jost } from 'next/font/google'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineShoppingCart, } from 'react-icons/ai'
import LoginCard from '../General/Auth/LoginCard'
import MenuButton from '../General/MobileMenuButton'
import { NavigationEvents } from "../NavigationEvents"
import Cart from './Cart'
import Banner from './Componets/Banner'
import useScrollPosition from '@/app/Hooks/useScrollPosition'
import useWindowDimensions from '@/app/Hooks/useGetWindowDeimentions'
import { ImHome, ImMenu } from 'react-icons/im'
import { IoBag, IoBagHandle, IoClose } from 'react-icons/io5'

const jost = Jost({
    weight: '400',
    subsets: ['latin'],
})

function NavBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [navRoute, setNavRoute] = useState([])
    const user = useAUTHListener()
    const { push } = useRouter()
    const category = useFilterEmptyCategory()

    let scrollPosition = 1
    scrollPosition = useScrollPosition()
    const { height, width } = useWindowDimensions();

    const NoCart = usePathname().includes('Checkout')


    useEffect(() => {

    }, [])


    console.log(width)

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
        return (!showMobileMenu)
    }
    const toggleCart = () => {
        setShowCart(!showCart)
        return (!showCart)
    }
    const toggleLogin = () => {
        if (user?.uid) {
            push(`/User/${user.uid}`)
        } else {
            setShowLogin(!showLogin)

        }
    }


    const menu = ['Home', 'Shop']


    const MenuItem = ({ name, showMobileMenu }) => {
        return (
            < Link href={`/${name == 'Home' ? '/' : `${name}`}`} className={` items-center gap-1 justify-center ${showMobileMenu ? 'flex' : 'hidden'} lg:block`}>
                {name == 'Home' && <ImHome size={24} className='block lg:hidden' />}
                {name == 'Shop' && <IoBag size={24} className='block lg:hidden' />}
                <h1 className='font-bold text-lg'>{name}</h1>
            </Link>


        )
    }

    return (
        <div className='h-22 bg-black w-full   center-col overflow-hidden'>

            <Cart showCart={showCart} setShowCart={setShowCart} />
            {(showLogin && (!user?.uid)) && <LoginCard toggleLogin={toggleLogin} />}

            <Suspense>
                <NavigationEvents setRoute={setNavRoute} />
            </Suspense>
            <div className='mt-0 md:mt-0 relative '>

                <div className='w-[25%] absolute right-0  h-8'>
                    <div className=' m-auto h-8 w-24'></div>
                </div>

            </div >

            <nav className='bg-black bg-opacity-25 h-10 lg:h-16 w-full fixed z-50 top-0 flex items-center justify-evenly p-2 '>

                <div className={`${showMobileMenu ? 'h-12 opacity-100 ' : 'h-[1px]  opacity-25'} text-white flex items-center justify-center gap-4 lg:hidden bg-black absolute w-full  top-10  trans`}>
                    {menu.map((item) => {
                        return (
                            <MenuItem key={item} name={item} showMobileMenu={showMobileMenu} />
                        )
                    })}
                </div>




                <h1 className='font1 text-white font-light text-4xl text-center hidden lg:block'>Opulence</h1>

                <div className=''>
                    <div className='flex justify-between lg:w-[15rem]'>
                        <button onClick={toggleMobileMenu}>

                            <ImMenu size={30} color='white' className='lg:hidden' />
                        </button>
                        <div className='lg:flex justify-between w-full hidden text-white'>
                            {menu.map((item) => {
                                return (
                                    <MenuItem key={item} name={item} />
                                )
                            })}
                        </div>

                    </div>

                </div>
                <h1 className='font1 text-white font-light text-2xl text-center lg:hidden block'>Opulence</h1>
                <button className='' onClick={() => { setShowCart(true) }}>
                    <IoBagHandle size={30} color='white' />
                </button>
            </nav>
            {
                navRoute[0]?.toUpperCase()?.includes('SHOP') && <div className=' bg-black-800 bg-opacity-0 w-full'>
                    <div className='h-20 w-full evenly gap-2 font-light text-center m-auto bg-black-900 text-white'>
                        {category.map(item => (<Link key={item} href={item.includes('Hot') ? `/Shop/HotTools` : `/Shop/${item.replace(/\s/g, '')}`}>
                            <div className='h-12 w-20  rounded'>
                                <h1 className='text-white '>{item.includes('Hot') ? 'Tools & Acces...' : item}</h1>
                            </div></Link>))}
                    </div>
                </div>
            }
        </div >

    )
}

export default NavBar

/* 

routes

shop/Luxury wigs , Luxury bundles , luxury lace , hot tools 
book/book appointments, book a class

*/
