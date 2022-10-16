import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  li {
    display: flex;
    gap: 10px;
    font-size: 20px;
    align-items: center;
    p {
      margin: 0;
    }
    p:first-of-type {
      font-weight: bold;
    }
  }
`;
