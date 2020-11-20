/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';


class MyDocument extends Document {


  render() {
    return (
      <Html lang="en" style={{ height: '100%' }}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#1976D2" />
          
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400:latin"
          />
     <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"/>
         

          
        
        </Head>
        <body
    
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}



export default MyDocument;
