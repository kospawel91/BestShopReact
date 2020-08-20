import React from 'react';
import styled from 'styled-components'
import SalesContentHeader from './SalesContentHeader';
import SalesContentCircle from './SalesContentCircle';


const SalesSection = styled.section`
  padding-top: 100px;
  background-color: white;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const MostSales = () => {
    return (
      <SalesSection id="section1">
        <SalesContentHeader />
        <SalesContentCircle />
      </SalesSection>
    );
};

export default MostSales