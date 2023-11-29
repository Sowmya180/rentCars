import React, { useState } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import styles from "./Find.module.css";
import "./Location.css";
import LocationForm from "./LocationForm";

const Find = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleClick = (car) => {
    console.log("handleClick triggered");
    setSelectedCar(car);
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    setShowForm(false);
  };

  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>IGNITE YOUR JOURNEY</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            340: { width: 200, slidesPerView: 1 },
            768: { width: 768, slidesPerView: 4 },
            1040: { width: 1040, slidesPerView: 5 },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide
            id="carsSection"
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                make: "Audi",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "823$",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              make="Audi"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                make: "BMW",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "213$",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              make="BMW"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                make: "Chevrolet",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "267",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              make="Chevrolet"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                make: "Nisaan",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "254",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              make="Nissan"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                make: "Mercedes-Benz",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "132",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              make="MercedesBenz"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                make: "Toyota",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "212",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              make="Toyota"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                make: "Jeep",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "231",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              make="Jeep"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                make: "Ford",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "123$",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              make="Ford"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                make: "Tesla",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "231",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              make="Tesla"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                make: "Porsche",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "291",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              make="Porsche"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                make: "Rolls Royce",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "531",
              })
            }
          >
            <Card
              image="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600"
              make="Rolls Royce"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600",
                make: "Maaserati",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "201",
              })
            }
          >
            <Card
              image="https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600"
              make="Maaserati"
            />
          </SwiperSlide>

          <SwiperSlide
            onClick={() =>
              handleClick({
                image:
                  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                make: "Range Rover",
                capacity: 5,
                bagCapacity: 5,
                mileage: "Unlimited mileage",
                transmission: "automatic",
                price: "271",
              })
            }
          >
            <Card
              image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              make="Range Rover"
            />
          </SwiperSlide>
        </Swiper>
        {showForm && selectedCar && (
          <LocationForm
            selectedCar={selectedCar}
            onSubmit={handleFormSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Find;
