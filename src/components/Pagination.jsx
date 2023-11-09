import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../styles/pagination.css'

export default function BasicPagination({count, onChange}) {
  return (
    <Stack className='pagination'>
      <Pagination count={count} color="primary" onChange={onChange} />
    </Stack>
  );
}
