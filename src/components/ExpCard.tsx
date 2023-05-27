import {
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
export const ExpCard = (props: {
  title: String;
  date: String;
  description: String;
  rol: String;
}) => {
  return (
    <Paper elevation={24}>
      <div className="pad">
        <Container>
          <Grid container spacing={2}>
            <Grid item>
              <Stack>
                <Typography variant="h6">{props.title}</Typography>
                <Divider />
                <Typography variant="overline">{props.date}</Typography>
                <Typography variant="caption">{props.rol}</Typography>
                <p>{props.description}</p>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Paper>
  );
};
