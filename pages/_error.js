import React from 'react';
import Head from 'next/head';


class Error extends React.Component {
  static async getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <>
        <Head>
          <title>404: Not found</title>
        </Head>
        <div>
          {this.props.statusCode ? (
            `An error ${this.props.statusCode} occurred on server`
          ) : (
          <div>Not found</div>
          )}
        </div>
      </>
    );
  }
}

export default Error;
