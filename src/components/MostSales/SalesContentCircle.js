import React, { Component } from 'react';
import styled from "styled-components";

const StyledSales = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  padding:1rem;
  & .entry-circle {
    display: block;
    width: 63px;
    height: 63px;
    border-radius: 50%;
    position: relative;
    background-color: ${(props) => props.theme};
    &::after{
        content: url(${(props) => props.imageTheme});
        display:block;
        position: absolute;
        margin: ${(props) => props.position};
    }
  }
  & .entry-numbers{
        text-align: center;
        font-size: 2rem;
        font-weight: 800;
        letter-spacing: 6px;
        color: #000000;
        font-family: 'Raleway', sans-serif;
        padding-top: 1.5rem;
        padding-bottom: 2rem;
  }
  & .entry-text{
        color: #A5A5A5;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
}
`;

const position = {
  main: "0px 0px 0px 30px;",
  second: "25% 0px 0px 25px;",
  third: "5px 0px 0px 30px;",
};
// /img/Penors.svg;
const imageTheme ={
    person:"/img/Person.svg",
    eye:"/img/Eye.svg",
    catalog:"/img/Catalog.svg"
}
const theme = {
  main: "#EB476E",
  second: "#07ACE6",
  third:"#55DFB4",
};

class SalesContentCircle extends Component {
    render() {
        return (
          <>
            <StyledSales
              theme={theme.main}
              imageTheme={imageTheme.person}
              position={position.main} >
              <EntryContent number="100000+" text="daily entries" />

            </StyledSales>

            <StyledSales
              theme={theme.second}
              imageTheme={imageTheme.eye}
              position={position.second}>
                  
              <EntryContent number="2000000+" text="seen products every day" />
              
            </StyledSales>

            <StyledSales
              theme={theme.third}
              imageTheme={imageTheme.catalog}
              position={position.third}>

              <EntryContent number="10000+"text="added posts daily"/>

            </StyledSales>
          </>
        );
    }
}

const EntryContent = ({number,text}) => (
  <>
    <div className="entry-circle"></div>
    <div className="entry-numbers">{number}</div>
    <div className="entry-text">{text}</div>
  </>
);






export default SalesContentCircle;