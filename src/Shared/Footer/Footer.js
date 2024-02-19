import React from 'react';
import FooterBg from '../../assets/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='w-full pt-10 pb-11' style={{
            background: `url(${FooterBg})`,
            backgroundSize: 'cover'
           
        }}>
            <footer className="footer p-10">

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to='' className="link link-hover">Emergency Checkup</Link >
                    <Link to='' className="link link-hover">Monthly Checkup</Link >
                    <Link to='' className="link link-hover">Weekly Checkup</Link >
                    <Link to='' className="link link-hover">Deep Checkup</Link >
                </nav>
                <nav>
                    <h6 className="footer-title">Our Health</h6>
                    <Link to='' className="link link-hover">Fluoride Treatment</Link >
                    <Link to='' className="link link-hover">Cavity Filling</Link >
                    <Link to='' className="link link-hover">Teath Whitening</Link >
                </nav>
                <nav>
                    <h6 className="footer-title">Our Address</h6>
                    <Link to='' className="link link-hover">New York - 101010 Hudson</Link >
                </nav>

            </footer>
            <div className='text-center'>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>


        </section>
    );
};

export default Footer;