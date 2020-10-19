


import React from 'react';






import App from 'next/app'

// theme
import Layout from '../components/Layout/Layout'

import '../assests/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


  class MyApp extends App{
    static async getInitialProps({Component,ctx}){

      const pageProps={};

      if(Component.getInitialProps){
        Object.assign(pageProps, await Component.getInitialProps(ctx))
      }


      return {pageProps}
    }
    componentDidMount() {
    
    }

    render() {


      const {Component, pageProps}=this.props;
console.log('0-------------------app .js')
      console.log(this.props)
      return (


     
          <Layout>

          
         
            <Component {...pageProps} />
         
          </Layout>
      
      );
    }
  }

 

export default MyApp;

