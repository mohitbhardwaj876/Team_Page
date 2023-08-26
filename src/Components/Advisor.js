import { styled } from "styled-components"
import { BiLogoTelegram } from 'react-icons/bi'
import { MsgButton } from "../styled/MsgButton";

function Advisor(){
    return(
        <>

        <Text>
        <h2>Mentor & Advisor</h2>
        </Text>

 <AdvisorContainer>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Principal Project Scientist at Indian Institute of Technology, Madras</p>
   <MsgButton text="Message Him Now" icon={<BiLogoTelegram/>}/>
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Principal Project Scientist at Indian Institute of Technology, Madras</p>
   <MsgButton text="Message Him Now" icon={<BiLogoTelegram/>}/> 
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Principal Project Scientist at Indian Institute of Technology, Madras</p>
   <MsgButton text="Message Him Now" icon={<BiLogoTelegram/>}/> 
</div>
</AdvisorContainer>
        </>
    )
}
export default Advisor

const Text=styled.div`
    h2{
    font-size:40px;
    color:#3543B0;
    text-align:center;
    }
`

const AdvisorContainer=styled.div`
 display:grid;
 justify-content:space-between;
 grid-template-columns:repeat(3,300px);
 gap:15px;
 .box{
    box-shadow:0 5px 10px rgba(0,0,0,.2);
    background:#fff;
    text-align:center;
    padding:10px 10px;
 }
 .box img{
    height:200px;
 }
 .box p{
    margin-top:-15px;
    font-size:18px;
    font-weight:500;
 }
`
