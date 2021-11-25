import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 85%;
  background: white;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 0.75rem;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  height: 12rem;
  flex-wrap: nowrap;
`;
export const ContainerCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
`;
export const ContainerNameValue = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin: auto;
  width: 100%;
  gap: 1rem;
`;
export const Name = styled.span`
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`;
export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;
export const Button = styled.button`
  padding: 0 2rem;
  margin: auto;
  border: none;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 3px solid #7b56a0;
  border-radius: 0.75rem;
  box-sizing: border-box;
  font: inherit;
  font-weight: bold;
  width: 20%;
  transition: 0.3s;
  color: #7b56a0;
  cursor: pointer;
  outline: none;
  :hover {
    background: #7b56a0;
    color: white;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.6rem;
  }
`;
export const Img = styled.img`
  width: 30%;
  box-sizing: border-box;
  margin: 0.5rem 1rem 0.5rem 0;
`;
