import Box from '@mui/material/Box';
import { FormControl, Stack, TextField } from '@mui/material';

function NameField() {
    return (
        <Box
            sx={{
                width: 400,
                maxWidth: '100%'
            }}
            noValidate
            autoComplete="on"
        >
            <FormControl  fullWidth>
                <Stack spacing={3}>
                    <TextField required color='secondary' autoFocus fullwidth label="Name" variant="filled" />
                    <TextField required color='secondary' fullwidth label="Password" variant="filled" type='password' helperText='Do not share your passwords' />
                </Stack>
            </FormControl>
        </Box>
    );
}

export default NameField