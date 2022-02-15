import React from 'react'
import { Container } from 'react-bootstrap'
import Data from '../component/CoinData/Data'
import Search from '../component/search/Search';
import Navv from '../navbar/Nav';
import "./home.css"

function Home() {

    

  return (
    <body id="home_body">
      <div>
      <Navv/>
      <Search/>
      <Container><Data/></Container>
      
    </div>
    </body>
    
  )
}

export default Home