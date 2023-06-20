import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button`
    font-weight: bold;
  font-size: .8rem;
  padding: 0.4rem .6rem;
  cursor: pointer;
  border-radius: 3rem;
  border: none;
  background: #d31212;
  opacity: 0.7;
`;

export const SelectedButton = styled(Button)`
    opacity: 1;
`;