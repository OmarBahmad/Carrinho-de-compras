import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  background: white;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 0.75rem;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  height: 100%;
  h1 {
    font-size: 1rem;
  }
`;
export const Button = styled.span`
  padding: 0 2rem;
  margin: 0.2rem;
  border: none;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7856a0;
  border-radius: 0.75rem;
  font: inherit;
  width: 100%;
  transition: 0.3s;
  color: white;
  cursor: pointer;
  max-width: 8rem;
  outline: none;
  :hover {
    background: #7856a020;
    color: #7856a0;
  }
`;

export const Img = styled.img`
  width: 50%;
  object-fit: cover;
`;
