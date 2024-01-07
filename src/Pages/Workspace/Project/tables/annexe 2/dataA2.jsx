// const sections = [{ title: "",itemsTitle, items: 3 }];

const LIST_MOIS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const LIST_ANNEE = [1, 2, 3, 4];
export const dataA2 = ({ sections, notHasId, noLineTitle }) => {
  const result = [];
  for (let s of sections) {
    const compte = ({ title, total, id }) => ({
      num: id,
      total,
      title,
      commentaire: "",
      taux: 0,
      annee: LIST_ANNEE.map((a) => {
        return LIST_MOIS.map((i) => {
          return { ht: 0.0, tva: 0.0, tcc: 0.0 };
        });
      }),
    });

    const section = {
      id: notHasId ? undefined : sections.indexOf(s),
      title: s.title,
      comptes: [...Array(s.items)].map((t, id) =>
        compte({
          title: noLineTitle?"":s.itemsTitle + " " + (id + 1),
          total: false,
          id,
        })
      ),
    };
    result.push(section);
  }

  return result;
};
const copy = (table) => JSON.parse(JSON.stringify(table));
export const newSection = dataA2({
  notHasId: true,
  sections: [
    {
      title: "---",
      itemsTitle: "titre",
      items: 3,
    },
  ],
})[0];
const dataA2T1 = dataA2({
  sections: [
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title: "Par Produit (bien ou service) vendu",
      itemsTitle: "Produit",
      items: 3,
    },
    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Autre critère A",
      items: 3,
    },
    {
      title: 'Par "Autre critère B"',
      itemsTitle: "Autre critère B",
      items: 3,
    },
  ],
});

const dataA2T2 = copy(dataA2T1);
const dataA2T3 = copy(dataA2T1);
const dataA2T4 = copy(dataA2T1);
const dataA2T5 = copy(dataA2T1);
const dataA2T6 = copy(dataA2T1);
const dataA2T7 = copy(dataA2T1);
const dataA2T8 = copy(dataA2T1);
const dataA2T9 = copy(dataA2T1);
const dataA2T10 = copy(dataA2T1);
const dataA2T11 = copy(dataA2T1);
const dataA2T12 = copy(dataA2T1);
const dataA2T13=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Besoin Financé",
      itemsTitle:"Besoin",
      items:10
    },
    {
      title: "Par Produit (bien ou service) vendu",
      itemsTitle: "Produit",
      items: 3,
    },
    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Autre critère A",
      items: 3,
    }
  ]
})
const dataA2T14=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Besoin Financé",
      itemsTitle:"Besoin",
      items:3
    },
    {
      title: "Par Produit (bien ou service) vendu",
      itemsTitle: "Produit",
      items: 3,
    },
    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Autre critère A",
      items: 3,
    }
  ]
})
const dataA2T15=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Société",
      itemsTitle:"Société",
      items:3
    },

    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Autre critère A",
      items: 3,
    },

    {
      title: 'Par "Autre critère B"',
      itemsTitle: "Autre critère B",
      items: 3,
    },

    {
      title: 'Par "Autre critère C"',
      itemsTitle: "Autre critère C",
      items: 3,
    },
    {
      title: 'Par "Autre critère D"',
      itemsTitle: "Autre critère D",
      items: 3,
    }
  ]
})
const dataA2T16=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Immeuble",
      itemsTitle:"Immeuble",
      items:3
    },

    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Autre critère A",
      items: 3,
    },
    {
      title: 'Par "Autre critère B"',
      itemsTitle: "Autre critère B",
      items: 3,
    }
  ]
})
const dataA2T17=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Produit (bien ou service) vendu",
      itemsTitle:"Produit",
      items:3
    },

    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par Partenaire',
      itemsTitle: "Partenaire",
      items: 3,
    },
    {
      title: 'Par Projet',
      itemsTitle: "Projet",
      items: 3,
    }
  ]
})
const dataA2T18=copy(dataA2T17)
const dataA2T19=copy(dataA2T1)


