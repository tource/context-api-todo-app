import styled from "@emotion/styled";

interface Props {
  label: string;
}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LabelStyle = styled.h1`
  margin-top: 0;
`;

const Title = ({ label }: Props) => {
  return (
    <ContainerStyle>
      <LabelStyle>{label}</LabelStyle>
    </ContainerStyle>
  );
};

export default Title;
