import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import moment from "moment";
import { contentPdf } from "../json/ContentPdf";
import "../style/PdfGenerate.css";

function PdfGenerate(props) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  let openPdf = () => {
    pdfMake.createPdf(pdfTemplate).open();
  };

  const isDisabled = () => {
    let controlValue = Object.values(props);
    if (Object.keys(props).length === 5) {
      for (let i = 0; i < controlValue.length; i++) {
        if (controlValue[i] === "") {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  };

  let pdfTemplate = {
    content: [
      {
        ...contentPdf[0],
      },
      `\nIl/la sottoscritto/a ${props.nome} ${props.cognome} nato a ${
        props.nascita
      } il ${moment(props.dataDiNascita).format("DD/MM/yyyy")}`,
      `\nConsapevole che chiunque rilascia dichiarazioni mendaci è punito ai sensi del codice penale e delle leggi speciali in materia, ai sensi e per gli effetti dell'art. 46 D.P.R. n. 445/2000`,
      {
        ...contentPdf[1],
      },

      `\n${props.descrizione}`,
      {
        ...contentPdf[2],
      },
    ],
  };

  return (
    <div>
      <input
        className={isDisabled() === true ? "button__disabled" : "button"}
        type="button"
        disabled={isDisabled()}
        value="Genera autocertificazione"
        onClick={openPdf}
      />
    </div>
  );
}

export default PdfGenerate;
