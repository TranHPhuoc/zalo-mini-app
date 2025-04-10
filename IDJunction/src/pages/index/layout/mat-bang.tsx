import React, { FC, useState } from 'react';
import { Box, ImageViewer } from 'zmp-ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tt1 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742977867/Du-an-JD-Junction/k7ha8dswbavutjkks6db.jpg';
const tt2 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742977866/Du-an-JD-Junction/fdexsbkbqju7kzmve2o6.jpg';

const sunrise1 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978258/Du-an-JD-Junction/qmmv0ljxqlfs7indfd4h.jpg'
const sunrise2 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978258/Du-an-JD-Junction/wcnwjsv5hisy5mxgjwjc.jpg'

const garden1 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978480/Du-an-JD-Junction/ofpwnltcmbmvb8stl81p.png';
const garden2 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978480/Du-an-JD-Junction/cgrfqdvqpd7loyyk5lnt.jpg';
const garden3 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978480/Du-an-JD-Junction/irvpo08mscofss7nrc69.jpg';

const spring1 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978900/Du-an-JD-Junction/kpfualerab87xejsptdr.png';
const spring2 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978899/Du-an-JD-Junction/n37vulhfmsklmnvxfm4l.jpg';
const spring3 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978900/Du-an-JD-Junction/fcjecr6kxlniqykihlsg.jpg';
const spring4 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978900/Du-an-JD-Junction/ktannmzx9ew8upwgsok4.jpg';
const spring5 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742978900/Du-an-JD-Junction/fp9vp7orduv34cyzl3nh.jpg';

const spr1 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979210/Du-an-JD-Junction/ef4hnutin3vywchajxaw.png';
const spr2 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979210/Du-an-JD-Junction/aejk0aifshc6y1tw7tee.jpg';
const spr3 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979210/Du-an-JD-Junction/jxyl4mycgro2uqpanxef.jpg';
const spr4 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979211/Du-an-JD-Junction/fng3qy5x5ycatbfjruv3.jpg';
const spr5 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979211/Du-an-JD-Junction/mknusohjdiazx2w8yqkl.jpg';

const bliss1 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979624/Du-an-JD-Junction/h8mz3hrjlggkjt7krl8g.png';
const bliss2 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979568/Du-an-JD-Junction/gy9gmsuqwbdpqeqbjgxu.jpg';
const bliss3 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979623/Du-an-JD-Junction/yhwawt15yd47mkguhpht.jpg';

const inf1 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979883/Du-an-JD-Junction/fyk3a5fmrnj3ccnbhitg.png';
const inf2 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979882/Du-an-JD-Junction/ycob2vzaop5dzzbjokac.jpg';
const inf3 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742979882/Du-an-JD-Junction/zljgdgl7lvvgcfpd9z3t.jpg'

