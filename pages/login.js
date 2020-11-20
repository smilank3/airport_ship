
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IoLogoFacebook, IoLogoTwitter,IoLogoGoogle } from 'react-icons/io';



import Container from '../components/Container/Container';
import LoginComp from '../components/Login/Login'



const Login = (props) => {
  const router = useRouter();



  return (
    <>
      <Head>
        <title>Login </title>
        <meta name="Login page" content="login page" />
      </Head>

    

             
              <LoginComp isAdmin={false}/>
     

   
    
      
 
    </>
  );
};

export default Login;
