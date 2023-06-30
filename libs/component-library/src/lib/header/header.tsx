import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setAuthState } from '../store/authSlice';
import { Button } from '../button/button';

export const Header = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <InnerHeader>
        <Title>NextJs Training</Title>
        <LoggedInOut>
          {authState ? (
            <>
              <Username>Hello Username</Username>
              <Button variant='header' text="Log Out" onClick={() => dispatch(setAuthState(false))} />
            </>
          ) : (
            <Button variant='header' text="Log In" onClick={() => dispatch(setAuthState(true))} />
          )}
        </LoggedInOut>
      </InnerHeader>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  background-color: #4c0080;
  color: #fff;
  display: flex;
  justify-content: center;
`;

const InnerHeader = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 2em;
`;

const LoggedInOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Username = styled.p`
  font-size: 1em;
`;
