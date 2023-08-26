import styled from 'styled-components'
 export const MsgButton = ({ icon, text}) => {
    return (
      <Button>
        {icon}
        {text}
      </Button>
    );
}
const Button=styled.div`
 border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  justify-content: center;
  cursor: pointer;
  border:1px solid blue;
  padding:5px 10px;
transition: 0.4s background ease-in;
  &:hover {
    background-color:#C584D8;
    color: white;
    transition: 0.3s background ease-in;
  }
`