const contentData = {
  'tab-1': { fixed: tt1, slides: [tt2] },
  'tab-2': { fixed: sunrise1, slides: [sunrise2] },
  'tab-3': { fixed: garden1, slides: [garden3, garden2] },
  'tab-4': { fixed: spring1, slides: [spring2, spring3, spring4, spring5] },
  'tab-5': { fixed: spr1, slides: [spr2, spr3, spr4, spr5] },
  'tab-6': { fixed: bliss1, slides: [bliss2, bliss3] },
  'tab-7': { fixed: inf1, slides: [inf2, inf3] },
};
const tabContent = {
  'tab-1': 'Dự án ID Junction có mật độ xây dựng gộp toàn khu tối đa 35%; tầng cao xây dựng tối đa cho công trình hỗn hợp 15 tầng, nhà chung cư 7 tầng, nhà thấp tầng 3 tầng.',
  'tab-2': 'Ở khu Sunrise, sự an toàn, riêng tư và tiện ích trong cuộc sống của gia chủ luôn được đặt lên hàng đầu thông qua: Hệ thống camera giám sát an ninh 24/7, cổng tự động và video door phone.',
  'tab-3': 'Garden Shophouse có vườn là một ý tưởng khác biệt, mặt tiền các căn hướng đường song hành và khu thể thao phức hợp. Thiết kế các căn đảm bảo một không gian thuận tiện cho việc kinh doanh, bao bọc trong những mảng vườn xanh mát.',
  'tab-4': 'Đây là dòng sản phẩm đặc trưng dành cho những người trẻ, các không gian sống được thiết kế và phân chia một cách thông minh, hợp lý',
  'tab-5': 'Mẫu nhà này có diện tích quy hoạch riêng để lắp đặt thang máy. Tất cả các căn đều ưu tiên góc nhìn hướng về cảnh quan và các tiện ích nhằm mang đến gia chủ những phút giây thư giãn nhẹ nhàng.',
  'tab-6': 'The Bliss có mặt sau hướng vườn kèm lối riêng thăm vườn. Thiết kế theo không gian biệt thự với mái ngói cổ điển và hàng hiên đón gió.',
  'tab-7': 'Infinity chào đón chủ nhân bằng tầm nhìn không giới hạn, trải rộng đến mặt hồ trung tâm và công viên tiện ích.'
};
const MatBangDuAn: FC = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const handleClick = (tab: string) => setActiveTab(tab);

  const openImageViewer = (imageList: string[], index: number) => {
    setImages(imageList);
    setActiveIndex(index);
    setVisible(true);
  };

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,
  };

  const nen1 = 'https://res.cloudinary.com/dvwozvfcy/image/upload/v1742960642/Du-an-JD-Junction/ianf14rgbgaqvt5yte3a.jpg'

  return (
    <div
      className='p-2'
      style={{
        backgroundImage: `url(${nen1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className='text-center font-tinhHoaHoiTu'>
      <h1 className="text-white text-[1.5em] uppercase">Mặt bằng</h1>
      <strong className="text-[#ffdb8f] text-[2em]"> DỰ ÁN ID JUNCTION</strong>
      <img src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742958384/Du-an-JD-Junction/liwr4srk85mppo9i6bet.png" alt="" 
                style={{
                    width: "90%",
                    margin: "0 auto",
                }}></img>
      </div>

      <div className='font-content text-white my-5'>
        <p>
        ID Junction là khu phức hợp tổng diện tích đất gần 40,7 hecta gồm 650 nhà thấp tầng và 2,000 căn hộ cao tầng; được quy hoạch đầy đủ các hạng mục Khu Nhà ở thấp tầng (Song lập & Đơn lập); Khu Căn hộ cao cấp (Căn hộ cao tầng kết hợp TMDV) Khu Thương mại Dịch Vụ; Trường học liên cấp; Khu Thể thao phức hợp; Khu Quảng trường & Hồ trung tâm.
        </p>
      </div>
      <br />

      <div className='text-center mb-3 grid grid-cols-2 gap-3'>
        
        {Object.keys(contentData).map((tab) => (
          <button
            key={tab}
            className={`button-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleClick(tab)}
          >
            {tab === 'tab-1' ? 'Tổng thể' : tab === 'tab-2' ? 'Sunrise' : tab === 'tab-3' ? 'The Garden Shophouse' : tab === 'tab-4' ? 'The Spring' : tab === 'tab-5' ? 'The Spring +' : tab === 'tab-6' ? 'The Bliss' : 'Infinity'}
          </button>
        ))}
        
      </div>
      

      <div className='p-6'>
        <div className='tab-content text-white font-content'
        style={{
          marginTop: '-30px',
          marginBottom: '10px',
          color: 'white'
        }}>
            <p>{tabContent[activeTab]}</p>
        </div>
        {Object.keys(contentData).map((tab) => (
          <div key={tab} className={activeTab === tab ? 'block' : 'hidden'}>
            <img
              src={contentData[tab].fixed}
              alt={`Ảnh cố định của ${tab}`}
              style={{ maxWidth: '100%', borderRadius: '5px', marginBottom: '20px' }}
              onClick={() => openImageViewer([contentData[tab].fixed], 0)}
            />

            {/* Hiển thị slider nếu có hơn 1 ảnh */}
            {contentData[tab].slides.length > 1 ? (
              <Slider {...sliderSettings}>
                {contentData[tab].slides.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Slide của ${tab}`}
                      style={{ maxWidth: '100%', borderRadius: '5px' }}
                      onClick={() => openImageViewer(contentData[tab].slides, index)}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={contentData[tab].slides[0]}
                alt={`Ảnh slide của ${tab}`}
                style={{ maxWidth: '100%', borderRadius: '5px', marginTop: '10px' }}
                onClick={() => openImageViewer([contentData[tab].slides[0]], 0)}
              />
            )}
          </div>
        ))}
      </div>

      <ImageViewer
        visible={visible}
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images.map((src) => ({ src }))}
      />
    </div>
  );
};

export default MatBangDuAn;
