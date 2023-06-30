import styled from 'styled-components';

export const Footer = () => {
  return (
    <Wrapper>
      <InnerFooter>
        <Copyright>
          NextJS Training &copy;{' '}
          <a href="https://www.reecemorgan.co.uk" target="_blank">
            Reece Morgan
          </a>
        </Copyright>
      </InnerFooter>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  min-height: 60px;
  background-color: #4c0080;
  color: #fff;
  display: flex;
  justify-content: center;
`;

const InnerFooter = styled.div`
  width: 1200px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.p``;
