import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 1200px;
  padding: 40px 150px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 24px 24px;
    margin: 0 auto;
  }
`;

export default PageContainer;
