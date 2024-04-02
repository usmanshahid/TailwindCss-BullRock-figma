import React from 'react'
import toroneon from '../../Assets/Airdrop/toro-neon.png';

function Airdrop() {
    return (
        <>
            <div className="bg-cover bg-center h-auto" style={{ backgroundImage: `url(${toroneon})` }}>

                <div className=" text-white text-4xl font-bold tracking-widest leading-9 text-center pt-7">
                    AIRDROP
                </div>


                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 justify-center items-center py-10'>

                    <div class="text-white h-22 md:h-full md:w-24 p-4 font-bold text-center bg-[#094A31] justify-center border-2 border-green-100">
                        30 DAYS
                    </div>

                    <div class="text-white h-22 md:w-24 p-4 font-bold text-center bg-[#094A31] justify-center border-2 border-green-100">
                        17 HOURS
                    </div>

                    <div class="text-white h-22 md:w-24 p-4 font-bold text-center bg-[#094A31] justify-center border-2 border-green-100">
                        26 MINUTES
                    </div>

                    <div class="text-white h-22  md:w-24 p-4 font-bold text-center bg-[#094A31] justify-center border-2 border-green-100">
                        08 SECONDS
                    </div>
                </div>

                <div className="text-white text-4xl md:text-3xl sm:text-1xl font-bold tracking-widest leading-9 ml-4 md:ml-24 pt-3">
                    Meet the BULL-ROCK <span className="block pt-3">SWAP Token!</span>
                </div>



                <div style={{ width: '100%', maxWidth: '250px', height: '250px' }} className="bg-[#00020A] ml-4 sm:ml-24 mt-10"></div>



                <div style={{ width: '250px' }} className="text-white  ml-24 pt-3  mt-5">
                    The best community token in the world.
                    A deflationary project with a robust more.
                </div>

                <button className="bg-[#094A31] text-white font-bold py-2 ml-24  px-4 rounded  mt-5">
                    Buy BullRock
                </button>
                <button className="  ml-2 bg-[#094A31] text-white font-bold py-2 px-4 rounded mb-24">
                    Claim Airdrop
                </button>


            </div>
        </>
    )
}
export default Airdrop