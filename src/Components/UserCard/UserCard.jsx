/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./UserCard.css";
import { useNavigate } from "react-router-dom";

export default function UserCard({
  name,
  sex,
  status,
  classification,
  occupation,
  images,
}) {
  const navigate = useNavigate();

  return (
    <Card
      id="card"
      onClick={() => {
        navigate("/charDetails", {
          state: {
            name,
            sex,
            status,
            classification,
            occupation,
            images,
          },
        });
      }}
    >
      <CardMedia component="img" id="cardMedia" image={images[0]} alt={name} />
      <CardActionArea>
        <CardContent id="cardContent">
          <Typography id="info">{name}</Typography>
          <Typography id="info2">
            Sex: {sex}
            <br />
            Status: {status}
            <br />
            Classification: {classification}
            <br />
            Ocupation: {occupation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
