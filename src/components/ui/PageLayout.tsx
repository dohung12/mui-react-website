import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import CallToAction from './CallToActionBlock'
const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CallToAction />
      <Footer />
    </>
  )
}

export default PageLayout
