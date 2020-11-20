import React from 'react';
import Head from 'next/head';


class Error extends React.Component {

  render() {
    return (
      <>
        <Head>
          <title>404: Not found</title>
        </Head>
        <div>
        
          <h1>This is not the page you are looking for</h1>
        
        </div>
      </>
    );
  }
}

export default Error;
