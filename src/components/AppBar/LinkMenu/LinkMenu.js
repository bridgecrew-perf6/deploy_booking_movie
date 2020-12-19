import React from 'react';
import { Link } from 'react-router-dom';
import { CINEMA_PAGE, CONTACT_PAGE, HOME_PAGE } from '../../../constants/constant';

const LinkMenu = () => {
  return (
    <>
      <Link
        className='link link-menu'
        to={HOME_PAGE}
      >Home</Link>
      <Link
        className='link link-menu'
        to={CINEMA_PAGE}
      >Cinema</Link>
      <Link
        className='link link-menu'
        to={CONTACT_PAGE}
      >Contact</Link>
    </>
  )
}

export default LinkMenu