const dataA2T20 = dataA2({
  sections: [
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title: "Par Produit (bien ou service) vendu",
      itemsTitle: "Produit",
      items: 3,
    },
    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par Fournisseur',
      itemsTitle: "Fournisseur",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Autre critère A",
      items: 3,
    },

  ],
});

const dataA2T21=copy(dataA2T20)
const dataA2T22=copy(dataA2T20)
const dataA2T23=copy(dataA2T20)
const dataA2T24=copy(dataA2T20)
const dataA2T26=copy(dataA2T20)
const dataA2T27=copy(dataA2T20)


const dataA2T28 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Achats de matières et fournitures A",
      itemsTitle: "Achats de matières et fournitures A",
      items: 3,
    },
    {
      title: "Achats de matières et fournitures B",
      itemsTitle: "Achats de matières et fournitures B",
      items: 3,
    },
    {
      title: "Achats de combustibles",
      itemsTitle: "Achats de combustibles",
      items: 3,
    },
    {
      title: "Achats de produits d'entretien",
      itemsTitle: "Achats de produits d'entretien",
      items: 3,
    },
    {
      title: "Achats de fournitures d'atelier et d'usine",
      itemsTitle: "Achats de fournitures d'atelier et d'usine",
      items: 3,
    },
    {
      title: 'Achats de fournitures de magasin',
      itemsTitle: "Achats de fournitures de magasin",
      items: 3,
    },
    {
      title: "Achats de fournitures de bureau",
      itemsTitle: "Achats de fournitures de bureau",
      items: 3,
    },
  ],
});


const dataA2T29 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Achats d'emballages perdus",
      itemsTitle: "Achats d'emballages perdus",
      items: 3,
    },
    {
      title: "Achats d'emballages récupérables non identifiables",
      itemsTitle: "Achats d'emballages récupérables non identifiables",
      items: 3,
    },
    {
      title: "Achats d'emballages à usage mixte",
      itemsTitle: "Achats d'emballages à usage mixte",
      items: 3,
    }
  ],
});


const dataA2T30 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Variation des stocks de matières premières",
      itemsTitle: "Variation des stocks de matières premières",
      items: 3,
    },
    {
      title: "Variation des stocks de matières et fournitures consommables",
      itemsTitle: "Variation des stocks de matières et fournitures consommables",
      items: 3,
    },
    {
      title: "Variation des stocks des emballages",
      itemsTitle: "Variation des stocks des emballages",
      items: 3,
    }
  ],
});
const dataA2T31 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Achats de fournitures non stockables (eau et électricité)",
      itemsTitle: "Achats de fournitures non stockables (eau et électricité)",
      items: 3,
    },
    {
      title: "Achats de fournitures d'entretien",
      itemsTitle: "Achats de fournitures d'entretien",
      items: 3,
    },
    {
      title: "Achats de petit outillage et petit équipement",
      itemsTitle: "Achats de petit outillage et petit équipement",
      items: 3,
    },
    {
      title: "Achats de fournitures de bureau",
      itemsTitle: "Achats de fournitures de bureau",
      items: 3,
    }
  ],
});
const dataA2T32 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Achats des travaux",
      itemsTitle: "Achats des travaux",
      items: 3,
    },
    {
      title: "Achats des études",
      itemsTitle: "Achats des études",
      items: 3,
    },
    {
      title: "Achats des prestations de service",
      itemsTitle: "Achats des prestations de service",
      items: 3,
    }
  ],
});
const dataA2T33 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Matières premières (A et B)",
      itemsTitle: "Matières premières (A et B)",
      items: 3,
    },
    {
      title: "Matières et fournitures consommables ",
      itemsTitle: "Matières et fournitures consommables ",
      items: 3,
    }
  ],
});
const dataA2T34 =copy(dataA2T33);
const dataA2T35 =copy(dataA2T33);

