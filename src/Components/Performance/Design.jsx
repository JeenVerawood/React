import React from 'react'; 
import Navbar from '../Navbar';

const cardData = [
  {
    title: "TAWEETHAPISEK",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: ""  // ใส่ path ของรูปภาพตรงนี้
  },
  {
    title: "TAWEETHAPISEK",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: ""  // ใส่ path ของรูปภาพตรงนี้
  },
  // เพิ่มข้อมูลการ์ดอื่นๆ ตามต้องการ
];

function Design() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r md:h-auto font-title from-black to-blue-950">
        <div className="flex flex-col justify-center items-center text-white max-w-7xl m-auto p-12 h-full transition-all duration-500">
          <div className="flex justify-center gap-x-3 items-center">
            <div className="w-2 h-2 bg-white rotate-45"></div>
            <h1 className="text-3xl font-bold transition-opacity text-center duration-500">
              COMPUTER ACHIEVEMENTS
            </h1>
            <div className="w-2 h-2 bg-white rotate-45"></div>
          </div>
          <div className="text-center mb-10">
            <h5 className="mt-3">SUB HEADING GOES HERE</h5>
          </div>
          {/* Layout 2 x _ */}
          <div className="w-full grid grid-cols-2 gap-4">
            {cardData.map((card, index) => (
              <div key={index} className="w-full flex border-2 border-gray-400 p-4 h-72">
                <img src={card.image} alt={card.title} className="w-3/6 h-64 bg-white" />
                <div className="text-center  m-auto w-3/6">
                  <div className="flex items-center mx-auto w-4/5 gap-x-2 justify-center">
                    <div className="w-2 h-2 bg-white rotate-45"></div>
                    <h1 className="text-2xl font-bold">{card.title}</h1>
                    <div className="w-2 h-2 bg-white rotate-45"></div>
                  </div>
                  <h1 className='w-4/5 mx-auto'>{card.description}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
