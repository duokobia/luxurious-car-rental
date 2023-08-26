import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import car1 from "../../assets/img/car1.jpeg";
// import car2 from "../../assets/img/car2.jpeg";
// import car3 from "../../assets/img/car3.jpeg";
// import car4 from "../../assets/img/car4.jpeg";
// import car5 from "../../assets/img/car5.jpeg";
// import car6 from "../../assets/img/car6.jpeg";
// import car7 from "../../assets/img/car7.jpeg";
// import car8 from "../../assets/img/car8.jpeg";
// import car9 from "../../assets/img/car9.jpeg";
// import car10 from "../../assets/img/car10.jpeg";
// import car11 from "../../assets/img/car11.jpeg";
// import car12 from "../../assets/img/car12.jpeg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function CustomDot({ onClick, ...rest }) {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  const carouselItems = [car1];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button className={active ? "active" : "inactive"} onClick={() => onClick()}>
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
}
function AppCarousel() {
  return (
    <div className="">
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        infinite
        showDots
        customDot={<CustomDot />}
        // autoPlaySpeed={50}
        containerClass="carousel-container"
        centerMode
        focusOnSelect
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        // removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      >
        <div className="card w-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car1} alt="car1" className="ourFleet-image" />
          <h6 className="py-4">Mercedes Benz S Class</h6>
          <div className="d-flex flex-row">
            <button>one</button>
            <button>two</button>
          </div>
        </div>
        {/* <div className="card w-100 h-100 px-2">
          <img src={car2} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car3} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car4} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car5} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car6} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car7} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car8} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car9} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car10} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car11} alt="car1" />
        </div>
        <div className="card w-100 h-100 px-2">
          <img src={car12} alt="car1" />
        </div> */}
        {/* <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
        <div>Item 11</div>
        <div>Item 12</div> */}
      </Carousel>
    </div>
  );
}

export default AppCarousel;
