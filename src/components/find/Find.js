import React, { useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
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

  const cars = [
    {
      image:
        "https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      make: "Audi",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "823$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      make: "BMW",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "213$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      make: "Chevrolet",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "267",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      make: "Nisaan",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "254",
    },
    {
      image:
        "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      make: "Mercedes-Benz",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "132",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      make: "Toyota",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "212",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      make: "Jeep",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "231",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      make: "Ford",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "123$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      make: "Tesla",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "231",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      make: "Porsche",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "291",
    },
    {
      image:
        " https://images.unsplash.com/photo-1599912027611-484b9fc447af?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      make: "Rolls Royce",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "531",
    },
    {
      image:
        "https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600",
      make: "Maaserati",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "201",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      make: "Range Rover",
      capacity: 5,
      bagCapacity: 5,
      mileage: "Unlimited mileage",
      transmission: "automatic",
      price: "271",
    },
  ];

  const handleClick = (car) => {
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
          {cars.map((car, index) => (
            <SwiperSlide key={index} onClick={() => handleClick(car)}>
              <Card image={car.image} make={car.make} />
            </SwiperSlide>
          ))}
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
