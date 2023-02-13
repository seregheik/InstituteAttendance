import HeaderCreate from "./comp/HeaderCreate";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import CreateField from "./comp/CreateField";
import { Link } from "react-router-dom";
import Buttonadd from "./comp/Buttonadd";




function CreateMem() {
    return (
<Card sx={{ width: '100%' }}>
      <CardContent>
        <Stack spacing={4} paddingLeft={2} paddingRight={2}>
          <HeaderCreate />
          <CreateField />
          <Buttonadd />
          <Typography variant="body1">Click Here to <Link to='/'>Log in for admins</Link></Typography>
        </Stack>
      </CardContent>
    </Card>
    )
}

export default CreateMem