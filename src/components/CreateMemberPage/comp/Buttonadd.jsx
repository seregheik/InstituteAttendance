import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttonadd() {
  return (
    <Stack spacing={2} direction="row" sx={{display: 'block'}}>
      <Button disableElevation color='secondary' variant="contained">Add New Member</Button>
    </Stack>
  );
}