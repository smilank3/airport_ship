
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IoLogoFacebook, IoLogoTwitter,IoLogoGoogle } from 'react-icons/io';



import Container from '../components/Container/Container';
import LoginComp from '../components/Login/Login'



const Login = () => {
  const router = useRouter();




  return (
    <>
      <Head>
        <title>Login </title>
        <meta name="Login page" content="login page" />
      </Head>

    

              <h1>Sign in</h1>
              <LoginComp />
     

   
    
      
 
    </>
  );
};

export default Login;
