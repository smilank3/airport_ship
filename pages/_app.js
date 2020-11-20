


import React from 'react';





import Navigation from '../components/navigation'
import App from 'next/app'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
// theme
import Layout from '../components/Layout/Layout'
import sendRequest from '../lib/sendRequest'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';

import '../assests/index.css'

  class MyApp extends App{



      static getAuthenticationState(appContext) {


       let token = '';

    if (appContext && appContext.ctx) {
      token = nextCookie(appContext.ctx)['token'];
    } else {
      token = cookie.get('token');
    }

    const isAuthenticated = token !== undefined;

    return {
      token,
      isAuthenticated,
    };
  }
    static async getInitialProps(/*{Component,ctx}*/appContext){

let {token,isAuthenticated}=this.getAuthenticationState(appContext);







     const {req,res}=appContext.ctx;
   

let userProfile;
    if(token){
 

       userProfile=await sendRequest('/api/User/profile',{method:'GET',headers:{token}})
       
    }




let appProps=await App.getInitialProps(appContext);

let props={...appProps,isAuthenticated,userProfile,token};

      return {props}
    }
    componentDidMount() {
    
    }

    render() {



      const {Component,pageProps,isAuthenticated,userProfile,cookie,token}=this.props;

 let renderProps={...pageProps,isAuthenticated,userProfile,token}





      return (


     <div>

        
          <Layout {...this.props.props}>
          <Component {...this.props.props}/>
       
         
          </Layout>
      </div>
      );
    }
  }

 

export default MyApp;

