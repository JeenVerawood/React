import React from 'react'; 
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import img1 from '../img-main/design-igm/4E456147-47DB-4658-9444-8ECBC7502960_1_105_c.jpeg'
import img2 from '../img-main/design-igm/64F0C15E-8CFD-4090-B092-F8115C81853F_1_105_c.jpeg'
import img3 from '../img-main/design-igm/A21851D2-183A-42B2-8EC4-D1D954D350E7_1_105_c.jpeg'
import img4 from '../img-main/design-igm/A51D098F-817E-4CEE-9866-177988158207_1_105_c.jpeg'
import img5 from '../img-main/design-igm/1.png'
import img6 from '../img-main/design-igm/2.png'
import img7 from '../img-main/design-igm/3.png'

const cardData = [
  {
    title: "TAWEETHAPISEK FESTIVAL 1 ST ",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: img2  // ใส่ path ของรูปภาพตรงนี้
  },
  {
    title: "TAWEETHAPISEK FESTIVAL 3 ST ",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: img1  // ใส่ path ของรูปภาพตรงนี้
  },
  {
    title: "STAFF SPORT DAY ",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: img5  // ใส่ path ของรูปภาพตรงนี้
  },  
  {
    title: "STAFF SPORT DAY V1 ",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: img3  // ใส่ path ของรูปภาพตรงนี้
  },
  {
    title: "STAFF SPORT DAY V2",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: img4  // ใส่ path ของรูปภาพตรงนี้
  },
  {
    title: "TAWEETHAPISEK",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: img6  // ใส่ path ของรูปภาพตรงนี้
  },  {
    title: "TAWEETHAPISEK",
    description: "Lorsectetur adipisicing elit. Incidunt corporis distinctio pariatur recusandae? Harum praesentium, molliti",
    image: img7   // ใส่ path ของรูปภาพตรงนี้
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
      <Footer />
    </>
  );
}

export default Design;
