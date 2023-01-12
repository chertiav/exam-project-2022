import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
//===================================================
import style from './SlideBar.module.sass';
import "./SlideBar.css";
import * as CONATSNTS from '../../../constants'

export const SlideBar = (props) => {

	const getStyleName = () => {
		const { carouselType } = props;
		switch (carouselType) {
			case CONATSNTS.CAROUSEL_CONSTANTS.MAIN_SLIDER:
				return style.mainCarousel;
			case CONATSNTS.CAROUSEL_CONSTANTS.EXAMPLE_SLIDER:
				return style.exampleCarousel;
			case CONATSNTS.CAROUSEL_CONSTANTS.FEEDBACK_SLIDER:
				return style.feedbackCarousel;
			default: break;
		}
	};

	const renderSlides = () => {
		const { carouselType } = props;
		switch (carouselType) {
			case CONATSNTS.CAROUSEL_CONSTANTS.MAIN_SLIDER: {
				return Object.keys(props.images).map((key, index) => (
					<SwiperSlide key={index} >
						<img src={props.images[key]} alt="slide" className={style['carousel-cell']} />
					</SwiperSlide>
				));
			}
			case CONATSNTS.CAROUSEL_CONSTANTS.EXAMPLE_SLIDER: {
				return Object.keys(props.images).map((key, index) => (
					<SwiperSlide key={index}>
						<div className={style['example-cell']} >
							<img src={props.images[key]} alt="slide" />
							<Link to={'/not-found'}>
								<p>{CONATSNTS.CAROUSEL_CONSTANTS.EXAMPLE_SLIDER_TEXT[index]}</p>
							</Link>
						</div>
					</SwiperSlide>
				));
			}
			case CONATSNTS.CAROUSEL_CONSTANTS.FEEDBACK_SLIDER: {
				return Object.keys(props.images).map((key, index) => (
					<SwiperSlide key={index}>
						<div className={style['feedback-cell']}>
							<img src={props.images[key]} alt="slide" />
							<p>{CONATSNTS.CAROUSEL_CONSTANTS.FEEDBACK_SLIDER_TEXT[index].feedback}</p>
							<span>{CONATSNTS.CAROUSEL_CONSTANTS.FEEDBACK_SLIDER_TEXT[index].name}</span>
						</div>
					</SwiperSlide >
				));
			}
			default: break;
		}
	};
	return (
		<Swiper
			slidesPerView={1}
			slidesPerGroup={1}
			spaceBetween={10}
			centeredSlides={true}
			loop={true}
			loopFillGroupWithBlank={true}
			navigation={true}
			speed={2000}
			modules={[Pagination, Autoplay, Navigation]}
			autoplay={{
				delay: 5000,
				pauseOnMouseEnter: true,
				disableOnInteraction: false
			}}
			breakpoints={{
				323: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 20
				},
				683: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 30
				},
			}}
			className={getStyleName()}
		>
			{renderSlides()}
		</Swiper >
	)
}
