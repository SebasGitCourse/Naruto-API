import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CharacterDetails.css";
import { useState } from "react";
import { addChar } from "../../FireBase/FuncionsFireStore";

const CharacterDetails = () => {
  const [imagen, setImagen] = useState(0);
  const location = useLocation();
  const {
    name,
    sex,
    status,
    classification,
    occupation,
    images = [],
  } = location.state || {};

  const addCharacterFavorite = () => {
    const charFavorite = {
      CLASIFICACION: classification || "N/A",
      ESTADO: status || "N/A",
      IMAGENES: images || [],
      NOMBRE: name || "Desconocido",
      OCUPACION: occupation || "Desconocido",
      SEXO: sex || "N/A",
    };

    addChar(charFavorite);
  };

  return (
    <div className="div-charDetails">
      <div className="imgsChar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={name}
            className="char-img-Details"
            onClick={() => {
              setImagen(index);
            }}
          />
        ))}
      </div>
      {/*  */}
      <Card sx={{ maxWidth: 400, height: "auto", borderRadius: "20px" }}>
        <CardActionArea>
          {images.length > 0 && (
            <CardMedia
              component="img"
              height="300"
              image={images[imagen]}
              alt={name}
            />
          )}
          <Accordion id="accordion">
            <AccordionSummary
              id="charName"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
            >
              {name}
            </AccordionSummary>
            <div id="details-row">
              <AccordionDetails id="charDetails">
                Sex: {sex}
                <br />
                Status: {status}
                <br />
                Classification:
                {/* Validar que clasificacion sea un array */}
                {Array.isArray(classification) ? (
                  classification.map((dato, index) => (
                    <span key={index}>
                      {dato}
                      {index < classification.length - 1 ? ", " : ""}
                    </span>
                  ))
                ) : (
                  <span>{classification}</span>
                )}
                <br />
                Occupation:
                {Array.isArray(occupation) ? (
                  occupation.map((dato, index) => (
                    <span key={index}>
                      {dato}
                      {index < occupation.length - 1 ? ", " : ""}
                    </span>
                  ))
                ) : (
                  <span>{occupation}</span>
                )}
              </AccordionDetails>
              <AccordionActions id="accordion-btn">
                <div
                  id="btn-AgregarFavorito"
                  onClick={addCharacterFavorite}
                ></div>
              </AccordionActions>
            </div>
          </Accordion>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CharacterDetails;
