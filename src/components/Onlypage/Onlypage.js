import React, { useEffect } from 'react'
import ResponsiveAppBar from '../../Appbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useQuery, gql} from '@apollo/client'
import { LOAD_USERS } from '../../GraphQL/Queries';




const Onlypage = () => {

  const {error, loading, data} = useQuery(LOAD_USERS);
  

  useEffect(() =>{
    
    console.log(error, loading, data)
  }, [error, loading, data]);

  const theme = createTheme({
    typography: {
      fontFamily: [
        'lora',
        'cursive',
      ].join(','),
    },})



  return (
    <>
        <nav className='nav__main'>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
          </ThemeProvider>          
        </nav>
        <section className='section__top'>
          <div className="section__top-search">
            <input type='text' placeholder='Search...'></input> 
          </div>
        </section>
    </>
  )
}

export default Onlypage