import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Grid from '../Grid';
import './style.css'

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style={
    color:'var(--white)',
    width:'50vw',
    fontSize:'1.2rem',
    fontWeight:500,
    fontFamily:'Inter',
    textTransform:'capitalize'
  };
  const theme=createTheme({
    palette:{
        primary:{
            main:'#3a80e9',
        },
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid"><div className='grid-flex'>{coins.map((coin,ind)=>{
            return (
                <Grid coin={coin} key={ind}/>
            )
        })}</div></TabPanel>
        <TabPanel value="list"><div>{coins.map((coin,ind)=>{
            return (
                <p key={ind}>{ind+1}.{coin.id}</p>
            )
        })}</div></TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}