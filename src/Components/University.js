import styled from 'styled-components'
function University(){
    return(
    <>
    <Text>
   <h1>Team Page</h1>
   <h2>Learn From Scientists , Research Scholors From The Top Institute In The World</h2>
   </Text>

   <Institues>

    <div className='box'>
       <img src='\images/cambridge-logo.png'/>
       <p>Cambridge University</p> 
    </div>

    <div className='box'>
       <img src='\images/ETH-Zurich.png'/>
       <p>ETH Zurich</p> 
    </div>

    <div className='box'>
       <img src='\images\Johns-Hopkins-University.png'/>
       <p>Hoopkins University</p> 
    </div>

    <div className='box'>
       <img src='\images\Max-Planck.png'/>
       <p>Max Planck</p> 
    </div>

    <div className='box'>
       <img src='\images\Illinois_Fighting_Illini.png'/>
       <p>Illinois University</p> 
    </div>

    <div className='box'>
       <img src='\images\1200px-Huberlin.png'/>
       <p>Huberlin University</p> 
    </div>

    <div className='box'>
       <img src='\images\Hardvest-logo.png'/>
       <p>Hardvest University</p> 
    </div>

    <div className='box'>
       <img src='\images\michigan-state-university.png'/>
   <p>Michigan State University</p> 
    </div>

    <div className='box'>
       <img src='\images\University-of-California-logo.png'/>
       <p>University of California</p> 
    </div>

    <div className='box'>
       <img src='\images\university-of-edinburgh.png'/>
       <p>University of Edinburgh</p> 
    </div>
</Institues> 
</>
)
}
export default University;

const Text=styled.div`
h1{
        color:#6D24B0;
         font-size:70px;
         font-weight:700;
         line-height:50px;
         text-align:center
         }
h2{
    color:#3543B0;
   text-align:center;
  }        

`
const Institues=styled.div`
 display:grid;
 grid-template-columns:repeat(auto-fit, minmax(270px, 1fr));
 gap:15px;
 .box{
    box-shadow:0 5px 10px rgba(0,0,0,.2);
    border-radius:5px;
    background:#fff;
    text-align:center;
    padding:20px 10px;
 }
 .box img{
    height:100px;
 }
 .box p{
    font-size:20px;
    font-weight:500;
    margin-block:0px;
    line-height:1.8;
 }
`