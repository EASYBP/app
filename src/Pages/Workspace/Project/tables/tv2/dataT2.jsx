export const formuleT6T9T11 = (row) =>
  ["t6", "t9", "t11"].map((t) => ({
    table: t,
    row,
    ne: t == "t11" ? true : false,
  }));
export const formuleT7T9T11 = (row) =>
  ["t7", "t9", "t11"].map((t) => ({
    table: t,
    row,
    ne: t == "t9" ? true : false,
  }));
const formuleGrise = (row) => [];
const createDataT2 = ({ first, secondList, sum, gris, double, special }) => {
  const sumField = !sum
    ? []
    : [
        {
          space: true,
        },
        {
          i: 200,

          title: sum,
          relation: secondList
            .map((s, i) => {
              return s.gris ? 0 : i + 1;
            })
            .filter((f) => f !== 0),
        },
      ];
  let i = 1;
  let doubleField = [];
  if (double) {
    for (let index = 0; index < double.length; index++) {
      doubleField.push({
        space: true,
      });
      const items = [];
      for (let j = 0; j < double[index].items.length; j++) {
        items.push({
          i: i,
          type: 2,
          num: i,
          title: double[index].items[j],
        });
        i++;
      }

      doubleField.push({
        i: 300 + index,
        title: double[index].title,
        relation: items.map((i) => i.i),
      });
      doubleField = doubleField.concat(items);
    }
  }
  const grisField = !gris
    ? []
    : gris
        .map((s, i) => {
          return [
            {
              space: true,
            },
            { type: 3, space: true },
          ];
        })
        .reduce((a, b) => a.concat(b));
  const secondField = !secondList
    ? []
    : secondList
        .map((s, i) => {
          return [
            {
              space: true,
            },
            s.gris
              ? { type: 3, space: true }
              : {
                  i: i + 1,
                  num: i + 1,
                  type: 2,
                  title: s.title,
                },
          ];
        })
        .reduce((a, b) => a.concat(b));
  const specialField = !special
    ? []
    : [
        {
          space: true,
        },
        {
          i: 500,
          num: 500,
          type: 2,
          title: special,
        },
      ];
  return [
    {
      i: 0,
      title: first.hide ? "" : first.title,
      type: 1,
      fromTableList: first.fromTableList,
    },
    ...doubleField,
    ...sumField,
    ...secondField,
    ...specialField,
    ...grisField,
    {
      space: true,
    },
    {
      i: 100,
      type: 4,
      title: first.title,
      relation: double
        ? doubleField
            .filter((d) => d.type == 2)
            .map((f) => f.i)
            .concat(special ? [500] : [])
        : secondList
            .map((s, i) => {
              return s.gris ? 0 : i + 1;
            })
            .filter((f) => f !== 0),
    },
    {
      space: true,
    },
    {
      i: 5,
      type: 4,
      title: "Ecart / Contrôle",
      fromLocal: [
        {
          row: 0,
        },
        {
          row: 100,
          ne: true,
        },
      ],
    },
  ];
};

