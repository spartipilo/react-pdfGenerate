import moment from "moment";

export const contentPdf = [
  {
    text: "Dichiarazione sostitutiva di certifiazione",
    style: { alignment: "center", bold: true, fontSize: 24 },
  },

  {
    text: "\nDICHIARA",
    style: { alignment: "center", bold: true, fontSize: 24 },
  },
  // PART OF NAME AND SIGN
  {
    layout: "noBorders",
    table: {
      widths: ["*", "*"],
      body: [
        [
          { text: "\n\n\n\n\n\n\nData", style: { bold: true } },
          { text: "\n\n\n\n\n\n\nFirma", style: { bold: true } },
        ],
        [
          "\n\n" + moment().format("DD/MM/yyyy"),
          "\n\n_________________________________",
        ],
      ],
    },
  },
];
