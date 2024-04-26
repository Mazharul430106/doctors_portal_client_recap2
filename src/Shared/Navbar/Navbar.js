import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => { })
            .catch(err => console.log(err))
    }



    const menuItems = <>
        <li ><Link to='/'>Home</Link></li>
        <li ><Link to='/about'>About</Link></li>
        <li ><Link to='/contact'>Contact</Link></li>
        <li ><Link to='/appointment'>Appointment</Link></li>
        <li ><Link to='/register'>Register</Link></li>
        {
            user?.uid ?
                <>
                    <li ><Link to='/dashboard'>Dashboard</Link></li>
                    <li ><Link onClick={handleLogout} className=''>Logout</Link></li>
                </>
                :
                <li ><Link to='/login' className=''>Login</Link></li>
        }
    </>


    return (
        <div className="navbar shadow-md px-5">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden w-full lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div>
                <label htmlFor="dashboardDrawer" tabIndex={2} role="button"  className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;