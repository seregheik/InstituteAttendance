import Header from "../Header";
import LogInButton from "../LogInButton";
import NameField from "../NameField";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Stack spacing={4} paddingLeft={2} paddingRight={2}>
          <Header />
          <NameField />
          <LogInButton />
          <Typography variant="body1">Click Here to <Link to='/create'>Register Member </Link></Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default LoginPage