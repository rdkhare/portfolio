import React from 'react';
import Typed from 'react-typed';
import headerImage from '../images/rajatproff.jpg';

const Header = () => {
    const headerStyle = {
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '70% center',
        height: '100vh',
      };

  const overlayStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)', // Adjust opacity as needed (0.5 = 50% opacity)
  };

  const textContainerStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  return (
    <header style={headerStyle}>
      <div style={overlayStyle}></div>
      <div className="container mx-auto h-full">
        <div style={textContainerStyle}>
          <Typed
            strings={['Rajat Divanshu Khare']}
            typeSpeed={40}
            backSpeed={100}
            loop={true}
            className="text-4xl font-bold text-white text-center font-mono"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
