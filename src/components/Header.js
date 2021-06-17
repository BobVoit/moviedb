import React from 'react';
import styled from 'styled-components';
import { SETTINGS } from '../settings';
import Container from './Container';
import headerLogo from '../assets/images/alt-short-logo.svg';

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 10rem;
    background-color: ${props => props.bg};
    box-shadow: 0 4px 15px 10px rgba(0, 0, 0, 0.25);
`;

const HeaderContainer = styled(Container)`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    height: 4rem;
`;

const Header = () => {
    
    const colors = SETTINGS.style.colors;
    return (
        <HeaderWrapper bg={colors.primary}>
            <HeaderContainer>
                <Logo src={headerLogo}/>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default Header;