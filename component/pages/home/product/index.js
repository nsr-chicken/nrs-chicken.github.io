// import './banner.scss'

import React from "react";
import Swiper from 'react-id-swiper';


export class Product extends React.Component {
    render() {

        const params = {
            spaceBetween: 30,
            ContainerEl: 'section',
            WrapperEl: 'section',
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // },
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true
            // },
            // slidesPerView: 4,
            // lazy: true,
            rebuildOnUpdate: true,
            // centeredSlides: true,

            slidesPerView: 4,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // renderPrevButton: () => <span className="swiper-button-prev"><img src="./static/images/icons/arrow_forward-24px.svg"></img></span>,
            // renderNextButton: () => <span className="swiper-button-next"><img src="./static/images/icons/arrow_back-24px.svg"></img></span>,
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                567: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
            }
        }
        let { productList, productLoder } = this.props;
        return (
            // <!-- Portfolio Section-->
            <section class="page-section portfolio product-page" id="product">
                <div class="container-fluid">
                    {/* <!-- Portfolio Section Heading--> */}
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Product</h2>
                    {/* <!-- <iframe src="./test.html"></iframe> --> */}

                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Grid Items--> */}

                    <div class="row pr-5 pl-5">
                        {productLoder && [1, 2, 3, 4].map((data, i) =>

                            <div className="col-md-3 ">
                                <div className={`card mb-4 `} >
                                    <div className="card-img-top" style={{ height: '250px' }}>
                                        <div className="align-items-center h-100 d-flex justify-content-center">
                                            <div class="lds-ripple"><div></div><div></div></div>
                                        </div>
                                    </div>
                                    <div className="card-body" style={{ height: '221px' }}>
                                        <div className="ph-loader ph-19h mb-3 w-50"></div>
                                        <div className="ph-loader ph-5h w-25"></div>
                                    </div>
                                </div>
                            </div>)}
                        <Swiper {...params}>
                            {!productLoder && productList.map(({ distribution, Image, Price, saleType, name,active }, i) =>
                            
                          
                                        <div className="item">
                                            <div className="card border-0 shadow mb-5">
                                                <img className="card-img-top" src={Image} alt="Card image cap" />
                                                <div class="card-body">
                                                    <h5 class="card-title">{name}</h5>
                                                    <p class="card-text">{distribution}</p>
                                                    <h5 className="text-right">1{saleType} {Price} ₹</h5>
                                                </div>
                                            </div>
                                        </div> 
                                  
                               
  )}
                        </Swiper>

                    </div>










                </div>

            </section>
        )
    }
}

