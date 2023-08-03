import React from 'react';
import { styled } from 'styled-components';
import DdayList from './DdayList';
import DdayForm from './DdayForm';

const Navigation = styled.nav`
    position:fixed;
    width:12%;
    height:40%;
    top:15%;
    right:3%;
    padding:10px 30px;
`
const Title = styled.div`
    display:flex;
    justify-content:space-between;
`

function Nav() {
  return (
    <Navigation>
        <Title>
            <h3>
                D-Day
            </h3>
            <h3 className='addDday'>
                +
            </h3>
        </Title>
        <DdayForm />
        <DdayList />
    </Navigation>
  );
}

export default Nav;