const dataA2T36 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Locations de terrains",
      itemsTitle: "Locations de terrains",
      items: 3,
    },
    {
      title: "Locations de constructions",
      //Locations de matériel et d'outillage
      itemsTitle: "Locations de constructions",
      items: 3,
    },
    {
      title: "Locations de mobilier et de matériel de bureau",
      itemsTitle: "Locations de mobilier et de matériel de bureau",
      items: 3,
    },
    {
      title: "Locations de matériel informatique",
      //Locations de matériel et d'outillage
      itemsTitle: "Locations de matériel informatique",
      items: 3,
    },
    {
      title: "Locations de matériel de transport",
      //Locations de matériel et d'outillage
      itemsTitle: "Locations de matériel de transport",
      items: 3,
    },
    {
      title: "Malis sur emballages rendus",
      //Locations de matériel et d'outillage
      itemsTitle: "Malis sur emballages rendus",
      items: 3,
    },
    {
      title: "Locations et charges locatives diverses",
      //Locations de matériel et d'outillage
      itemsTitle: "Locations et charges locatives diverses",
      items: 3,
    },
   
  ],
});
const dataA2T37=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Redevances de crédit-bail - mobilier et matériel",
      itemsTitle: "Redevances de crédit-bail - mobilier et matériel",
      items: 3,
    }
  ],
});
const dataA2T38=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Entretien et réparations des biens immobiliers",
      itemsTitle: "Entretien et réparations des biens immobiliers",
      items: 3,
    },
    {
      title:"Maintenance",
      itemsTitle:"Maintenance",
      items:3
    }

  ],
});
const dataA2T39=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Assurances multirisque (vol, incendie,R,C,)",
      itemsTitle: "Assurances multirisque (vol, incendie,R,C,)",
      items: 3,
    },
    {
      title:" Assurances - risques d'exploitation",
      itemsTitle:" Assurances - risques d'exploitation",
      items:3
    }
    ,
    {
      title:"Assurances - Matériel de transport",
      itemsTitle:"Assurances - Matériel de transport",
      items:3
    }
    ,
    {
      title:"Autres assurances",
      itemsTitle:"Autres assurances",
      items:3
    }
   
  ],
});
const dataA2T40=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Rémunérations du personnel occasionnel",
      itemsTitle: "Rémunérations du personnel occasionnel",
      items: 3,
    },
    {
      title:"Rémunérations du personnel intérimaire",
      itemsTitle:"Rémunérations du personnel intérimaire",
      items:3
    }
    ,
    {
      title:"Rémunérations du personnel détaché ou prêté à l'entreprise",
      itemsTitle:"Rémunérations du personnel détaché ou prêté à l'entreprise",
      items:3
    }
  
   
  ],
});
const dataA2T41=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Commissions et courtages",
      itemsTitle: "Honoraires",
      items: 3,
    },
    {
      title:"Honoraires",
      itemsTitle:"Honoraires",
      items:3
    }
   
   
  ],
});
const dataA2T42=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Redevances pour brevets",
      itemsTitle: "Redevances pour brevetss",
      items: 3,
    },
    {
      title:"Autres redevances",
      itemsTitle:"Autres redevances",
      items:3
    }
   
   
  ],
});
const dataA2T43=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Etudes générales",
      itemsTitle: "Etudes générales",
      items: 3,
    },
    {
      title:"Recherches",
      itemsTitle:"Recherches",
      items:3
    },
    {
      title:"Documentation générale",
      itemsTitle:"Documentation générale",
      items:3
    }
    ,
    {
      title:"Documentation technique",
      itemsTitle:"Documentation technique",
      items:3
    }
   
  ],
});
const dataA2T44=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Transports du personnel",
      itemsTitle: "Transports du personnel",
      items: 3,
    },
    {
      title:"Transports sur achats",
      itemsTitle:"Transports sur achats",
      items:3
    },
    {
      title:"Transports sur ventes",
      itemsTitle:"Transports sur ventes",
      items:3
    }
    ,
    {
      title:"Autres transports",
      itemsTitle:"Autres transports",
      items:3
    }
   
  ],
});
const dataA2T45=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Voyages et déplacements",
      itemsTitle: "Voyages et déplacements",
      items: 3,
    },
    {
      title:"Frais de déménagement",
      itemsTitle:"Frais de déménagement",
      items:3
    },
    {
      title:"Missions",
      itemsTitle:"Missions",
      items:3
    }
    ,
    {
      title:"Réceptions",
      itemsTitle:"Réceptions",
      items:3
    }
   
  ],
});
const dataA2T46=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Annoces et insertions",
      itemsTitle: "Annoces et insertions",
      items: 3,
    },
    {
      title:"Echantillons, catalogues et imprimés publicitaires",
      itemsTitle:"Echantillons, catalogues et imprimés publicitaires",
      items:3
    },
    {
      title:"Foires et expositions",
      itemsTitle:"Foires et expositions",
      items:3
    }
    ,
    {
      title:"Primes de publicité",
      itemsTitle:"Primes de publicité",
      items:3
    }
    ,
    {
      title:"Publications",
      itemsTitle:"Publications",
      items:3
    }
    ,
    {
      title:"Cadeaux à la clientèle",
      itemsTitle:"Cadeaux à la clientèle",
      items:3
    },
    {
      title:"Autres charges de publicité et relations publiques",
      itemsTitle:"Autres charges de publicité et relations publiques",
      items:3
    }
  ],
});
const dataA2T47=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Frais postaux",
      itemsTitle: "Frais postaux",
      items: 3,
    },
    {
      title:"Frais de téléphone",
      itemsTitle:"Frais de téléphone",
      items:3
    },
    {
      title:"Frais de télex et de télégramme",
      itemsTitle:"Frais de télex et de télégramme",
      items:3
    }
 
  ],
});
const dataA2T48=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Cotisations",
      itemsTitle: "Cotisations",
      items: 3,
    },
    {
      title:"Dons",
      itemsTitle:"Dons",
      items:3
    },
 
 
  ],
});
const dataA2T49=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Frais d'achat et de vente des titres",
      itemsTitle: "Frais d'achat et de vente des titres",
      items: 3,
    },
    {
      title:"Frais sur effets de commerce",
      itemsTitle:"Frais sur effets de commerce",
      items:3
    },
    {
      title: "Frais et commisions sur services bancaires",
      itemsTitle: "Frais et commisions sur services bancaires",
      items: 3,
    }
 
  ],
});
const dataA2T50=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Autres charges externes des exercices antérieurs 1",
      itemsTitle: "Autres charges externes des exercices antérieurs 1",
      items: 3,
    },
    {
      title:"Autres charges externes des exercices antérieurs 2",
      itemsTitle:"Autres charges externes des exercices antérieurs 2",
      items:3
    },
 
 
  ],
});
const dataA2T51=dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Rabais, remises et ristournes obtenus sur autres charges externes 1",
      itemsTitle: "Rabais, remises et ristournes obtenus sur autres charges externes 1",
      items: 3,
    },
    {
      title:"Rabais, remises et ristournes obtenus sur autres charges externes 2",
      itemsTitle:"Rabais, remises et ristournes obtenus sur autres charges externes 2",
      items:3
    },
 
 
  ],
});

