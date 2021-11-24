import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: #f8f7f7;
  min-width: 400px;
`;
export const ContainerSection = styled.div`
  width: 90%;
  max-width: 80rem;

  display: grid;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 9rem;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;
