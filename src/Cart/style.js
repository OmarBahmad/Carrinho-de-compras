import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 800px) 1fr;
  width: 100%;
  background: #d1d8e5;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
`;
export const BoxContainer = styled.div`
  display: flex;
  grid-column: 2/3;
  width: 85%;
  background: white;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  margin: auto;
`;
export const Title = styled.div`
  display: flex;
  width: 100%;
  background: white;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;

  border-bottom: 2px lightgray solid;
  font-size: 16px;
  font-weight: bold;
`;
export const ContainerCard = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 0;
  max-width: 900px;
  height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 18px;
  }
  ::-webkit-scrollbar-thumb {
    background: #7b56a0;
    border-left: 4px solid #faf6ed;
    border-right: 4px solid #faf6ed;
  }
`;
export const FillContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background: white;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 2px lightgray solid;
  border-top: 2px lightgray solid;
`;
export const ContainerTotalPrice = styled.div`
  display: flex;
  width: 85%;
  background: white;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
export const ContainerFrete = styled.div`
  display: flex;
  width: 85%;
  background: #c7ffa6;
  color: #217a00;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: -10px auto 20px auto;
  padding: 0.5rem;
  font-weight: bold;
  font-size: 25px;
  border-radius: 50px;
  @media (max-width: 700px) {
    font-size: 21px;
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;
export const Button = styled.button`
  padding: 0 2rem;
  margin: 1rem auto;
  border: none;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3b74f2;
  border-radius: 0.75rem;
  box-sizing: border-box;
  font: inherit;
  font-size: 25px;
  font-weight: bold;
  width: 85%;
  transition: 0.3s;
  color: white;
  cursor: pointer;
  outline: none;
  :hover {
    background: #3b74f220;
    color: #3b74f2;
  }
  @media (max-width: 700px) {
    font-size: 25px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
  @media (max-width: 350px) {
    font-size: 16px;
  }
`;
