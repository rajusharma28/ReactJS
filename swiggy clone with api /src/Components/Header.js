
// // first div: swiggy ka logo

// export default function Header(){


//     return (
//         <header className="bg-[#ff5200] font-serif">
//             <div className="flex justify-between container mx-auto py-8">
//                 <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
//                 <div className=" text-white text-base font-bold flex gap-15 items-center">
//                     <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
//                     <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
//                     <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get The App</a>
//                     <a className="border border-black bg-black py-3 px-4 rounded-2xl"target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
//                 </div>
//             </div>

//             <div className="pt-16 pb-8 relative">
//                  <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
//                  <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
//                 <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">
//                     Order Food and groceries. Discover best restaurants. Swiggy it!
//                 </div>
//                 <div className="max-w-[70%] container mx-auto flex gap-5 mt-10">
//                  <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Delhi, India"></input>
//                  <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaurant and items for more"></input>
//                 </div>
//             </div>

//             <div className="max-w-[80%] container mx-auto flex">
//                 <a href="https://www.swiggy.com/restaurants">
//                     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
//                 </a>
//                 <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
//                     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
//                 </a>
//                 <a href="https://www.swiggy.com/dineout">
//                     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
//                 </a>
//                 <a href="https://www.swiggy.com/genie">
//                     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
//                 </a>

//             </div>
//         </header>
//     )
// }




export default function Header() {
    return (
        <>
            <header className="bg-[#ff5200] font-serif  ">
                <div className="container mx-auto flex justify-between items-center py-5">

                    {/* Left: Swiggy Logo */}
                    <div className="flex items-center">
                        <img
                            className="h-12 w-auto"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                            alt="swiggy-logo"
                        />
                    </div>

                    {/* Right: Menu */}
                    <nav className="flex items-center gap-8 text-white text-base">

                        <a target="_blank" href="http://swiggy.com/corporate/">Swiggy Corporate</a>

                        <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
                            Partner With Us
                        </a>

                        <a
                            className="border border-white py-2 px-4 rounded-md"
                            target="_blank"
                            href="http://swiggy.com"
                        >
                            Get The App
                        </a>

                        <a
                            className="bg-black text-white rounded-full py-2 px-6"
                            target="_blank"
                            href="http://swiggy.com"
                        >
                            Sign In
                        </a>

                    </nav>
                </div>


{/* Parent section with same font */}
        <div className="font-inter">

  {/* Hero Section */}
  <div className="pt-24 pb-16 relative bg-[#ff5200] overflow-hidden">

    {/* Left Veggies Image */}
    <img
      className="h-72 w-auto absolute top-0 left-0 opacity-80 select-none pointer-events-none"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
      alt=""
    />

    {/* Right Sushi Image */}
    <img
      className="h-72 w-auto absolute top-0 right-0 opacity-80 select-none pointer-events-none"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
      alt=""
    />

    {/* Title */}
   
<div className="container mx-auto max-w-3xl relative  text-center ml-30px">
  <h1 className="text-[30px]  text-white font-bold">
    Order food & groceries.<br />
    Discover best restaurants
    Swiggy it!
  </h1>
</div>

  </div>

  {/* Search Section */}
  <div className="container mx-auto max-w-3xl mt-10 flex gap-4">

    <input
      className="bg-white w-1/3 p-4 rounded-lg shadow-md text-black outline-none text-lg"
      placeholder="Mumbai, India"
    />

    <input
      className="bg-white w-2/3 p-4 rounded-lg shadow-md text-black outline-none text-lg"
      placeholder="Search for restaurants and items"
    />

  </div>

       </div>
<div className="max-w-[80%] mx-auto flex gap-4">
  
  <a href="https://www.swiggy.com/restaurants">
    <img 
      className="w-[200px] h-[180px] mt-5  "
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" 
    />
  </a>

  <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
    <img 
      className="w-[200px] h-[180px]  mt-5  "
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" 
    />
  </a>

  <a href="https://www.swiggy.com/dineout">
    <img 
      className="w-[200px]  h-[180px]  mt-5 "
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" 
    />
  </a>

  <a href="https://www.swiggy.com/restaurants">
    <img 
      className="w-[200px]  h-[180px]  mt-5 "
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" 
    />
  </a>

</div>



            </header>
        </>
    );
}
