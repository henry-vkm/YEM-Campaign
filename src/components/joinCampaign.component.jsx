import React from 'react';
import TShirt from '../assets/TShirt.png';

const JoinCampaign = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-10 px-4 lg:px-2">
      <div className="">
        <div className="text-center lg:mt-[80px] mt-[50px]">
          <h1 className="lg:text-[60px] text-[40px]">Join Our Campaign</h1>
          <h1 className="max-w-[1180px] lg:text-[20px] text-[18px] mx-auto leading-40px mt-[10px]">
          Join the Your Emotions Matter (YEM) campaign and celebrate the power of embracing and understanding your feelings for a more authentic and fulfilling life journey.  
          </h1>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between mt-[60px] px-4">
          <h1 className="text-[30px] font-medium leading-[40px] max-w-[480px] py-4">
            <span className="underline decoration-2 underline-offset-[3px]">Share your story </span> 
             about managing and handling  your emotions  
            <span className="underline decoration-2 underline-offset-[3px]"> and win a free T-Shirt</span>
          </h1>
          <div className="mt-[30px]">
            <img src={TShirt} alt="YEM Tee" width="620px" height="530px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinCampaign;