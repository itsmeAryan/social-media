import React, { Component } from 'react'
import "./Menu.scss";
import Story from "./story/s1.jpg";
import User from "./img/user12.png";
import Bak from "./fb/1.jpg"
import Bak2 from "./fb/2.jpg"
import Bak3 from "./fb/3.jpg"
import Tap from "./fb/u1.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
export default class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <div className="Menu-container">

                    <div className="user-Story">
                        <div className="Story-pannel">
                        <Swiper
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
                        <SwiperSlide className="user-stories">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide>
            <SwiperSlide className="user-stories">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide>
            <SwiperSlide className="user-stories three">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide>
            <SwiperSlide className="user-stories four">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide>
            <SwiperSlide className="user-stories five">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide>
            <SwiperSlide className="user-stories last-2nd six">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide>
            <SwiperSlide className="user-stories last-2nd seven">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide>
            <SwiperSlide className="user-stories last-2nd seven">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide><SwiperSlide className="user-stories last-2nd seven">
                <div className="user-background">
                    <img src={Story} alt="user story" />
                </div>
                <div className="user-img story">
                    <div className="story-imgs">
                        <div className="story-circle">
                            <img src={User} alt="tag user story" />
                        </div>
                    </div>
                    <div className="user-story name">
                        <span>add story</span>
                    </div>
            </div></SwiperSlide>
            </Swiper>
                          
                        </div>
                    </div>
                    {/* post images and videos */}
                    <div className="post-img upload-img">
                        <div className="post-container">
                            <div className="create-post">
                                <div className="createnoew">
                                    <span className="post-icon">
                                        <i class="fas fa-pen"></i>
                                    </span>
                                    <span className="post-text">create post</span>
                                </div>
                                <div className="Post-body write-post">
                                    <div className="Post-title">
                                        <textarea className="write-me" rows={3} cols={10} placeholder="what's on your mind"></textarea>
                                    </div>
                                    <div className="user-avtar">
                                        <img src={User} alt="write something" />
                                    </div>
                                </div>
                                <div className="Post-option">
                                    <div className="option-tab">
                                        <div className="option-container">
                                            <div className="post-with-me live-video">
                                                <span className="option-icon">
                                                    <i class="fas fa-video"></i>
                                                </span>
                                                <span className="option-text">live video</span>
                                            </div>
                                            <div className="post-with-me live-video">
                                                <span className="option-icon">
                                                    <i class="fas fa-image"></i>
                                                </span>
                                                <span className="option-text">live video</span>
                                            </div>
                                            <div className="post-with-me live-video">
                                                <span className="option-icon">
                                                    <i class="fas fa-camera"></i>

                                                </span>
                                                <span className="option-text">live video</span>
                                            </div>
                                        </div>
                                        <div className="option-menus">
                                            <div className="option-menu-deta">
                                                <div className="option-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* img */}
                    <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* live talk */}
                    <div className="Live-chat">
                        <div className="Live-container">
                            <div className="live-list">
                                <div className="Live-items">
                                    <div className="Live-back">
                                        <div className="live-backgr">
                                            <img src={Tap}  alt="user background " />
                                        </div>
                                        <div className="Live-user">
                                            <div className="use-circle90">
                                            <img src={User}  alt="user photo" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-uso-name">
                                            <span className="uso-name-kl">
                                                keyla
                                            </span>
                                            <span className="use-name">@meiod</span>
                                        </div>
                                        <div className="live-btn">
                                            <span className="live-now">live</span>
                                        </div>

                                </div>
                                <div className="Live-items">
                                    <div className="Live-back">
                                        <div className="live-backgr">
                                            <img src={Tap}  alt="user background " />
                                        </div>
                                        <div className="Live-user">
                                            <div className="use-circle90">
                                            <img src={User}  alt="user photo" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-uso-name">
                                            <span className="uso-name-kl">
                                                keyla
                                            </span>
                                            <span className="use-name">@meiod</span>
                                        </div>
                                        <div className="live-btn">
                                            <span className="live-now">live</span>
                                        </div>

                                </div>
                                <div className="Live-items three">
                                    <div className="Live-back">
                                        <div className="live-backgr">
                                            <img src={Tap}  alt="user background " />
                                        </div>
                                        <div className="Live-user">
                                            <div className="use-circle90">
                                            <img src={User}  alt="user photo" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-uso-name">
                                            <span className="uso-name-kl">
                                                keyla
                                            </span>
                                            <span className="use-name">@meiod</span>
                                        </div>
                                        <div className="live-btn">
                                            <span className="live-now">live</span>
                                        </div>

                                </div>
                                <div className="Live-items live-last four ">
                                    <div className="Live-back">
                                        <div className="live-backgr">
                                            <img src={Tap}  alt="user background " />
                                        </div>
                                        <div className="Live-user">
                                            <div className="use-circle90">
                                            <img src={User}  alt="user photo" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-uso-name">
                                            <span className="uso-name-kl">
                                                keyla
                                            </span>
                                            <span className="use-name">@meiod</span>
                                        </div>
                                        <div className="live-btn">
                                            <span className="live-now">live</span>
                                        </div>

                                </div>
                                <div className="Live-items live-last five">
                                    <div className="Live-back">
                                        <div className="live-backgr">
                                            <img src={Tap}  alt="user background " />
                                        </div>
                                        <div className="Live-user">
                                            <div className="use-circle90">
                                            <img src={User}  alt="user photo" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-uso-name">
                                            <span className="uso-name-kl">
                                                keyla
                                            </span>
                                            <span className="use-name">@meiod</span>
                                        </div>
                                        <div className="live-btn">
                                            <span className="live-now">live</span>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* follow me with people */}
                    <div className="follow-people">
                        <div className="fllow-container">
                            <div className="fllow-list">
                                <div className="follow-item">
                                    <div className="follow-img">
                                        <div className="web-kl">
                                        <img width="50px" src={User} alt="users to follow"  />

                                        </div>
                                      
                                    </div>
                                    <div className="follo-name">
                                            <span className="name-kl">
                                                keyla
                                            </span>
                                            <span className="user-name">@meiod</span>
                                        </div>
                                        <div className="follow-btn">
                                            <span className="follow">follow</span>
                                        </div>
                                </div>
                                <div className="follow-item">
                                    <div className="follow-img">
                                        <div className="web-kl">
                                        <img width="50px" src={User} alt="users to follow"  />

                                        </div>
                                      
                                    </div>
                                    <div className="follo-name">
                                            <span className="name-kl">
                                                keyla
                                            </span>
                                            <span className="user-name">@meiod</span>
                                        </div>
                                        <div className="follow-btn">
                                            <span className="follow">follow</span>
                                        </div>
                                </div>
                                <div className="follow-item item-hide2">
                                    <div className="follow-img">
                                        <div className="web-kl">
                                        <img width="50px" src={User} alt="users to follow"  />

                                        </div>
                                      
                                    </div>
                                    <div className="follo-name">
                                            <span className="name-kl">
                                                keyla
                                            </span>
                                            <span className="user-name">@meiod</span>
                                        </div>
                                        <div className="follow-btn">
                                            <span className="follow">follow</span>
                                        </div>
                                </div>
                                <div className="follow-item item-hide">
                                    <div className="follow-img">
                                        <div className="web-kl">
                                        <img width="50px" src={User} alt="users to follow"  />

                                        </div>
                                      
                                    </div>
                                    <div className="follo-name">
                                            <span className="name-kl">
                                                keyla
                                            </span>
                                            <span className="user-name">@meiod</span>
                                        </div>
                                        <div className="follow-btn">
                                            <span className="follow">follow</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <div className="user-posted-data">
                        <div className="user-posted-container">
                            <div className="user-friend-posts">
                                <div className="user-fd">
                                    <div className="friend-info">
                                        <div className="Inof-left">
                                            <div className="frd-img">
                                                <img src={User} alt="friend avtar" />
                                            </div>
                                            <div className="Frd-deta">
                                                <span className="name">roy</span>
                                                <span className="posted-date">5 hour ago</span>
                                            </div>
                                        </div>
                                        <div className="Info-right">
                                            <div className="fd-post-share">
                                                <div className="post-circle">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </div>
                                                <div className="Share-box">
                                                    <div className="share-container">
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                        <div className="Share-op">
                                                            <div className="share-img">
                                                                <i class="far fa-bookmark"></i>
                                                            </div>
                                                            <div className="Post-save">
                                                                <span className="ps-90">save link</span>
                                                                <span className="ps-91">add this to your saved items</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frd-postdaata">
                                        <div className="frd-title">
                                            <span className="text">
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti
                                                i'm very cool and want to share our thoughts aboput the place where we awere visti i'm very cool and want to share our thoughts aboput the place where we awere visti
                                            </span>
                                        </div>
                                        <div className="frd-img">
                                            <div className="imgs-data">
                                                <div className="img-collection">
                                                    <img  src={Bak} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak2} alt="share data with images" />
                                                </div>
                                                <div className="img-collection">
                                                    <img  src={Bak3} alt="share data with images" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-likers">
                                        <div className="Post-like-icon">
                                            <div className="like-btn">
                                                <span className="btn-circle">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                            </div>
                                            <div className="like-btn">
                                                <span className="btn-circle meta-liker">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="like-numbr">
                                                <span className="text">2.8k likes</span>
                                            </div>
                                            <div className="comment0">
                                                <span className="comment-icon">
                                                    <i class="far fa-comment"></i>
                                                </span>
                                                <span className="text">comment</span>
                                            </div>
                                        </div>
                                        <div className="post-shr">
                                            <span className="shr-po icon78">
                                                <i class="fas fa-share"></i>
                                            </span>
                                            <span className="text">share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
