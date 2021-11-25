import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 6rem;
  background: #f8f7f7;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  border-bottom: solid 0.5px #15151c20;
  box-shadow: rgba(0, 0, 0, 0.25) 5px 5px 20px;
`;

export const Nav = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80rem;
`;
export const Logo = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  padding-left: 1rem;
`;
export const Img = styled.img`
  padding-right: 1rem;
`;
export const ContainerButtons = styled.div`
  display: block;
  align-items: flex-start;
  justify-content: center;
`;
export const TotalItems = styled.span`
  position: relative;
  top: -40px;
  right: 18px;
  background: green;
  padding: 2px 5px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: bold;
  color: white;
`;
// export const ContainerActions = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 60%;
//   flex-wrap: nowrap;
// `;
// export const ContainerTotalValue = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: center;
//   width: 60%;
//   padding: 0 1rem;
// `;

// export const Total = styled.span`
//   font-size: 1.7rem;
//   font-weight: normal;
//   width: 100%;
//   @media (max-width: 940px) {
//     font-size: 1.5rem;
//   }
//   @media (max-width: 790px) {
//     font-size: 1.2rem;
//   }
//   @media (max-width: 670px) {
//     font-size: 0.9rem;
//   }
//   @media (max-width: 415px) {
//     font-size: 0.7rem;
//   }
//   @media (max-width: 355px) {
//     font-size: 0.7rem;
//   }
// `;
// export const Price = styled.span`
//   font-size: 1.7rem;
//   font-weight: normal;
//   font-weight: bold;
//   width: 100%;

//   @media (max-width: 940px) {
//     font-size: 1.5rem;
//   }
//   @media (max-width: 790px) {
//     font-size: 1.2rem;
//   }
//   @media (max-width: 670px) {
//     font-size: 0.9rem;
//   }
//   @media (max-width: 580px) {
//     font-size: 0.7rem;
//   }
//   @media (max-width: 355px) {
//     font-size: 0.7rem;
//   }
// `;
// export const Button = styled.span`
//   padding: 0 2rem;
//   margin: 0.2rem;
//   border: none;
//   height: 3rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #7856a0;
//   border-radius: 0.75rem;
//   font: inherit;
//   font-size: 1.3rem;
//   width: 100%;
//   transition: 0.3s;
//   color: white;
//   cursor: pointer;
//   max-width: 8rem;
//   outline: none;
//   :hover {
//     background: #7856a020;
//     color: #7856a0;
//   }
//   @media (max-width: 940px) {
//     font-size: 1.3rem;
//   }
//   @media (max-width: 790px) {
//     font-size: 1.2rem;
//   }
//   @media (max-width: 670px) {
//     font-size: 0.9rem;
//   }
//   @media (max-width: 580px) {
//     font-size: 0.7rem;
//   }
//   @media (max-width: 355px) {
//     font-size: 0.7rem;
//   }
// `;