const dataA2T52 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Taxe urbaine et taxe d'édilité",
      itemsTitle: "Taxe urbaine et taxe d'édilité",
      items: 3,
    },
    {
      title: "Patente",
      itemsTitle: "Patente",
      items: 3,
    },
    {
      title: "Taxes locales",
      itemsTitle: "Taxes locales",
      items: 3,
    },

  ],
});
const dataA2T53 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Impôts et taxes indirects 1",
      itemsTitle: "Impôts et taxes indirects 1",
      items: 3,
    },
    {
      title: "Impôts et taxes indirects 2",
      itemsTitle: "Impôts et taxes indirects 2",
      items: 3,
    },
    {
      title: "Impôts et taxes indirects 3",
      itemsTitle: "Impôts et taxes indirects 3",
      items: 3,
    },

  ],
});
const dataA2T54 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Droits d’enregistrement et de timbre",
      itemsTitle: "Droits d’enregistrement et de timbre",
      items: 3,
    },
    {
      title: "Taxes sur les véhicules",
      itemsTitle: "",
      items: 3,
    },
    {
      title: "Autres impôts, taxes et droits assimilés",
      itemsTitle: "",
      items: 3,
    },

  ],
});
const dataA2T55 = dataA2({
  noLineTitle:true,
  sections: [
    {
      title: "Impôts et taxes des exercices antérieurs 1",
      itemsTitle: "",
      items: 3,
    },
    {
      title: "Impôts et taxes des exercices antérieurs 2",
      itemsTitle: "",
      items: 3,
    },
    {
      title: "Impôts et taxes des exercices antérieurs 3",
      itemsTitle: "",
      items: 3,
    },

  ],
});

