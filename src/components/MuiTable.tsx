import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
} from '@mui/material';

export default function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData = [
  {
    id: 1,
    first_name: 'Dirk',
    last_name: 'Gobat',
    email: 'dgobat0@mapquest.com',
    gender: 'Male',
    ip_address: '233.253.50.12',
  },
  {
    id: 2,
    first_name: 'Royall',
    last_name: 'Studart',
    email: 'rstudart1@techcrunch.com',
    gender: 'Male',
    ip_address: '69.145.172.130',
  },
  {
    id: 3,
    first_name: 'Garrott',
    last_name: 'Mayer',
    email: 'gmayer2@noaa.gov',
    gender: 'Male',
    ip_address: '202.244.195.79',
  },
  {
    id: 4,
    first_name: 'Mordecai',
    last_name: 'Glasebrook',
    email: 'mglasebrook3@paypal.com',
    gender: 'Male',
    ip_address: '220.4.151.68',
  },
  {
    id: 5,
    first_name: 'Herminia',
    last_name: 'Lawrenson',
    email: 'hlawrenson4@google.ca',
    gender: 'Female',
    ip_address: '3.8.180.4',
  },
  {
    id: 6,
    first_name: 'Gonzalo',
    last_name: 'Goodby',
    email: 'ggoodby5@geocities.com',
    gender: 'Male',
    ip_address: '51.53.103.239',
  },
  {
    id: 7,
    first_name: 'Doug',
    last_name: 'Hearnshaw',
    email: 'dhearnshaw6@scribd.com',
    gender: 'Male',
    ip_address: '250.173.37.195',
  },
  {
    id: 8,
    first_name: 'Barbi',
    last_name: 'Deniseau',
    email: 'bdeniseau7@posterous.com',
    gender: 'Female',
    ip_address: '118.208.191.110',
  },
  {
    id: 9,
    first_name: 'Casandra',
    last_name: 'Gatward',
    email: 'cgatward8@webmd.com',
    gender: 'Female',
    ip_address: '191.45.11.118',
  },
  {
    id: 10,
    first_name: 'Ainslee',
    last_name: 'Anear',
    email: 'aanear9@etsy.com',
    gender: 'Female',
    ip_address: '85.181.230.157',
  },
];
