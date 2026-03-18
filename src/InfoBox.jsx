import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    let img_url = "/src/assets/Angul.jpeg";
     const hot_url="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
     const cold_url="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const rainy_url="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <h3>Weather info - {info.weather}</h3>
            <div className="cardContainer">
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80 
            ? rainy_url
            :info.temp > 15 
            ? hot_url
            : cold_url
            } 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city }
          {info.humidity > 80 
            ? <ThunderstormIcon/>
            :info.temp > 15 
            ? <WbSunnyIcon/>
            : <AcUnitIcon/> 
            }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
       
          <div> Temperature = {info.temp}&deg;</div>
          <div> humidity = {info.humidity}</div>
          <div> the weaather can be described as <i><b>{info.weather}</b></i> and feels  like = {info.feelsLike}&deg;</div>
          <div> tempMin = {info.tempMin}&deg;</div>
          <div> tempMax = {info.tempMax}&deg;</div>
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
            </div>
        </div>
    )
}