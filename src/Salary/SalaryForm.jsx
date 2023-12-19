import React, { useState } from 'react'
import { Box, Button, FormControl, FormControlLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function SalaryForm() {
    const [FName, setFName] = useState("");

    const [LName, setLName] = useState("");

    const [Gender, setGender] = useState("");

    const [Marital, setMarital] = useState("");

    const [Dept, setDept] = useState("");

    const [BS, setBS] = useState("");

    const [TA, setTA] = useState("");
    const [DA, setDA] = useState("");
    const [HRA, setHRA] = useState("");
    const [LIC, setLIC] = useState("");
    const [PF, setPF] = useState("");
    const [Deduction, setDeduction] = useState("");
    const [NET, setNET] = useState("");

    const ClickButton = () => {
        var ta, da,hra,lic,pf,deduction,net;
        if(BS >=10000){
            ta = parseInt(BS)*0.4;
            da=parseInt(BS)*0.35;
            hra=parseInt(BS)*0.30;
            lic=parseInt(BS)*0.25;
            pf=parseInt(BS)*0.2;
        }
        else if(5000<=BS<=10000){
            ta=parseInt(BS)*0.35;
            da=parseInt(BS)*0.30;
            hra=parseInt(BS)*0.25;
            lic=parseInt(BS)*0.20;
            pf=parseInt(BS)*0.15;
        }
        else if(BS>5000){
            ta=parseInt(BS)*0.30;
            da=parseInt(BS)*0.25;
            hra=parseInt(BS)*0.20;
            lic=parseInt(BS)*0.15;
            pf=parseInt(BS)*0.10;
        }
        var ded = parseInt(lic)+parseInt(pf);
        var net = parseInt(BS)+parseInt(ta)+parseInt(da)+parseInt(hra)-ded;
    
        setTA(ta);
        setDA(da);
        setHRA(hra);
        setLIC(lic);
        setPF(pf);
        setDeduction(ded);
        setNET(net);
    


    };
  return (
    <>
        <Box sx={{m:10,
            mt:2,
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center','& >:not(style)':{
                m:1,
                width:'50%',
                height:'100%'
            }}}>
            <Paper elevation={3} sx={{ display:'flex',flexWrap:'wrap', justifyContent:'center',alignItems:'center',backgroundColor:'wheat'}} >
                <div>
                    <Typography variant='h4' gutterBottom sx={{mt:2,fontFamily:"-moz-initial"}} >
                        Salary Calculations
                    </Typography>
                    <Table  aria-label="simple table">
                        
                        <TableBody>
                            <TableRow>
                                <TableCell>FirstName</TableCell>
                                <TableCell><TextField id="FirstName" onChange={(event) => setFName(event.target.value)}  variant="standard" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>LastName</TableCell>
                                <TableCell><TextField id="LastName" onChange={(event) => setLName(event.target.value)} variant="standard" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Gender</TableCell>
                                <TableCell>
                                <FormControl>
                                    <RadioGroup

                                        name="gender"
                                        onChange={(event) => setGender(event.target.value)}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Marital-status</TableCell>
                                <TableCell>
                                <FormControl>
                                    <RadioGroup

                                        name="marital"
                                        onChange={(event) => setMarital(event.target.value)}
                                    >
                                        <FormControlLabel value="single" control={<Radio />} label="single" />
                                        <FormControlLabel value="married" control={<Radio />} label="married" />
                                    </RadioGroup>
                                </FormControl>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>DepartMent</TableCell>
                                <TableCell>
                                    <FormControl fullWidth>
                                        
                                        <Select
                                            id="Dept"
                                            onChange={(event) => setDept(event.target.value)}
                                        >
                                            <MenuItem value={'Accounts'}>Accounts</MenuItem>
                                            <MenuItem value={'HR'}>HR</MenuItem>
                                            <MenuItem value={'Finance'}>Finanace</MenuItem>
                                            <MenuItem value={'Marketing'}>Marketing</MenuItem>
                                        </Select>
                                        </FormControl>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Basic Salary
                                </TableCell>
                                <TableCell>
                                    <TextField id="BS" name='BS' onChange={(event) => setBS(event.target.value)} variant="standard" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                <Box sx={{m:5,display:'flex',justifyContent:'center'}}>
                        <Box sx={{m:5,display:'flex',justifyContent:'center'}} >
                            <Button variant="contained">Cancel</Button>
                        </Box>
                        <Box sx={{m:5,display:'flex',justifyContent:'center'}} >
                            <Button variant="contained" onClick={ClickButton}>Submit</Button>
                        </Box>
                        

                </Box>
                </div>
            </Paper>

        </Box>

        <Box sx={{m:10,
            mt:5,
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center','& >:not(style)':{
                m:1,
                width:'50%',
                height:'100%'
            }}}>
            <Paper elevation={3} sx={{ display:'flex',flexWrap:'wrap', justifyContent:'center',alignItems:'center',backgroundColor:'#ffcc80',contrastText: '#fff',}} >
                <div>
                <Typography variant='h4' gutterBottom sx={{mt:2,fontFamily:"-moz-initial"}} >
                        Calculated Net Salaryy
                </Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{FName} {LName}</TableCell>
                        </TableRow>
                        
                        <TableRow>
                            <TableCell>Gender</TableCell>
                            <TableCell>{Gender}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Maritial Status</TableCell>
                            <TableCell>{Marital}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Department</TableCell>
                            <TableCell>{Dept}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Basic Salary</TableCell>
                            <TableCell>{BS}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>TA</TableCell>
                            <TableCell>{TA}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>DA</TableCell>
                            <TableCell>{DA}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>HRA</TableCell>
                            <TableCell>{HRA}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>LIC</TableCell>
                            <TableCell>{LIC}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PF</TableCell>
                            <TableCell>{PF}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Deduction</TableCell>
                            <TableCell>{Deduction}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>NET</TableCell>
                            <TableCell>{NET}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </div>
            </Paper>
        </Box>
    </>
  )
}

export default SalaryForm
