import React from 'react';
import googleLogo from '../assets/google-logo.svg'; // Assuming you have the Google logo asset

const EmaiAuth = () => {
  return (
    <div style={{
      width: '460px',
      height: '312px',
      padding: '24px 40px 40px 40px',
      gap: '48px',
      borderRadius: '17px 17px 17px 17px',
      borderWidth: '1px 0px 0px 0px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      background: "linear-gradient(138.97deg, #111214 5.16%, #121212 105.18%)",
      opacity: 1,
      color:"white",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'Open Sans, sans-serif',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '31px',
  textAlign: 'center',
    }}>
      <div style={{ textAlign: 'center',marginBottom:"-20px", color:"white", }}>
        <h2>Create a New Account</h2>
      </div>

      {/* Sign Up with Google Button */}
      <button style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        padding: '10px',
        borderRadius: '4px ',
        backgroundColor: 'white',
        border: '1px solid grey',
        cursor: 'pointer',
        background: "linear-gradient(138.97deg, #111214 5.16%, #121212 105.18%)",
        opacity: 1,
        color:"white",
      }}>
        <img src={googleLogo} alt="Google Logo" width={20} />
        <span>Sign up with Google</span>
      </button>

      {/* Create an Account Button */}
      <button style={{
        width: '100%',
        padding: '12px',
        borderRadius: '4px',
        background: "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}>
        Create an Account
      </button>

      {/* Already have an account? Sign In */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span>Already have an account? </span>
        <a href="/signin" style={{ color: 'white', textDecoration: 'none', fontSize:"15px"}}>
          Sign In
        </a>
      </div>
    </div>
  );
};

export default EmaiAuth;
