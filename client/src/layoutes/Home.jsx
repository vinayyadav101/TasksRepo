import Box from '@mui/material/Box';
import Navbar from '../commponents/Navbar';
import { Outlet } from 'react-router-dom';



export default function Layout(){
  
 
  return (
    <div className='min-h-[100vh] bg-white text-black'>
      <Navbar />
      <Outlet />
    </div>
  );

}