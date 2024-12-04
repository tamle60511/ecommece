"use client"

import React from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"

import {
  AppWindowIcon,
  HouseSimpleIcon,
  ImagesIcon,
  LockSimpleIcon,
  PackageIcon,
  ReceiptIcon,
  StoreFrontIcon,
  TagIcon,
  UserCircleIcon,
  UsersIcon
} from "@/assets/icons"

import { SidebarMenu } from "@/components/moleculs"
import { NijaLogo } from "@/assets/brands"

// Định nghĩa interface cho props
interface SidebarExpandProps {
  children?: React.ReactNode
  show?: boolean
}

// Định nghĩa menu items
const MENU_ITEMS = [
  {
    icon: <HouseSimpleIcon />,
    name: 'Dashboard',
    variant: 'default',
    href: '/',
    exact: true
  },
  {
    icon: <UsersIcon />,
    name: 'Customers',
    variant: 'sub-menu',
    submenu: [
      { name: 'Users', href: '/customers/users' },
      { name: 'Buyers', href: '/customers/buyers' }
    ]
  },
  {
    icon: <PackageIcon />,
    name: 'Products',
    variant: 'sub-menu',
    submenu: [
      { name: 'Products List', href: '/products/list-products' },
      { name: 'Categories', href: '/products/categories' }
    ]
  },
  // Thêm các menu items khác tương tự
] as const

const SidebarExpand: React.FC<SidebarExpandProps> = ({ children, show }) => {
  return (
    <Transition
      show={show}
      enter='transition-opacity duration-500'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-500'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      className="w-full"
    >
      <section className='relative flex w-full items-start gap-4'>
        <div className='absolute left-6 h-full w-px bg-netral-30' />
        <div className='flex w-full flex-col items-start justify-end gap-2 pl-9'>
          {children}
        </div>
      </section>
    </Transition>
  )
}

const Sidebar: React.FC = () => {
  const [expandedMenus, setExpandedMenus] = React.useState<{[key: string]: boolean}>({
    users: false,
    products: false,
    transactions: false,
    auth: false
  })

  const toggleMenu = (menuKey: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }))
  }

  return (
    <aside
      id='sidebar'
      className='Sidebar h-screen w-64 overflow-y-auto overflow-x-hidden border border-netral-20 bg-white px-6 py-4 pt-8 shadow-sm 2xl:w-72 2xl:pt-10'
    >
      <Link href='/' className='mb-8 flex items-center gap-3 2xl:mb-10'>
        <NijaLogo className='h-7 w-7 2xl:h-8 2xl:w-8' />
        <h5 className='text-body-xl font-semibold uppercase'>Nija Kit</h5>
      </Link>

      <nav className='mt-10 flex w-full flex-col items-start gap-3'>
        {/* Menu items bình thường */}
        <SidebarMenu
          icon={<HouseSimpleIcon />}
          name='Dashboard'
          variant='default'
          href='/'
          exact
        />

        {/* Menu Customers */}
        <SidebarMenu
          active={expandedMenus.users}
          onClick={() => toggleMenu('users')}
          icon={<UsersIcon />}
          name='Customers'
          variant='sub-menu'
        />
        <SidebarExpand show={expandedMenus.users}>
          <SidebarMenu name='Users' variant='expand' href='/customers/users' />
          <SidebarMenu name='Buyers' variant='expand' href='/customers/buyers' />
        </SidebarExpand>

        {/* Menu Products */}
        <SidebarMenu
          active={expandedMenus.products}
          onClick={() => toggleMenu('products')}
          icon={<PackageIcon />}
          name='Products'
          variant='sub-menu'
        />
        <SidebarExpand show={expandedMenus.products}>
          <SidebarMenu name='Products List' variant='expand' href='/products/list-products' />
          <SidebarMenu name='Categories' variant='expand' href='/products/categories' />
        </SidebarExpand>

        {/* Các menu items khác */}
        <SidebarMenu 
          icon={<TagIcon />}
          name='Flash Sales'
          variant='default'
          href='/flash-sale'
        />
        
        {/* ... thêm các menu items khác ... */}
      </nav>
    </aside>
  )
}

export default Sidebar