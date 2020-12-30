import React from "react";


import { Header, Footer } from '../../component/common'

// import './mainlayout.scss';

class MainLayout extends React.Component {

  state = {}

  render() {
    let { } = this.state
    let { children,headerLoder } = this.props

    return (
      <>
        <Header />
        {!headerLoder?
        <div class="progress-line header-progress"></div>:''}
          {headerLoder?  <body id="page-top">
          {children}
        </body>:''}
        {headerLoder? <Footer />:''}
      </>
    )
  }
};

export default MainLayout
