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

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
           <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBrWilSILk5NGFN23nEFhXqh-fzZOLKFNI&libraries=places"></script>

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
