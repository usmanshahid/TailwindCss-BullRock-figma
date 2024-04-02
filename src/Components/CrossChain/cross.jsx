import React from 'react'
import tech from '../../Assets/CrossChain/3d-tech.png';

function Cross() {
    return (
        <>
            <div style={{ backgroundImage: `url(${tech})` }} className="pt-20">

                <div className='flex md:flex-row flex-col items-center justify-center md:gap-6'>

                    <div style={{ width: '100%', maxWidth: '350px', height: '200px' }} className="mt-4 border-2 rounded-lg flex items-center justify-center">
                        <div className='text-white text-center'>
                            Scalable Automated Liquidity Pools

                            <div className='pt-2 mx-auto ml-4 mr-4'>
                                With our custom-built scalable auto-LP injection, you can just sit back and hold Bullrock Swap. Let it rock for you.
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', maxWidth: '350px', height: '200px' }} className="mt-4 border-2 rounded-lg flex items-center justify-center">
                        <div className='text-white text-center'>
                            Scalable Automated Liquidity Pools

                            <div className='pt-2 mx-auto ml-4 mr-4'>
                                With our custom-built scalable auto-LP injection, you can just sit back and hold Bullrock Swap. Let it rock for you.
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', maxWidth: '350px', height: '200px' }} className="mt-4 border-2 rounded-lg flex items-center justify-center">
                        <div className='text-white text-center'>
                            Scalable Automated Liquidity Pools

                            <div className='pt-2 mx-auto ml-4 mr-4'>
                                With our custom-built scalable auto-LP injection, you can just sit back and hold Bullrock Swap. Let it rock for you.
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex items-center  justify-center pb-4'>
                    <button className="bg-[#094A31] text-white font-bold py-2 mt-4 px-4 rounded">
                        Go To White Paper
                    </button>
                </div>

            </div>
        </>
    )
}
export default Cross