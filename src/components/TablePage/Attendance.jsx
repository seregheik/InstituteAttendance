import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import tableData from '../../Data/data.json'

function Attendance () {
    return (
        <TableContainer component={Paper}>
            <Table aria-aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastname</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Class Attendance this Semester</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map(row =>(
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell sx={{textAlign:"center"}}>{row["class attendance"]}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Attendance