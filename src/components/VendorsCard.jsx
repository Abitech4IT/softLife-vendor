import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useVendor } from "../context/VendorsContext";
import Spinner from "./Spinner";

function VendorsCard() {
  const { vendor, isLoading } = useVendor();

  console.log(vendor);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid container spacing={5}>
      {vendor &&
        vendor.data?.map((item, index) => (
          <Grid item sx={6} sm={6} md={3} lg={3} key={index}>
            <Card sx={{ maxWidth: 345, height: 250 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.dpUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.fullName}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={700}
                >
                  {item.businessName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

export default VendorsCard;
