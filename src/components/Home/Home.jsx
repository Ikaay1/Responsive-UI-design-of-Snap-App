import React from 'react'
import audio from '../../assets/images/client-audiophile.svg'
import biz from '../../assets/images/client-databiz.svg'
import maker from '../../assets/images/client-maker.svg'
import meet from '../../assets/images/client-meet.svg'
import dhero from '../../assets/images/image-hero-desktop.png'
import mhero from '../../assets/images/image-hero-mobile.png'
import './Home.css'

const Home = () => {
    return (
        <div className='homeflex'>
            <div className='mimg'>
                <img src={mhero} alt="client logo" />
            </div>
            <div className='pdiv'>
                <h1 className='h1'>Make remote work</h1>
                <div className='getdiv'>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                </div>
                <div className='learndiv'>Learn more</div>
                <div className='logodiv'>
                    <img src={biz} alt="databiz logo" />
                    <img src={audio} alt="audiophile logo" />
                    <img src={meet} alt="meet logo" />
                    <img src={maker} alt="maker logo" />
                </div>
            </div>
            <div className="img">
                <img src={dhero} alt="client logo" />
            </div>
        </div>
    )
}

export default Home;