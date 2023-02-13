import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function LogInButton() {
  return (
    <Stack spacing={2} direction="row" sx={{display: 'block'}}>
      <Button disableElevation color='secondary' variant="contained">Log In</Button>
    </Stack>
  );
}