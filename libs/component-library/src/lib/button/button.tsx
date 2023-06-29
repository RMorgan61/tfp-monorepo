import styled from "styled-components";

interface Props {
  variant:
    | 'primary'
    | 'secondary'
    | 'header';
  text: string;
  onClick: () => void;
}

export const Button = ({ variant, text, onClick }: Props): JSX.Element => {
  const Component = ButtonMap[variant];
  return (
    <Component onClick={onClick}>
      {text}
    </Component>
  )
}

const BaseButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: #4c0080;
  color: #fff;
  border: 2px solid #4c0080;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    background-color: #000;
    border: 2px solid #000;
    cursor: pointer;
  }
`;

const Primary = styled(BaseButton)``;

const Secondary = styled(BaseButton)``;

const Header = styled(BaseButton)`
  background-color: #fff;
  color: #000;
  border: 2px solid #fff;

  &:hover {
    background-color: #4c0080;
    color: #fff;
    border: 2px solid #fff;
    cursor: pointer;
  }
`;

const ButtonMap = {
  primary: Primary,
  secondary: Secondary,
  header: Header,
}