//
const dataTV2_1 = createDataT2({
  first: {
    title: "Créances clients au 31/12/N",
    fromTableList: [...formuleT6T9T11(3421)],
  },
  secondList: [
    { title: "Créances clients sur vente de Marchandises au 31/12/N" },
    {
      title:
        "Créances clients sur vente de Biens et Services produits au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
});

const dataTV2_2 = createDataT2({
  first: {
    title: "Autres Créances clients au 31/12/N",
    fromTableList: [
      ...formuleT6T9T11(3423),
      ...formuleT6T9T11(3424),
      ...formuleT6T9T11(3425),
      ...formuleT6T9T11(3427),
      ...formuleT6T9T11(3428),
      ...formuleT6T9T11(3482),
    ],
  },
  secondList: [
    { title: "Autres Créances clients sur vente de Marchandises au 31/12/N" },
    {
      title:
        "Autres Créances clients sur vente de Biens et Services produits au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
});

const dataTV2_3 = createDataT2({
  first: {
    title: "Dettes clients au 31/12/N",
    fromTableList: [
      ...formuleT7T9T11(4421),
      ...formuleT7T9T11(4425),
      ...formuleT7T9T11(4428),
      ...formuleT7T9T11(4427),
    ],
  },
  secondList: [
    { title: "Dettes clients sur vente de Marchandises au 31/12/N" },
    {
      title:
        "Dettes clients sur vente de Biens et Services produits au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
});

//

const dataTV2_4 = createDataT2({
  first: {
    title: "Subventions à recevoir au 31/12/N",
    fromTableList: [...formuleT6T9T11(3451)],
  },
  secondList: [
    {
      title: "Subventions à recevoir sur subventions d'exploitation au 31/12/N",
    },
    {
      title:
        "Subventions à recevoir sur subventions d'investissement au 31/12/N",
    },
    {
      title: "Subventions à recevoir sur subventions d'équilibre au 31/12/N",
    },
    {
      gris: true,
    },
  ],
});

//
const dataTV2_5 = createDataT2({
  first: {
    title: "Associés débiteurs sur augmentation du capital au 31/12/N",
    fromTableList: [...formuleT6T9T11(3461), ...formuleT6T9T11(3462)],
  },
  secondList: [
    {
      title: "Associés débiteurs sur augmentation du capital au 31/12/N",
    },

    {
      gris: true,
    },
    {
      gris: true,
    },
    {
      gris: true,
    },
  ],
});
const dataTV2_34 = createDataT2({
  first: {
    title: "Associés créditeurs sur augmentation du capital au 31/12/N",
    fromTableList: [...formuleT7T9T11(4462)],
  },
  secondList: [
    {
      title: "Associés créditeurs sur augmentation du capital au 31/12/N",
    },

    {
      gris: true,
    },
    {
      gris: true,
    },
    {
      gris: true,
    },
  ],
});
//
const dataTV2_6 = createDataT2({
  first: {
    title: "Associés créditeurs au 31/12/N",
    fromTableList: [...formuleT7T9T11(4463), ...formuleT6T9T11(4468)],
  },
  secondList: [
    {
      title: "Associés créditeurs au 31/12/N",
    },

    {
      gris: true,
    },
    {
      gris: true,
    },
    {
      gris: true,
    },
  ],
});
const dataTV2_7 = createDataT2({
  first: {
    title: "Associés débiteurs au 31/12/N",
    fromTableList: [
      ...formuleT6T9T11(3463),
      ...formuleT6T9T11(3467),
      ...formuleT6T9T11(3468),
    ],
  },
  secondList: [
    {
      title: "Associés débiteurs au 31/12/N",
    },

    {
      gris: true,
    },
    {
      gris: true,
    },
    {
      gris: true,
    },
  ],
});
//
const dataTV2_8 = createDataT2({
  first: {
    title: "Associés débiteurs - opérations faites en commun au 31/12/N",
    fromTableList: [...formuleT6T9T11(3464)],
  },
  secondList: [
    {
      title:
        "Associés débiteurs - opérations faites en commun sur 7185 Profits sur opérations faites en commun au 31/12/N",
    },
    {
      title:
        "Associés débiteurs - opérations faites en commun sur  7186 Transfert de pertes sur opérations faites en commun au 31/12/N",
    },
    {
      gris: true,
    },
    {
      gris: true,
    },
  ],
});
//
const dataTV2_9 = createDataT2({
  first: {
    title: "Créances sur cessions d'immobilisations au 31/12/N",
    fromTableList: [...formuleT6T9T11(3481)],
  },
  secondList: [
    {
      title: "Créances sur cessions d'immobilisations au 31/12/N",
    },

    {
      gris: true,
    },
    {
      gris: true,
    },
    {
      gris: true,
    },
  ],
});
//
const dataTV2_10 = createDataT2({
  first: {
    title: "Divers débiteurs au 31/12/N",
    fromTableList: [
      ...formuleGrise(),
      ...formuleGrise(),
      ...formuleT6T9T11(3487),
      ...formuleT6T9T11(3488),
    ],
  },
  secondList: [
    {
      title: "Divers débiteurs sur jetons de présence perçus au 31/12/N",
    },
    {
      title:
        "Divers débiteurs sur revenus des immeubles non affectés à l'exploitation au 31/12/N",
    },
    {
      title:
        "Divers débiteur sur autres produits non courants liés à l'exploitation 3 (7585 Rentrées sur créances soldées ) au 31/12/N",
    },
    {
      title:
        "Divers débiteur sur produits financiers liés aux investissements (732 Produits des titres de participation et des autres titres immobilisés ) au 31/12/N",
    },
    {
      title:
        "Divers débiteur sur produits financiers liés aux investissements (73813 Revenus des autres créances financières / 7383 Revenus des créances rattachées  des participations ) au 31/12/N",
    },
  ],
});
//
const dataTV2_11 = createDataT2({
  first: {
    title: "Dettes fournisseurs au 31/12/N",
    fromTableList: [...formuleT7T9T11(4411)],
  },
  secondList: [
    {
      title: "Dettes fournisseurs sur Achat de Marchandises au 31/12/N",
    },
    {
      title:
        "Dettes fournisseurs sur Achat de Matières et fournitures au 31/12/N",
    },
    {
      title:
        "Dettes fournisseurs sur Autres achats et charges externes au 31/12/N",
    },
    { gris: true },
  ],
});
const dataTV2_35 = createDataT2({
  first: {
    title: "Autres Dettes fournisseurs au 31/12/N",
    fromTableList: [
      ...formuleT7T9T11(4413),
      ...formuleT7T9T11(4415),
      ...formuleT7T9T11(4417),
      ...formuleT7T9T11(4418),
    ],
  },
  secondList: [
    {
      title: "Autres Dettes fournisseurs sur achats de Marchandises au 31/12/N",
    },
    {
      title:
        "Autres Dettes fournisseurs sur achats de Matières et fournitures au 31/12/N",
    },
    {
      title:
        "Autres Dettes fournisseurs sur achats de Matières et fournitures au 31/12/N",
    },
    { gris: true },
  ],
});
const dataTV2_36 = createDataT2({
  first: {
    title: "Créances fournisseurs au 31/12/N",
    fromTableList: [
      ...formuleT6T9T11(3411),
      ...formuleT6T9T11(3413),
      ...formuleT6T9T11(3417),
      ...formuleT6T9T11(3418),
    ],
  },
  secondList: [
    {
      title: "Créances fournisseurs sur achats de Marchandises au 31/12/N",
    },
    {
      title:
        "Créances fournisseurs sur achats de Matières et fournitures au 31/12/N",
    },
    {
      title:
        "Créances fournisseurs sur Autres achats et charges externes au 31/12/N",
    },
    {
      title:
        "Créances fournisseurs sur acquisitions des immobilisations au 31/12/N",
    },
  ],
});
//t2_9
const dataTV2_12 = createDataT2({
  first: {
    title: "4432 Rémunérations dues au personnel",
    fromTableList: [...formuleT7T9T11(4432)],
  },
  secondList: [
    {
      title: "Dettes Personnel sur Salaires au 31/12/N",
    },

    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
const dataTV2_13 = createDataT2({
  first: {
    title: "Autres Dettes personnel au 31/12/N",
    fromTableList: [
      ...formuleT7T9T11(4434),
      ...formuleT7T9T11(4433),
      ...formuleT7T9T11(4438),
    ],
  },
  secondList: [
    {
      title: "Autres Dettes Personnel sur Salaires au 31/12/N",
    },

    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
const dataTV2_14 = createDataT2({
  first: {
    title: "Créances Personnel au 31/12/N",
    fromTableList: [...formuleT6T9T11(3431), ...formuleT6T9T11(3438)],
  },
  secondList: [
    {
      title: "Créances Personnel sur Salaires au 31/12/N",
    },

    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
//
const dataTV2_15 = createDataT2({
  first: {
    title: "Dettes sociales au 31/12/N",
    fromTableList: [...formuleT7T9T11(4441)],
  },
  secondList: [
    {
      title: "Dettes sociales sur CNSS au 31/12/N",
    },

    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
const dataTV2_16 = createDataT2({
  first: {
    title: "Autres dettes sociales au 31/12/N",
    fromTableList: [
      ...formuleT7T9T11(4443),
      ...formuleT7T9T11(4445),
      ...formuleT7T9T11(4448),
    ],
  },
  double: [
    {
      title:
        "Autres dettes sociales sur charges sociales et autres charges sociales (hors charges à payer et provision CS sur CP) au 31/12/N",
      items: [
        "- Caisse de retraite",
        "- Mutuelle",
        "- Autre organismes sociaux",
      ],
    },
  ],
  gris: [{ gris: true }, { gris: true }, { gris: true }],
});
const dataTV2_17 = createDataT2({
  first: {
    title: "Créances Etat au 31/12/N",
    hide: true,
    fromTableList: [...formuleT6T9T11(3458)],
  },
  secondList: [{ gris: true }, { gris: true }, { gris: true }, { gris: true }],
});

//
const dataTV2_18 = createDataT2({
  first: {
    title: "Dettes Etat Taxe - Dettes fiscales au 31/12/N",
    fromTableList: [...formuleT7T9T11(4452), ...formuleT7T9T11(4457)],
  },

  double: [
    {
      title:
        "Dettes Etat Taxe - dettes fiscales sur Impôt et taxes (hors IS, TVA et IR) au 31/12/N",
      items: [
        "- Taxes sur les services communaux",
        "- Taxe professionnelle",
        "- Autres taxes ",
      ],
    },
  ],
  gris: [{ gris: true }, { gris: true }, { gris: true }],
});
const dataTV2_19 = createDataT2({
  first: {
    title: "Etat - autres comptes créditeurs au 31/12/N",
    fromTableList: [...formuleT7T9T11(4458)],
  },
  secondList: [
    {
      title:
        "Dettes Etat Taxe sur Charges exceptionnelles liées à l'exploitation 2 (6581 Pénalités sur marchés et dédits / 6582 Rappels d’impôts (autres qu’impôts sur les résultats) au 31/12/N",
    },

    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
const dataTV2_20 = createDataT2({
  first: {
    title: "Créances Etat au 31/12/N",

    fromTableList: [...formuleT6T9T11(3458)],
  },
  double: [
    {
      title:
        "Créances Etat - créances fiscales sur impôt et taxes (hors IS, TVA et IR) au 31/12/N",
      items: [
        "- Taxes sur les services communaux",
        "- Taxes sur les services communaux",
        "- Taxes sur les services communaux",
      ],
    },
    {
      title:
        "Créances Etat - créances sociales sur organismes sociaux au 31/12/N",
      items: [
        "- Créances Etat - créances sociales sur CNSS au 31/12/N",
        "- Créances Etat - créances sociales sur Caisse de retraite au 31/12/N",
        "- Créances Etat - créances sociales sur Mutuelle au 31/12/N",
        "- Créances Etat - créances sociales sur Autres organismes sociaux au 31/12/N",
      ],
    },
  ],
  special:
    "Créances Etat - sur Autres produits non courants liés à l'exploitation (7581 Pénalités et dédits reçus / 7582 Dégrèvement d’impôts (autres qu’impôts sur les résultats) / 7586 Dons, libéralités et lots reçus) au 31/12/N",
  gris: [{ gris: true }],
});

//
const dataTV2_21 = createDataT2({
  first: {
    title: "Dettes fiscales IS au 31/12/N",
    fromTableList: [...formuleT7T9T11(4453)],
  },
  secondList: [
    {
      title: "Dettes fiscales IS au 31/12/N",
    },
    {
      title:
        "Dettes fiscales autres impôts (Impôt sur les plus-values de cession à un taux spécifique,...) au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
});
const dataTV2_22 = createDataT2({
  first: {
    title: "Créances fiscales IS au 31/12/N",
    fromTableList: [...formuleT6T9T11(3457)],
  },
  secondList: [
    {
      title: "Créances fiscales IS au 31/12/N",
    },
    {
      title:
        "Créances fiscales autres impôts (Impôt sur les plus-values de cession à un taux spécifique,...) au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
});

//
const dataTV2_23 = createDataT2({
  first: {
    title: "Dettes fiscales IR au 31/12/N",
    fromTableList: [...formuleT7T9T11(4454)],
  },
  secondList: [
    {
      title: "Dettes fiscales IR sur salaires au 31/12/N",
    },
    {
      title: "Autres dettes fiscales IR (IR sur dividendes,...) au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
});
const dataTV2_24 = createDataT2({
  first: {
    title: "Créances fiscales IR au 31/12/N",
    fromTableList: [...formuleT6T9T11(3457)],
  },
  secondList: [
    {
      title: "Créances fiscales IR au 31/12/N",
    },
    {
      title: "Autres dettes fiscales IR (IR sur dividendes,...) au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
});

//

const dataTV2_25 = createDataT2({
  first: {
    title: "456 Etat, TVA due (suivant déclarations)",
    fromTableList: [...formuleT7T9T11(4456)],
  },
  secondList: [
    {
      title: "456 Etat, TVA due (suivant déclarations) au 31/12/N",
    },

    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
//
const dataTV2_26 = createDataT2({
  first: {
    title: "Associés créditeurs sur réduction de capital au 31/12/N",
    fromTableList: [...formuleT6T9T11(4461)],
  },
  secondList: [
    {
      title: "Associés créditeur sur réduction de capital  au 31/12/N",
    },
    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
//
const dataTV2_27 = createDataT2({
  first: {
    title: "Associés créditeurs - opérations faites en commun au 31/12/N",
    fromTableList: [...formuleT6T9T11(4464)],
  },
  secondList: [
    {
      title:
        "Associés créditeurs - opérations faites en commun sur 6185 Pertes sur opérations faites en commun au 31/12/N",
    },
    {
      title:
        "Associés créditeurs - opérations faites en commun sur  6186 Transfert de profits sur opérations faites en commun au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
}); //
const dataTV2_28 = createDataT2({
  first: {
    title: "Associés créditeurs sur distribution de dividendes au 31/12/N",
    fromTableList: [...formuleT6T9T11(4465)],
  },
  secondList: [
    {
      title: "Associés créditeurs sur distribution de dividendes au 31/12/N",
    },
    { gris: true },
    { gris: true },
    { gris: true },
  ],
}); //
const dataTV2_29 = createDataT2({
  first: {
    title: "Dettes sur acquisitions d'immobilisations au 31/12/N",
    fromTableList: [...formuleT6T9T11(4481)],
  },
  secondList: [
    {
      title: "Dettes sur acquisitions d'immobilisations au 31/12/N",
    },
    { gris: true },
    { gris: true },
    { gris: true },
  ],
}); //
const dataTV2_30 = createDataT2({
  first: {
    title:
      "Dettes sur acquisitions de titres et valeurs de placement au 31/12/N",
    fromTableList: [...formuleT6T9T11(4483)],
  },
  secondList: [
    {
      title:
        "Dettes sur acquisitions de titres et valeurs de placement au 31/12/N",
    },
    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
//
const dataTV2_31 = createDataT2({
  first: {
    title: "4484 Obligations échues à rembourser au 31/12/N",
    fromTableList: [...formuleT6T9T11(4484)],
  },
  secondList: [
    {
      title: "4484 Obligations échues à rembourser au 31/12/N",
    },
    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
//
const dataTV2_32 = createDataT2({
  first: {
    title: "Obligations, coupons à payer (intérêts) au 31/12/N",
    fromTableList: [...formuleT6T9T11(4485)],
  },
  secondList: [
    {
      title: "4485 Obligations, coupons à payer (intérêts) au 31/12/N",
    },
    { gris: true },
    { gris: true },
    { gris: true },
  ],
});
//
const dataTV2_33 = createDataT2({
  first: {
    title: "Divers créanciers au 31/12/N",
    fromTableList: [...formuleT6T9T11(4487), ...formuleT6T9T11(4488)],
  },
  secondList: [
    {
      title: "Divers créanciers sur jetons de présence versés au 31/12/N",
    },
    {
      title:
        "Divers créanciers sur autres charges non courantes 1 (subvention accordées) au 31/12/N",
    },
    { gris: true },
    { gris: true },
  ],
});
//
export default {
  dataTV2_1,
  dataTV2_2,
  dataTV2_3,
  dataTV2_4,
  dataTV2_5,
  dataTV2_6,
  dataTV2_7,
  dataTV2_8,

  dataTV2_9,
  dataTV2_10,
  dataTV2_11,
  dataTV2_12,
  dataTV2_13,
  dataTV2_14,
  dataTV2_15,
  dataTV2_16,
  dataTV2_17,
  dataTV2_18,
  dataTV2_19,
  dataTV2_20,
  dataTV2_21,
  dataTV2_22,
  dataTV2_23,
  dataTV2_24,
  dataTV2_25,
  dataTV2_26,
  dataTV2_27,
  dataTV2_28,
  dataTV2_29,
  dataTV2_30,
  dataTV2_31,
  dataTV2_32,
  dataTV2_33,
  //special pour la table tv2_3
  dataTV2_34,
  //specail
  dataTV2_35,
  dataTV2_36,
};
