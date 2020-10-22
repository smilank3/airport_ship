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
