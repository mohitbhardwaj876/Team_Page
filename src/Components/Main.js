import styled from 'styled-components'
import University from './University'
import Mentors from './Mentors'
import Advisor from './Advisor'
function Main(){
    return(
<MainContainer>
    <University/>
    <Mentors/>
    <Advisor/>
  </MainContainer>
    )
}
export default Main

const MainContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-between;
    gap:50px;
 width:90%;
 margin:100px auto;  
 h2{
   color:#3543B0;
   text-align:center;
 }
`