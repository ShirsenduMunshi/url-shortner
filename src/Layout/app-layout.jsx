import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '@/components/Header';

const AppLayout = () => {
  return (<>
    <main className='min-h-screen container mx-auto'>
        <Header/>
        <Outlet />
    </main>
    <Footer />
  </>)
}

export default AppLayout;
