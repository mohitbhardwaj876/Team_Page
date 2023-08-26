import styled from 'styled-components'
import  { Button }  from '../styled/Button'
function Header(){
    return(
        <NavContainer>
            <Head>
                <div className='logo'>
                <img src='\images\newsciastra.jpg'/>
                </div>
                <ul>
                   <li>HOME</li> 
                   <li>COURSES</li> 
                   <li>SELECTIONS</li> 
                   <li>BLOGS</li> 
                   <li>MATERIALS</li> 
                   <li>TEAM</li> 
                   <li>CONTACT US</li> 
                </ul>
                <Button>Login</Button>


            </Head>
        </NavContainer>
    )
}
 export default Header

 const NavContainer=styled.div`
 width:80%;
 margin:0 auto;
 `
 const Head=styled.div`
  align-items:center;
  display:flex;
  justify-content:space-between;

  .logo{
    height:70px;
    width:70px;
  }

 .logo img{
    width:100%;
    border-radius:50px;
    object-fit:contain;
}

ul{
    display:flex;
    list-style:none;
    justify-content:space-between;
}
li{
    font-weight:500;
    padding:0px 25px;
    cursor:pointer;
}

 `