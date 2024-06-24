import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: 100%;
  height: 250px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Logo = styled(Link)`
  padding: 12px 0 0 26px;

  >img {
    width: 100px;
  }
`;

export const TopHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  > span {
      font-size: 16px;
      padding-left: 24px;
      padding-top: 16px;
      color: ${({ theme }) => theme.COLORS.GRAY};
    }

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLACK_BOLD};
    }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 16px;

  > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;

    margin-left: 24px;
    width: 100px;
    height: 45px;
    border-radius: 50px;
    border: 1px solid lightgray;
    
    

    &:hover {
      background-color: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    >svg {
      color: ${({ theme }) => theme.COLORS.BLACK_BOLD};
    }
  }
`;