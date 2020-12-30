// import './banner.scss'

import React from "react";



export class Banner extends React.Component {
  render() {
    let { bannerImg } = this.props;
    return (
      // <!-- Masthead-->
      <header class="masthead bg-primary text-white text-center" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div class="container banner-container d-flex align-items-center flex-column">
          {/* <!-- <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" /> --> */}
          <h1 class="masthead-heading text-uppercase mb-0 wow slideInRight" >NSR farm</h1>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom divider-light wow  fadeIn">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- Masthead Subheading--> */}
          {/* <p class="masthead-subheading font-weight-light mb-0  wow  fadeInRight">Country Chicken With Egg - Duck With Egg - Quail With
                  Egg - Goat </p> */}
        </div>
      </header>
    )
  }
}

