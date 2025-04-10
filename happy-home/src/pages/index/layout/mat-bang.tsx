import React, { FC, useState } from 'react';
import { Box, ImageViewer } from 'zmp-ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tt1 = 'https://res.cloudinary.com/dqcrcdufy/image/upload/v1741706148/HPH_12_wawzkv.png';
const tt2 = 'https://res.cloudinary.com/dqcrcdufy/image/upload/v1737549375/mat-bang-tong-the-du-an-1024x507_e1kymo.jpg';

const dh1 = 'https://res.cloudinary.com/dqcrcdufy/image/upload/v1737544569/Mat-bang-tang-dien-hinh-chung-cu-Happy-Home_sfseld.jpg';
const dh2 = 'https://res.cloudinary.com/dqcrcdufy/image/upload/v1737549489/tang_01_zxz3fm.jpg';
const dh3 = 'https://res.cloudinary.com/dqcrcdufy/image/upload/v1737549488/bang-mau-mb-tang-2-a6_xw5pnj.jpg';

const ch1 = 'https://res.cloudinary.com/dqcrcdufy/image/upload/v1737544571/Can-ho-mau-chung-cu-Happy-Home-2_vw4bvd.jpg';
const ch2 = 'https://res.cloudinary.com/dqcrcdufy/image/upload/v1741710568/5_ctfmay.png';
const ch3 = 'https://res.cloudinary.com/dqcrcdufy/image/upload/v1741710567/6_ovhsyw.png';

const contentData = {
  'tab-1': { fixed: tt1, slides: [tt2] },
  'tab-2': { fixed: dh1, slides: [dh2, dh3] },
  'tab-3': { fixed: ch1, slides: [ch2, ch3] },
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

  const nen1 = 'https://res.cloudinary.com/dfzc1gkqr/image/upload/v1726736155/Nh%C3%A0%20%E1%BB%9E%20X%C3%A3%20H%E1%BB%99i%20-%20New%20LaVIDA/w5hywbuv5r8elwkajlsd.png';

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
        <h2 className='text-white text-[1.7em] mt-4'>Mặt bằng Dự án</h2>
        <strong className='text-[#ffdb8f] text-[2.7em]'>HAPPY HOME</strong>
      </div>

      <div className='text-center font-content text-white'>
        <p>
          Chủ đầu tư đã công bố các bản vẽ liên quan đến mặt bằng dự án nhằm giúp khách hàng có thể theo dõi cụ thể các căn hộ một cách rõ ràng. Qua đó giúp bạn có thể lựa chọn vị trí căn hộ phù hợp nhất.
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
            {tab === 'tab-1' ? 'Tổng thể' : tab === 'tab-2' ? 'Tầng điển hình' : 'Căn hộ mẫu'}
          </button>
        ))}
      </div>

      <div className='p-6'>
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
