import { Card } from '@nextui-org/react'
import React from 'react'
import { menu } from './Menu/AdminMenu'
import { AdminHome } from './Pages/AdminHome'
import { AdminOrders } from './Pages/AdminOrders'
import { AdminProduct } from './Menu/AdminProduct'

const AdminBody = ({ selectedMenu }) => {
    console.log(selectedMenu == menu[1].name)
    return (
        <div className={`Body p-10 h-screen border-green-700 border w-full bg-white`}>
            <h1 className="font-bold font-2xl text-black">{selectedMenu}</h1>
            <Card className="w-full max-h-full h-auto p-4 mt-5  min-h-32">
                {selectedMenu == menu[0] && <AdminHome />}
                {selectedMenu == menu[1].name && <AdminOrders />}
                {selectedMenu == menu[1].menus[0] && <AdminHome />}
                {selectedMenu == menu[1].menus[1] && <AdminHome />}
                {selectedMenu == menu[2].name && <AdminProduct />}
                {selectedMenu == menu[2].menus[0] && <AdminHome />}
                {selectedMenu == menu[2].menus[1] && <AdminHome />}
                {selectedMenu == menu[2].menus[2] && <AdminHome />}
                {selectedMenu == menu[2].menus[3] && <AdminHome />}
                {selectedMenu == menu[3].name && <AdminHome />}
                {selectedMenu == menu[3].menus[0] && <AdminHome />}
                {selectedMenu == menu[4] && <AdminHome />}
                {selectedMenu == menu[5] && <AdminHome />}

            </Card>
        </div>
    )
}

export default AdminBody