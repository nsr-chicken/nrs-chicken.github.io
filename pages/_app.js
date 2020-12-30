import 'react-notifications-component/dist/theme.css'
import '../assets/scss/index.scss';
import React from "react";
import App from "next/app";

import ReactNotification from 'react-notifications-component';
// import { Provider } from 'react-redux';
 class MyApp extends App {

    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <>
                <ReactNotification />
                <Component {...pageProps} />
            </>
        );
    }
}


export default MyApp