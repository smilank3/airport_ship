
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IoLogoFacebook, IoLogoTwitter,IoLogoGoogle } from 'react-icons/io';



import Container from '../../components/Container/Container';
import SignUpComp from '../../components/SignUp/SignUp'



const signUp = () => {
  const router = useRouter();




  return (
    <>
      <Head>
        <title>Login </title>
        <meta name="Login page" content="login page" />
      </Head>

  
              <SignUpComp isAdmin={true} />
     

   
    
      
 
    </>
  );
};

export default signUp;
