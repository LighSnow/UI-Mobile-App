import Swiper, { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "./../styles/index.scss";

const testimonailsSlider = new Swiper(".js-card-slider", {
    modules: [Pagination],
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
        el: ".js-card-slider-pagination",
        clickable: true,
    },
});
