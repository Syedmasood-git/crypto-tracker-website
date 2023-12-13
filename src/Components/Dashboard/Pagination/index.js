import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './style.css'

export default function PaginationComponent() {
  const [page, setPage] =useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className='pagination-component'>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange}
      sx={{
            color: "var(--white)",     
            "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
            },
            "& .MuiPagination-ellipsis":{
            border: "0px solid var(--grey) !important",
            },
            
            "& .MuiPaginationItem-text": { color: "var(--white)",
            border: "1px solid var(--grey)",
        },

      }} />
    </div>
  );
}