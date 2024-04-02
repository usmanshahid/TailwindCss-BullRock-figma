import React, { useState } from 'react';
import '../../index.css'; // Assuming this is your global styles
import logo1 from '../../Assets/Header&Navbar-Assets/logo1.png';
import logo2 from '../../Assets/Header&Navbar-Assets/logo2.png';
import logo3 from '../../Assets/Header&Navbar-Assets/logo3.png';
import logo4 from '../../Assets/Header&Navbar-Assets/logo4.png';
import logomenu from '../../Assets/Header&Navbar-Assets/bullrock.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <div className="bg-black h-15 flex md:flex-row flex-col items-center justify-center">
                    <div className="text-white">
                        You're now on the Ku Coin network
                    </div>

                    <div className="p-4 flex gap-4">
                        <img src={logo1} alt="Logo 1" />
                        <img src={logo2} alt="Logo 2" />
                        <img src={logo3} alt="Logo 3" />
                        <img src={logo4} alt="Logo 4" />
                    </div>
                </div>

                <div className="bg-[#094A31] h-15 flex items-center justify-between md:flex-row md:items-center gap-7">
                    <div className="flex items-center">
                        <img src={logomenu} alt="Logo Menu" className="h-20" />
                    </div>

                    <div className="md:flex flex-wrap justify-centern gap-14">
                        <div class="relative flex flex-wrap items-center justify-between w-full group py-7 shrink-0">
                            <div class={`items-center justify-between hidden gap-12 text-black md:flex ${isOpen ? '' : 'hidden'}`}>
                                <a href="#" class="text-base font-normal text-white hover:text-dark-grey-900">Buy</a>
                                <a href="#" class="text-base font-normal text-white hover:text-dark-grey-900">Claim</a>
                                <a href="#" class="text-base font-normal text-white hover:text-dark-grey-900">Swap</a>
                                <a href="#" class="text-base font-normal text-white hover:text-dark-grey-900">Card</a>
                                <a href="#" class="text-base font-normal text-white hover:text-dark-grey-900">Pay</a>
                                <a href="#" class="text-base font-normal text-white hover:text-dark-grey-900">RoadMap</a>
                                <a href="#" class="text-base font-normal text-white hover:text-dark-grey-900">White Paper</a>
                                <a href="#" class="text-base font-normal text-white hover:text-dark-grey-900">Community</a>
                                <div className=" md:flex flex-row gap-10 mt-3 mb-3">
                                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded md:mx-2">
                                        Connect
                                    </button>
                                </div>
                                <div className="flex gap-4 md:gap-1">
                                    <button className="bg-pink-500 text-white font-bold py-2 px-3 rounded-full">ES</button>
                                    <button className="bg-green-500 text-white font-bold py-2 px-3 rounded-full">EN</button>
                                </div>
                            </div>
                            <button onClick={toggleMenu} class="flex md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black"></path>
                                </svg>
                            </button>

                            {/* <div class={`absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-[#094A31] max-h-${isOpen ? '64' : '0'} py-4 px-4 rounded-8xl top-full`}>
                                <a href="#" class="text-base text-white ">Buy</a>
                                <a href="#" class="text-base text-white ">Claim</a>
                                <a href="#" class="text-base text-white ">Swap</a>
                                <a href="#" class="text-base text-white ">Card</a>
                                <a href="#" class="text-base text-white ">Pay</a>
                                <a href="#" class="text-base text-white ">RoadMap</a>
                                <a href="#" class="text-base text-white ">White Paper</a>
                                <a href="#" class="text-base text-white ">Community</a>
                                <button className="bg-pink-500 text-white font-bold py-2 px-3 rounded-full">ES</button>
                                <button className="bg-green-500 text-white font-bold py-2 px-3 rounded-full">EN</button>
                            </div> */}



                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;
