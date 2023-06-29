import styled from "styled-components";
import { Header } from "../header/header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      {/* </Footer /> */}
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  font-size: 16px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1170px) {
    overflow-x: hidden;
  }
`;