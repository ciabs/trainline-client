import React from 'react';
import {Container, Img, Wrapper} from './Header.styles';
import logo from '../../assets/images/logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Link to={'/'}>
          <Img src={logo} alt="Kiwi standing on oval" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Header;
