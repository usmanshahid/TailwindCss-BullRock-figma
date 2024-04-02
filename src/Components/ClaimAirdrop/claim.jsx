import React from 'react'
import setting from '../../Assets/claim/vector.png';
import kcs from '../../Assets/claim/kcs.png';


function ClaimairDrop() {
    return (
        <>
            <div className="bg-[#199A6F]  h-auto flex text-center   flex-col " >

                <div className="text-white text-4xl text-center pt-10" style={{ fontFamily: 'Nunito', letterSpacing: '20px' }}>
                    CLAIM AIRDROP
                </div>


                <div className="block text-white text-1xl pt-10" >Claim your token now and start buying at the lowest market price.
                </div>

                <div className="block text-white text-3xl pt-5 style={{fontFamily:'Nunito'}}  "> 2,000,000,000 BLRS
                </div>

                <div>
                    <button className="bg-[#06442d] text-white font-bold py-2  mt-10 px-4 rounded">
                        Claim AirDrop Here
                    </button>
                </div>
                <div className="block text-black text-1xl pt-5 font-bold style={{fontFamily:'Nunito'}}">
                    CLAIM NOW AND GET 10,000 BLRS FOR FREE (+GAS KCS)
                </div>

                <div class="flex justify-center">
                    <div style={{ width: "50rem" }} class="border-t border-white mt-10"></div>
                </div>

                <div className="block text-white text-3xl pt-5  style={{fontFamily:'Nunito'}} ">Buy BULLROCK SWAP (BLRS)</div>

                <div style={{ fontFamily: 'Nunito', fontSize: '12px' }} className='text-white mt-5 '>  MIN: ~1 KCS / MAX: ~100 KCS (+GAS KCS) </div>


                <div class="flex justify-center  ">
                    <div style={{ width: '400px', height: '450px' }} className="bg-[#15865F] border-4 border-black border-opacity-100  mt-10 rounded-lg">

                        <div className="flex items-center pt-4 justify-around gap-12">
                            <div className="font-nunito text-white text-2xl ">SWAP</div>
                            <div className="">
                                <img src={setting} alt="Setting" />
                            </div>
                        </div>


                        <div className="bg-[#032419] w-auto h-auto mt-4 border-2 border-black border-opacity-50 rounded-lg mx-10 ">
                            <div className="font-nunito pt-5">From</div>
                            <div className="flex items-center pt-4 justify-between gap-3 mx-2">
                                <div className="font-nunito text-white text-2xl ">5</div>
                                <div className="">
                                    <button>
                                        <img src={kcs} alt="kcs" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='mx-40 '>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </div>

                        <div className="bg-[#032419] w-auto h-auto mt-4 border-2 border-black border-opacity-50 rounded-lg mx-10 ">
                            <div className="font-nunito pt-5">To</div>
                            <div className="flex items-center pt-4 justify-between gap-3 mx-2">
                                <div className="font-nunito text-white text-1xl ">7226040005</div>
                                <div className="">
                                    <button>
                                        <img src={kcs} alt="kcs" />
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div>
                            <button class=" mt-5 bg-red-600 bg-[#000519] text-white text-sm px-4 py-2  border rounded-full">
                                BUY BULLROCK SWAP </button>
                        </div>






                    </div>
                </div>


                <div className="text-white items-center  mt-10">
                    For every purchase that your referral makes, you will receive an additional 10% token to your wallet.
                    <br></br>



                    <br></br>

                    <span> TOKEN ADDRESS: 0x8A80827cbBF4bf61fDc95b62CC157aac1b3C70Ca</span>
                </div>
                <div class="flex justify-center">
                    <div style={{ width: "100%", maxWidth: "50rem" }} class="border-t border-white mt-10"></div>
                </div>
                <div className="text-white mt-20">
                    Invited by
                </div>
                <div>
                    <button style={{ width: "100%", maxWidth: "300px" }} className="bg-[#094A31]  text-white font-bold py-2  mt-10 px-4 rounded">

                        CONNECT TO YOUR WALLET
                    </button>
                </div>
                <div className=" text-white mt-10 items-center mx-3  sm:px-6 lg:px-8 ">
                    For referring another partner, you automatically receive 5,000 BLRS
                </div>
                <div class="flex justify-center">
                    <div style={{ width: "100%", maxWidth: "50rem" }} class="border-t border-white mt-10"></div>
                </div>
                <div className="text-white  mt-20">
                    My referral link
                </div>

                <div>
                    <button style={{ width: "100%", maxWidth: "300px" }} className="bg-[#094A31]  text-white font-bold py-2  mt-10 px-4 rounded">

                        Your KCS ADDRESS
                    </button>
                </div>
                <div>
                    <button style={{ width: "100%", maxWidth: "300px" }} className="bg-[#094A31] sm:w-200 mb-14 text-white font-bold py-2 mt-10 px-4 rounded">

                        Open My Referal Link
                    </button>
                </div>
            </div >
        </>
    )
}
export default ClaimairDrop