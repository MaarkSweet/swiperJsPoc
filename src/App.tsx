import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import swiperData from './data/slides.json'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  console.log(swiperData);


  return (
    <div className="columns-2 w-screen" /* style={{ maxWidth: '100vh' }} */>
      <div className='flex mb-8'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className="text-xl font-bold mb-8">
          Swiper horizontal desk to vertical mobile
        </h1>
      </div>

      <div className="bg-slate-200 p-4">
        {/* creer un slider horiszontal avec le module swiper */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1.5}
          spaceBetween={16}
          navigation
          breakpoints={{
            // when widow is >= 600 slidesPerView 0.5
            320: {
              slidesPerView: 0.5,
            },
            // when window width is >= <breakpoint>
            800: {
              slidesPerView: 1.8,
            },
          }}
          className="mySwiper"
        >
          {/* [...Array(10)] */}
          {swiperData.map(({ id, title, description, image }) => (
            <SwiperSlide key={id}>
              <Card title={title} description={description} image={image} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>


    </div>
  )
}

export default App