const dataA2T56 = dataA2({
 
  sections: [
    {
      title: "Sans détail",
      itemsTitle: "Détail",
      items: 3,
    },
    {
      title: "Par Administrateur",
      itemsTitle: "Administrateur",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Critère A",
      items: 3,
    },
    {
      title: 'Par "Autre critère B"',
      itemsTitle: "Critère B",
      items: 3,
    },
    {
      title: 'Par "Autre critère C"',
      itemsTitle: "Critère C",
      items: 3,
    },
    {
      title: 'Par "Autre critère D"',
      itemsTitle: "Critère D",
      items: 3,
    },

  ],
});
const dataA2T57=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Produit (bien ou service) vendu",
      itemsTitle:"Produit",
      items:3
    },

    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Critère A",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Critère B",
      items: 3,
    }
  ]
})


const dataA2T58=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Produit (bien ou service) vendu",
      itemsTitle:"Produit",
      items:3
    },

    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par Partenaire',
      itemsTitle: "Partenaire",
      items: 3,
    },
    {
      title: 'Par Projet',
      itemsTitle: "Projet",
      items: 3,
    }
  ]
})
const dataA2T59=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Produit (bien ou service) vendu",
      itemsTitle:"Produit",
      items:3
    },

    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par Partenaire',
      itemsTitle: "Partenaire",
      items: 3,
    },
    {
      title: 'Par Projet',
      itemsTitle: "Projet",
      items: 3,
    }
  ]
})
const dataA2T60=dataA2({
  sections:[
    {
      title: "Sans détail",
      itemsTitle: "Sans détail",
      items: 3,
    },
    {
      title:"Par Produit (bien ou service) vendu",
      itemsTitle:"Produit",
      items:3
    },

    {
      title: "Par Client",
      itemsTitle: "Client",
      items: 3,
    },
    {
      title: "Par Segment d'activité",
      itemsTitle: "Segment",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Critère A",
      items: 3,
    },
    {
      title: 'Par "Autre critère A"',
      itemsTitle: "Critère B",
      items: 3,
    }
  ]
})

export default {
  dataA2T1,
  dataA2T2,
  dataA2T3,
  dataA2T4,
  dataA2T5,
  dataA2T6,
  dataA2T7,
  dataA2T8,
  dataA2T9,
  dataA2T10,
  dataA2T11,
  dataA2T12,
  dataA2T13,
  dataA2T14,
  dataA2T15,
  dataA2T16,
  dataA2T17,
  dataA2T18,
  dataA2T19,
  dataA2T20,
  dataA2T21,
  dataA2T22,
  dataA2T23,
  dataA2T24,
  dataA2T27,
  dataA2T26,
  dataA2T28,
  dataA2T29,
  dataA2T30,
  dataA2T31,
  dataA2T32,
  dataA2T33,
  dataA2T34,
  dataA2T35,
  dataA2T36,
  dataA2T37,
  dataA2T38,
  dataA2T39,
  dataA2T40,
  dataA2T41,
  dataA2T42,
  dataA2T43,
  dataA2T44,
  dataA2T45,
  dataA2T46,
  dataA2T47,
  dataA2T48,
  dataA2T49,
  dataA2T50,
  dataA2T51,
  dataA2T52,
  dataA2T53,
  dataA2T54,
  dataA2T55,
  dataA2T56,
  dataA2T57,
  dataA2T58,
  dataA2T59,
  dataA2T60
 
};
