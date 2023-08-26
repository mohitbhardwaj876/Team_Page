import { styled } from "styled-components";

function Mentors(){
    return(
        <>
        <Text>
             <h2> Meet Our Mentors</h2>
        </Text>
 <MentorsContainer>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Cambridge University</p> 
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>ETH Zurich</p> 
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Hoopkins University</p> 
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Max Planck</p> 
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Illinois University</p> 
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Huberlin University</p> 
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
   <p>Hardvest University</p> 
</div>

<div className='box'>
   <img src='\images\mentor.png'/>
   <h4>Hemsworth</h4>
<p>Michigan State University</p> 
</div>
</MentorsContainer> 
        </>
    )
}
export default Mentors;


const Text=styled.div`
    h2{
    font-size:40px;
    color:#3543B0;
    text-align:center;
    }
`

const MentorsContainer=styled.div`
display:grid;
 grid-template-columns:repeat(auto-fit, minmax(270px, 1fr));
 gap:15px;Hemsworth
    background:#fff;
    text-align:center;
    padding:20px 10px;
 }
 .box img{
    height:100px;
 }
 .box p{
    margin-top:-15px;
    font-size:18px;
    font-weight:500;
 }
`