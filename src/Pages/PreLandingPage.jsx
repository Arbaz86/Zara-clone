import React from 'react'
import { Box ,Image} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { BiBody } from "react-icons/bi";
const PreLandingPage = () => {
    
    const navigate = useNavigate();
    const handleNavigate=()=>{
      navigate("/in")  //change the navigation here
    }

    const property = {
        imageUrl: 'https://static.zara.net/photos//contents/mkt/spots/ss22-studio-collection-maintenance/subhome-xmedia-worldwide//landscape-4dd0d4b7-3e8c-4541-8045-9e38557d0856_0.jpg?ts=1647452534065',
        imageAlt: 'Zara Pelanding img',
        Logoimg:'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg',
      }

  return (
   <Box>
     <Image style={{width:"100%",position:"relative"}} src={property.imageUrl} alt={property.imageAlt} />
     <Image style={{width:"150px",marginLeft:"-88%",position:"absolute",marginTop:"100px"}} src={property.Logoimg} alt={property.imageAlt} />
    
     <Box style={{display:"flex",gap:"20px",marginLeft:"70px",position:"absolute",marginTop:"-250px"}}>
     <Box >
  <select size="1" style={{border:"1px solid gray",
        fontSize:"12px",
        height:"30px",
        width:"240px",}}>
    <option value="ind"> INDIA</option>
       
    <option value="USA">USA</option>
    <option value="CHINA">CHINA</option>
    <option value="AMERICA">AMERICA</option>
    <option value="CANADA">CANADA</option>
    <option value="AUSTRELIA">AUSTRELIA</option>
    <option value="RUSSIA">RUSSIA</option>
    <option value="SHRILANKA">SHRILANKA</option>
  </select>
  </Box>

  <Box>
         <select size="1" style={{border:"1px solid gray",overflowY:"scroll",
        width:"240px",
        fontSize:"12px",
        height:"30px"}}>
    <option  value="eng">English</option>
    <option  value="spa">Spanish</option>
    <option  value="rus">Russian</option>
    
  </select></Box>

  <Box>
    <button style={{background:"black",padding:"4.5px",
    fontSize:"14px",
    color:"#ffff",
    fontWeight:"bold",
    width:"50px"
     }}
     onClick={handleNavigate}>Go</button>
   </Box>
     </Box>
       


     <Box  style={{position:"absolute",padding:"10px",marginTop:"-100px",marginLeft:"93%",width:"40px",height:"40px",borderRadius:"80px", background:"black"}} >
     <BiBody style={{color:"white",width:"40px",height:"40px"}}  />
     </Box>
   </Box>
  )
}

export default PreLandingPage; 