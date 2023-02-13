import Box from '@mui/material/Box';
import { FormControl, Stack, TextField } from '@mui/material';

function CreateField() {
    return (
        <Box
            sx={{
                width: 400,
                maxWidth: '100%'
            }}
            noValidate
            autoComplete="on"
        >
            <FormControl fullWidth>
                <Stack spacing={3}>
                    <TextField required fullwidth color='secondary' label="First Name" variant="filled" type='text' autoFocus />
                    <TextField fullwidth color='secondary' label='Middle Name' variant="filled" type='text'/>
                    <TextField required fullwidth color='secondary' label='Last Name' variant="filled" type='text'/>
                    <TextField required fullwidth color='secondary' label='Telephone' variant="filled" type='tel'/>
                </Stack>
            </FormControl>
        </Box>
    );
}

export default CreateField