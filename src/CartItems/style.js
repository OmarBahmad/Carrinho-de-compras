import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 90%;
  background: white;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 0.75rem;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  height: 100%;
`;

export const ContainerTotalValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 0.4rem 1rem;
`;
export const Total = styled.span`
  font-size: 1.2rem;
  font-weight: normal;
  width: 100%;
`;
export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: normal;
  font-weight: bold;
  width: 100%;
`;
export const Button = styled.span`
  padding: 0 2rem;
  margin: 0.2rem 0.2rem 0.2rem 0.6rem;
  border: none;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 3px solid #7b56a0;
  border-radius: 0.75rem;
  font: inherit;
  font-weight: bold;
  width: 100%;
  transition: 0.3s;
  color: #7b56a0;
  cursor: pointer;
  max-width: 8rem;
  outline: none;
  :hover {
    background: #7b56a0;
    color: white;
  }
`;
export const Img = styled.img`
  width: 50%;
  object-fit: cover;
`;
