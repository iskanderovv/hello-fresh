import React from 'react';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';

const Footer = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-4 max-w-[1170px] mx-auto px-4 my-12 text-[#067A46]'>
                <ul className='footer__list flex flex-col gap-1 '>
                    <li className='font-sourceSans font-semibold mb-3 text-[#242424]'>HelloFresh</li>
                    <li><a href="#">Students</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Hero Discounts</a></li>
                    <li><a href="#">Recipe Directory</a></li>
                    <li><a href="#">California Supply Chains Act</a></li>
                    <li><a href="#">Delivery Options</a></li>
                </ul>
                <ul className='footer__list flex flex-col gap-1'>
                    <li className='font-sourceSans font-semibold mb-3 text-[#242424]'>Our company</li>
                    <li><a href="#">HelloFresh Group</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
                <ul className='footer__list flex flex-col gap-1'>
                    <li className='font-sourceSans font-semibold mb-3 text-[#242424]'>Work with us</li>
                    <li><a href="#">Partner</a></li>
                    <li><a href="#">Influencers</a></li>
                    <li><a href="#">Affiliates</a></li>
                </ul>
                <ul className='footer__list flex flex-col gap-1'>
                    <li className='font-sourceSans font-semibold mb-3 text-[#242424]'>Contact us</li>
                    <li><a href="#">Help Center & FAQ</a></li>
                    <li><a href="#">Partnership Inquiries</a></li>
                    <li><a href="#">Corporate Sales</a></li>
                    <li><a href="#">Do Not Sell My Personal Information</a></li>
                </ul>
                <ul className='footer__list flex flex-col gap-1'>
                    <li className='font-sourceSans font-semibold mb-3 text-[#056835]'>Download our app</li>
                    <li className='text-[#242424]'>Manage your deliveries from anywhere, anytime.</li>
                </ul>
            </div>
            <div className='border border-[#E4E4E4] '>
                <div className='max-w-[1170px] mx-auto px-4 py-6 flex gap-16 '>
                    <p className='flex-1 lg:flex-none md:flex-none sm:flex-none'>© HelloFresh 2022</p>
                    <ul className='text-[#056835] lg:flex md:flex sm:hidden hidden flex-1 gap-6'>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Accessibility</a></li>
                    </ul>
                    <div className='flex gap-5'>
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                        <a href="#"><img src={instagram} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
