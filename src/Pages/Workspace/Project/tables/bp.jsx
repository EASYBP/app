export const totalActif = {
  title: "Total Actif",
  elements: [
    {
      title: "Immobilisation En Non Valeur",
      elements: [
        {
          title: "Valeurs brutes",
          elements: [
            { num: 211, title: "Frais préliminaires" },
            { num: 212, title: "Charges q répartir sur plusieurs exercices" },
            { num: 213, title: "Primes de remboursement des obligaions" },
          ],
        },
        {
          title: "Amortissements et dépréciations",
          elements: [
            { num: 2811, title: "Amortisements des frais préliminaires" },
            { num: 2812, title: "Amortisements des des charges à repartir" },
            {
              num: 2813,
              title:
                "Amortisements des primes de remboursement des obligations",
            },
          ],
        },
      ],
    },
    {
      title: "Immobilisation incorporelles",
      elements: [
        {
          title: "Valeurs brutes",
          elements: [
            { num: 221, title: "Immobilisation en recherche et développement" },
            {
              num: 222,
              title: "Brevets, marques, droits et valeurs similaires",
            },
            { num: 223, title: "Fonds commercial" },
            { num: 228, title: "Autres immobilisations incorporelles" },
          ],
        },
        {
          title: "Amortissements et dépréciations",
          elements: [
            {
              num: 2821,
              title:
                "Amortisements de l'immobilisation en recherche et développement",
            },
            {
              num: 2822,
              title:
                "Amortisements des brevets, marques, droits et valeurs similaires",
            },
            { num: 2823, title: "Amortisements du fonds commercial" },
            {
              num: 2828,
              title: "Amortisements des autres immobilisations incorporelles",
            },
            {
              num: 2920,
              title:
                "Provisions pour dépréciation des immobilisations incorporelles",
            },
          ],
        },
      ],
    },
    {
      title: "Immobilisations corporelles",
      elements: [
        {
          title: "Valeurs brutes",
          elements: [
            { num: 231, title: "Terrains" },
            { num: 232, title: "Constructions" },
            {
              num: 233,
              title: "Installations techniques, matériel et outillage",
            },
            { num: 234, title: "Matériel de transport" },
            {
              num: 235,
              title: "Mobilier, matériel de bureau et aménagements divers",
            },
            { num: 238, title: "Autres immobilisations corporelles" },
            { num: 239, title: "Immobilisations corporelles en cours" },
          ],
        },
        {
          title: "Amortissements et dépréciations",
          elements: [
            { num: 2831, title: "Amortissements des terrains" },
            { num: 2832, title: "Amortissements des constructions" },
            {
              num: 2833,
              title:
                "Amortissements des installations techniques, matériel et outillage",
            },
            { num: 2834, title: "Amortissements du matériel de transport" },
            {
              num: 2835,
              title:
                "Amortissements du mobilier, matériel de bureau et aménagements divers",
            },
            {
              num: 2838,
              title: "Amortissements des autres immobilisations corporelles",
            },
            {
              num: 2930,
              title:
                "Provisions pour déprécation des immobilisations corporelles",
            },
          ],
        },
      ],
    },
    {
      title: "Immobilisations financières",
      elements: [
        {
          title: "Valeurs brutes",
          elements: [
            { num: 241, title: "Prêts immobilsés" },
            { num: 248, title: "Autres créances financières" },
            { num: 251, title: "Titres de participation" },
            { num: 258, title: "Autres titres immobilisés" },
          ],
        },
        {
          title: "Amortissements et dépréciations",
          elements: [
            {
              num: 2941,
              title: "Provisions pour dépréciation des prêts immobilsés",
            },
            {
              num: 2948,
              title:
                "Provisions pour dépréciation des autres créances financières",
            },
            {
              num: 2951,
              title: "Provisions pour dépréciation des titres de participation",
            },
            {
              num: 2958,
              title:
                "Provisions pour dépréciation des autres titres immobilisés",
            },
          ],
        },
      ],
    },
    {
      title: "Ecarts de Conversion-Actif",
      elements: [
        {
          title: "Ecarts de Conversion-Actif",
          elements: [
            { num: 2710, title: "Diminution des créances immobilisées" },
            { num: 2720, title: "Augmentation des dettes de financement" },
          ],
        },
      ],
    },
    {
      title: "Stocks et en-cours",
      elements: [
        {
          title: "Valeurs brutes",
          elements: [
            { num: 311, title: "Marchandises" },
            { num: 312, title: "Matières et fournitures consommables" },
            { num: 313, title: "Produits en cours" },
            {
              num: 314,
              title: "Produits intermédiaires et produits résiduels",
            },
            { num: 315, title: "Produits en finis" },
          ],
        },
        {
          title: "Dépréciations",
          elements: [
            {
              num: 3911,
              title: "Provisions pour dépréciation des marchandises",
            },
            {
              num: 3912,
              title:
                "Provisions pour dépréciation des matières et fournitures consommables",
            },
            {
              num: 3913,
              title: "Provisions pour dépréciation des produits en cours",
            },
            {
              num: 3914,
              title:
                "Provisions pour dépréciation des produits intermédiaires et produits résiduels",
            },
            {
              num: 3915,
              title: "Provisions pour dépréciation des produits en finis",
            },
          ],
        },
      ],
    },
    {
      title: "Créances de l'actif circulant",
      elements: [
        {
          num: 341,
          title: "Fournisseurs débiteurs, avances et acomptes-Valeurs brutes",
          elements: [
            {
              num: 3411,
              title:
                "Fournisseurs - avances et acomptes versés sur commandes d'exploitation",
            },
            {
              num: 3413,
              title:
                "Fournisseurs - créances pour emballages et matériel à rendre",
            },
            {
              num: 3417,
              title:
                "Rabais, remises et ristournes à obtenir - avoirs non encore reçus",
            },
            { num: 3418, title: "Autres fournisseurs débiteurs" },
          ],
        },
        {
          num: 394,
          title: "Fournisseurs débiteurs, avances et acomptes- Dépréciations",
          elements: [
            {
              num: 3941,
              title:
                "Provisions pour dépréciation - fournisseurs débiteurs, avances et acomptes",
            },
          ],
        },
        {
          relaion: [
            {
              num: 394,
              title:
                "Fournisseurs débiteurs, avances et acomptes- Dépréciations",
            },
            {
              num: 341,
              title:
                "Fournisseurs débiteurs, avances et acomptes-Valeurs brutes",
            },
          ],
          num: 341,
          title: "Fournisseurs débiteurs, avances et acomptes- Valeurs Nettes",
        },
        {
          num: 342,
          title: "Clients et comptes rattachés-Valeurs Brutes",
          elements: [
            { num: 3421, title: "Clients" },
            { num: 3423, title: "Clients - retenues de garantie" },
            { num: 3424, title: "Clients douteux ou litigieux" },
            { num: 3425, title: "Clients - effets à recevoir" },
            {
              num: 3427,
              title:
                "Clients - factures à établir et créances sur travaux non encore facturés",
            },
            { num: 3428, title: "Autres clients et comptes rattachés" },
          ],
        },
        {
          num: 394,
          title: "Clients et comptes rattachés- Dépréciations",
          elements: [
            {
              num: 3942,
              title:
                "Provisions pour dépréciation - Clients et comptes rattachés",
            },
          ],
        },
        {
          relaion: [
            { num: 342, title: "Clients et comptes rattachés-Valeurs Brutes" },
            {
              num: 394,
              title: "Clients et comptes rattachés- Dépréciations",
            },
          ],
          num: 342,
          title: "Clients et comptes rattachés- Valeurs Nettes",
        },
        {
          num: 343,
          title: "Personnel - débiteur - Valeurs Brutes",
          elements: [
            { num: 3431, title: "Avances et acomptes au personnel" },
            { num: 3438, title: "Personnel - autres débiteurs" },
          ],
        },
        {
          num: 394,
          title: "Personnel - débiteur - Depréciation",
          elements: [
            {
              num: 3943,
              title: "Provisions pour dépréciation du personnel - débiteur",
            },
          ],
        },
        {
          relaion: [
            {
              num: 343,
              title: "Personnel - débiteur - Valeurs Brutes",
            },
            { num: 394, title: "Personnel - débiteur - Depréciation" },
          ],
          num: 343,
          title: "Personnel - débiteur - Valeurs Nettes",
        },
        {
          num: 345,
          title: "Etat-débiteur-Valeurs brutes",
          elements: [
            { num: 3451, title: "Subventions à recevoir" },
            { num: 3453, title: "Acomptes sur impôts sur les résultats" },
            { num: 3455, title: "Etat - TVA récupérable" },
            { num: 3456, title: "Etat - crédit de TVA {suivant déclaration}" },
            { num: 3457, title: "Etat - créance IR / {salaires, dividende,…}" },
            { num: 3458, title: "Etat - autres comptes débiteurs {CNSS}" },
          ],
        },
        {
          num: 394,
          title: "Personnel - débiteur - Depréciation",
          elements: [{ num: 3945, title: "Provision Etat-débiteur" }],
        },
        {
          relaion: [
            { num: 345, title: "Etat-débiteur-Valeurs brutes" },
            {
              num: 394,
              title: "Personnel - débiteur - Depréciation",
            },
          ],
          num: 345,
          title: "Etat-débiteur-Valeurs nettes",
        },
        {
          num: 346,
          title: "Groupe et associés-Valeurs brutes",
          elements: [
            { num: 3461, title: "Associés - comptes d'apport en société" },
            {
              num: 3462,
              title: "Actionnaires - capital souscrit et appelé non versé",
            },
            { num: 3463, title: "Comptes courants des associés débiteurs" },
            { num: 3464, title: "Associés - opérations faites en commun" },
            { num: 3467, title: "Créances rattachées aux comptes d'associés" },
            { num: 3468, title: "Autres comptes d'associés débiteurs " },
          ],
        },
        {
          num: 394,
          title: "Groupe et associés-Depréciation",
          elements: [
            {
              num: 3945,
              title:
                "Provisions pour dépréciation des comptes d'associés débiteurs",
            },
          ],
        },
        {
          relaion: [
            { num: 394, title: "Groupe et associés-Depréciation" },
            { num: 346, title: "Groupe et associés-Valeurs brutes" },
          ],
          num: 346,
          title: "Groupe et associés-Depréciation",
        },
        {
          num: 348,
          title: "Autres débiteurs-Valeurs brutes",
          elements: [
            { num: 3481, title: "Créances sur cessions d'immobilisations" },
            {
              num: 3482,
              title: "Créances sur cessions d'éléments d'actif circulant",
            },
            { num: 3487, title: "Créances rattachées aux autres débiteurs" },
            { num: 3488, title: "Divers débiteurs" },
          ],
        },
        {
          num: 394,
          title: "Autres débiteurs-Depréciation",
          elements: [
            {
              num: 3948,
              title: "Provisions pour dépréciation Autres débiteurs",
            },
          ],
        },
        {
          relaion: [
            { num: 348, title: "Autres débiteurs-Valeurs brutes" },
            { num: 394, title: "Autres débiteurs-Depréciation" },
          ],
          num: 348,
          title: "Autres débiteurs-Valeurs nettes",
        },
        {
          num: 349,
          title: "Comptes de régularisation - actif-Valeurs brutes",
          elements: [
            { num: 3491, title: "Charges constatées d'avance" },
            { num: 3493, title: "Intérêts courus et non échus à percevoir" },
            {
              num: 3495,
              title: "Comptes de répartition périodique des charges",
            },
            {
              num: 3497,
              title: "Comptes transitoires ou d'attente - débiteurs",
            },
          ],
        },
      ],
    },
    {
      title: "Titres et valeurs de placement",
      elements: [
        {
          title: "Valeurs brutes",
          elements: [
            { num: 3501, title: "Actions, partie libérée" },
            { num: 3502, title: "Actions, partie non libérée" },
            { num: 3504, title: "Obligations" },
            { num: 3506, title: "Bons de caisse et bons de trésor" },
            {
              num: 3508,
              title: "Autres titres et valeurs de placement similaires",
            },
          ],
        },
        {
          title: "Depréciation",
          elements: [
            {
              num: 3950,
              title:
                "Provisions pour dépréciation des titres et valeurs de placement",
            },
          ],
        },
      ],
    },
    {
      title: "Ecarts de Conversion-Actif {Eléments circulants}",
      elements: [
        {
          title: "Ecarts de Conversion-Actif {Eléments circulants}",
          elements: [
            { num: 3701, title: "Diminution des créances circulantes" },
            { num: 3702, title: "Augmentation des dettes circulantes" },
          ],
        },
      ],
    },
    {
      title: "Trésorerie - Actif",
      elements: [
        {
          title: "Valeurs brutes",
          elements: [
            { num: 511, title: "Chèques et valeurs à encaisser" },
            {
              num: 514,
              title:
                "Banques, Trésorerie Générale et chèques postaux débiteurs",
            },
            { num: 516, title: "Caisses, régies d'avances et accréditifs" },
          ],
        },
        {
          title: "Depréciation",
          elements: [
            {
              num: 590,
              title: "Provisions pour dépréciation des comptes de trésorerie",
            },
          ],
        },
      ],
    },
  ],
};
export const totalPassif = {
  title: "Total Passif",
  elements: [
    {
      title: "Capitaux propres",
      elements: [
        {
          title: "Capitaux propres hors résultat net de la période",
          elements: [
            { num: 1111, title: "Capital social" },
            {
              num: 1119,
              title: "Moins : Actionnaires, capital souscrit-non appelé",
            },
            { num: 1120, title: "Primes d'émission, de fusion et d'apport" },
            { num: 1130, title: "Ecarts de réévaluation" },
            { num: 1140, title: "Réserve légale" },
            { num: 1150, title: "Autres réserves" },
            { num: 1160, title: "Report à nouveau {débiteur et créditeur}" },
            {
              num: 1180,
              title:
                "Résultats nets en instance d'affectation {débiteurs et créditeurs}",
            },
          ],
        },
        {
          title: "Résultat net de l'exercice",
          elements: [
            {
              num: 1190,
              title: "Résultat net de l'exercice {débiteur et créditeur}",
            },
          ],
        },
      ],
    },
    {
      title: "Capitaux propres assimilés",
      elements: [
        {
          title: "Subventions d'investissement",
          elements: [
            { num: 1311, title: "Subventions d'investissement reçues" },
            {
              num: 1319,
              title: "Subventions d'investissement inscrites au CPC",
            },
          ],
        },
        {
          title: "Provisions réglementées",
          elements: [
            { num: 1351, title: "Provisions pour amortissements dérogatoires" },
            {
              num: 1352,
              title: "Provisions pour plus-values en instance d'imposition",
            },
            { num: 1354, title: "Provisions pour investissements" },
            {
              num: 1355,
              title: "Provisions pour reconstitution des gisements",
            },
            {
              num: 1356,
              title: "Provisions pour acquisition et construction de logements",
            },
            { num: 1358, title: "Autres provisions réglementées" },
          ],
        },
      ],
    },
    {
      title: "Dettes de financement",
      elements: [
        {
          title: "Dettes de financement",
          elements: [{ num: 1410, title: "Emprunts obligataires" }],
        },
        {
          title: "Autres dettes de financement",
          elements: [
            {
              num: 1481,
              title: "Emprunts auprès des établissements de crédit",
            },
            { num: 1482, title: "Avances de l'Etat" },
            { num: 1483, title: "Dettes rattachées à des participations" },
            { num: 1484, title: "Billets de fonds" },
            { num: 1485, title: "Avances reçues et comptes courants bloqués" },
            { num: 1486, title: "Fournisseurs d'immobilisation" },
            { num: 1487, title: "Dépôts et cautionnements reçues" },
            { num: 1488, title: "Dettes de financement diverses" },
          ],
        },
      ],
    },
    {
      title: "Provisions pour risques et charges",
      elements: [
        {
          title: "Provisions pour risques",
          elements: [
            { num: 1511, title: "Provisions pour litiges" },
            {
              num: 1512,
              title: "Provisions pour garanties données aux clients",
            },
            { num: 1513, title: "Provisions pour propre assureur" },
            { num: 1514, title: "Provision pour pertes sur marchés à terme" },
            {
              num: 1515,
              title: "Provisions pour amendes, double droits, pénalités",
            },
            { num: 1516, title: "Provisions pour pertes de change" },
            { num: 1518, title: "Autres provisions pour risques" },
          ],
        },
        {
          title: "Provisions pour risques",
          elements: [
            { num: 1551, title: "Provisions pour impôts" },
            {
              num: 1552,
              title:
                "Provisions pour pensions de retraite et obligations similaires",
            },
            {
              num: 1555,
              title:
                "Provisions pour charges à répartir sur plusieurs exercices",
            },
            { num: 1558, title: "Autres provisions pour charges" },
          ],
        },
      ],
    },
    {
      title: "Ecarts de Conversion-Passif",
      elements: [
        {
          title: "Ecarts de Conversion-Passif",
          elements: [
            { num: 1710, title: "Augmentation des créances immobilisées" },
            { num: 1720, title: "Diminution des dettes de financement" },
          ],
        },
      ],
    },
    {
      title: "Dettes du passif circulant",
      elements: [
        {
          title: "Fournisseurs et comptes rattachés",
          elements: [
            { num: 4411, title: "Fournisseurs" },
            { num: 4413, title: "Fournisseurs - retenues de garantie" },
            { num: 4415, title: "Fournisseurs - effets à payer" },
            { num: 4417, title: "Fournisseurs - factures non parvenues" },
            { num: 4418, title: "Autres fournisseurs et comptes rattachés" },
          ],
        },
        {
          title: "Clients créditeurs, avances et acomptes",
          elements: [
            {
              num: 4421,
              title:
                "Clients - avances et acomptes reçus sur commandes en cours",
            },
            {
              num: 4425,
              title: "Clients - dettes pour emballages et matériel consignés",
            },
            {
              num: 4427,
              title:
                "Rabais, remises et ristournes à accorder - avoirs à établir",
            },
            { num: 4428, title: "Autres clients créditeurs" },
          ],
        },
        {
          title: "Personnel - créditeur",
          elements: [
            { num: 4432, title: "Rémunérations dues au personnel" },
            { num: 4433, title: "Dépôts du personnel créditeurs" },
            { num: 4434, title: "Oppositions sur salaires" },
            { num: 4437, title: "Charges du personnel à payer {provision CP}" },
            { num: 4438, title: "Personnel - autres créditeurs" },
          ],
        },
        {
          title: "Organismes sociaux",
          elements: [
            { num: 4441, title: "Caisse Nationale de la Sécurité Sociale" },
            { num: 4443, title: "Caisses de retraite" },
            { num: 4445, title: "Mutuelles" },
            {
              num: 4447,
              title: "Charges sociales à payer {provision CS sur CP}",
            },
            { num: 4448, title: "Autres organismes sociaux" },
          ],
        },
        {
          title: "Etat - créditeur",
          elements: [
            { num: 4452, title: "Etat Impôts, taxes et assimilés" },
            { num: 4453, title: "Etat, impôts sur les résultats" },
            { num: 4454, title: "Etat, IR / {salaires, dividende,…}" },
            { num: 4455, title: "Etat, TVA facturée" },
            { num: 4456, title: "Etat, TVA due {suivant déclarations}" },
            { num: 4457, title: "Etat, impôts et taxes à payer" },
            { num: 4458, title: "Etat - autres comptes créditeurs" },
          ],
        },
        {
          title: "Comptes d'associés - créditeurs",
          elements: [
            { num: 4461, title: "Associés - capital à rembourser" },
            {
              num: 4462,
              title: "Associés - versements reçus sur augmentation de capital",
            },
            { num: 4463, title: "Comptes courants des associés créditeurs" },
            { num: 4464, title: "Associés - opérations faites en commun" },
            { num: 4465, title: "Associés - dividendes à payer" },
            { num: 4468, title: "Autres comptes d'associés - créditeurs" },
          ],
        },
        {
          title: "Autres créanciers",
          elements: [
            { num: 4481, title: "Dettes sur acquisitions d'immobilisations" },
            {
              num: 4483,
              title:
                "Dettes sur acquisitions de titres et valeurs de placement",
            },
            { num: 4484, title: "Obligations échues à rembourser" },
            { num: 4485, title: "Obligations, coupons à payer {intérêts}" },
            { num: 4487, title: "Dettes rattachées aux autres créanciers" },
            { num: 4488, title: "Divers créanciers" },
          ],
        },
        {
          title: "Comptes de régularisation - passif",
          elements: [
            { num: 4491, title: "Produits constatés d'avance" },
            { num: 4493, title: "Intérêts courus et non échus à payer" },
            {
              num: 4495,
              title: "Comptes de répartition périodique des produits",
            },
            {
              num: 4497,
              title: "Comptes transitoires ou d'attente - créditeurs",
            },
          ],
        },
      ],
    },
    {
      title: "Autres provisions pour risques et charges",
      elements: [
        {
          title: "Autres provisions pour risques et charges",
          elements: [
            { num: 4501, title: "Provisions pour litiges" },
            {
              num: 4502,
              title: "Provisions pour garanties données aux clients",
            },
            {
              num: 4505,
              title: "Provisions pour amendes, doubles droits et pénalités",
            },
            { num: 4506, title: "Provisions pour pertes de change" },
            { num: 4507, title: "Provisions pour impôts" },
            { num: 4508, title: "Autres provisions pour risques et charges" },
          ],
        },
      ],
    },
    {
      title: "Ecarts de Conversion-Passif {Eléments circulants}",
      elements: [
        {
          title: "Ecarts de Conversion-Passif {Eléments circulants}",
          elements: [
            { num: 4701, title: "Augmentation des créances circulantes" },
            { num: 4702, title: "Diminution des dettes circulantes" },
          ],
        },
      ],
    },
    {
      title: "Trésorerie-Passif",
      elements: [
        {
          title: "Crédits d'escompte",
          elements: [{ num: 5520, title: "Crédits d'escompte" }],
        },
        {
          title: "Crédits de trésorerie",
          elements: [{ num: 5530, title: "Crédits de trésorerie" }],
        },
        {
          title: "Banques {solde créditeur}",
          elements: [
            { num: 5541, title: "Banques {solde créditeur}" },
            {
              num: 5548,
              title:
                "Autres établissements financiers et assimilés {soldes créditeurs}",
            },
          ],
        },
      ],
    },
  ],
};

export const TotalActif = [
  //
  { i: 1, num: 211, title: "Frais préliminaires" },
  { i: 2, num: 212, title: "Charges q répartir sur plusieurs exercices" },
  { i: 3, num: 213, title: "Primes de remboursement des obligaions" },
  { i: 4, p: 1, title: "Valeurs brutes", relation: [1, 2, 3] },
  { i: 5, num: 2811, title: "Amortisements des frais préliminaires" },
  { i: 6, num: 2812, title: "Amortisements des des charges à repartir" },
  {
    i: 7,
    num: 2813,
    title: "Amortisements des primes de remboursement des obligations",
  },
  { i: 8, p: 1, title: "Amortissements et dépréciations", relation: [5, 6, 7] },
  { i: 9, p: 2, title: "Immobilisation En Non Valeur", relation: [4, 8] },
  //
  { i: 10, num: 221, title: "Immobilisation en recherche et développement" },
  { i: 11, num: 222, title: "Brevets, marques, droits et valeurs similaires" },
  { i: 12, num: 223, title: "Fonds commercial" },
  { i: 13, num: 228, title: "Autres immobilisations incorporelles" },
  { i: 14, p: 1, title: "Valeurs brutes", relation: [10, 11, 12, 13] },
  {
    i: 15,
    num: 2821,
    title: "Amortisements de l'immobilisation en recherche et développement",
  },
  {
    i: 16,
    num: 2822,
    title: "Amortisements des brevets, marques, droits et valeurs similaires",
  },
  { i: 17, num: 2823, title: "Amortisements du fonds commercial" },
  {
    i: 0,
    num: 2828,
    title: "Amortisements des autres immobilisations incorporelles",
  },
  {
    i: 18,
    num: 2920,
    title: "Provisions pour dépréciation des immobilisations incorporelles",
  },
  {
    i: 19,
    p: 1,
    title: "Amortissements et dépréciations",
    relation: [15, 16, 17, 18, 0],
  },
  { i: 20, p: 2, title: "Immobilisation incorporelles", relation: [14, 19] },
  ///
  { i: 21, num: 231, title: "Terrains" },
  { i: 22, num: 232, title: "Constructions" },
  { i: 23, num: 233, title: "Installations techniques, matériel et outillage" },
  { i: 24, num: 234, title: "Matériel de transport" },
  {
    i: 25,
    num: 235,
    title: "Mobilier, matériel de bureau et aménagements divers",
  },
  { i: 26, num: 238, title: "Autres immobilisations corporelles" },
  { i: 27, num: 239, title: "Immobilisations corporelles en cours" },
  {
    i: 28,
    p: 1,
    title: "Valeurs brutes",
    relation: [21, 22, 23, 24, 25, 26, 27],
  },
  { i: 29, num: 2831, title: "Amortissements des terrains" },
  { i: 30, num: 2832, title: "Amortissements des constructions" },
  {
    i: 31,
    num: 2833,
    title: "Amortissements des installations techniques, matériel et outillage",
  },
  { i: 32, num: 2834, title: "Amortissements du matériel de transport" },
  {
    i: 33,
    num: 2835,
    title:
      "Amortissements du mobilier, matériel de bureau et aménagements divers",
  },
  {
    i: 34,
    num: 2838,
    title: "Amortissements des autres immobilisations corporelles",
  },
  {
    i: 35,
    num: 2930,
    title: "Provisions pour déprécation des immobilisations corporelles",
  },
  {
    i: 36,

    p: 1,
    title: "Amortissements et dépréciations",
    relation: [29, 30, 31, 32, 33, 34, 35],
  },
  {
    i: 37,

    p: 2,
    title: "Immobilisations corporelles",
    relation: [28, 36],
  },
  ///
  { i: 38, num: 241, title: "Prêts immobilsés" },
  { i: 39, num: 248, title: "Autres créances financières" },
  { i: 40, num: 251, title: "Titres de participation" },
  { i: 41, num: 258, title: "Autres titres immobilisés" },
  {
    i: 42,

    p: 1,
    title: "Valeurs brutes",
    relation: [38, 39, 40, 41],
  },
  {
    i: 43,
    num: 2941,
    title: "Provisions pour dépréciation des prêts immobilsés",
  },
  {
    i: 44,
    num: 2948,
    title: "Provisions pour dépréciation des autres créances financières",
  },
  {
    i: 45,
    num: 2951,
    title: "Provisions pour dépréciation des titres de participation",
  },
  {
    i: 46,
    num: 2958,
    title: "Provisions pour dépréciation des autres titres immobilisés",
  },
  {
    i: 47,

    p: 1,
    title: "Amortissements et dépréciations",
    relation: [43, 44, 45, 46],
  },
  {
    i: 48,

    p: 2,
    title: "Immobilisations financières",
    relation: [42, 47],
  },
  //
  { i: 49, num: 2710, title: "Diminution des créances immobilisées" },
  { i: 50, num: 2720, title: "Augmentation des dettes de financement" },
  { i: 51, p: 1, title: "Ecarts de Conversion-Actif", relation: [49, 50] },
  { i: 52, p: 2, title: "Ecarts de Conversion-Actif", relation: [51] },
  { i: 53, num: 311, title: "Marchandises" },
  { i: 54, num: 312, title: "Matières et fournitures consommables" },
  { i: 55, num: 313, title: "Produits en cours" },
  { i: 56, num: 314, title: "Produits intermédiaires et produits résiduels" },
  { i: 57, num: 315, title: "Produits en finis" },
  {
    i: 58,

    p: 1,
    title: "Valeurs brutes",
    relation: [53, 54, 55, 56, 57],
  },
  { i: 59, num: 3911, title: "Provisions pour dépréciation des marchandises" },
  {
    i: 999,
    num: 3912,
    title:
      "Provisions pour dépréciation des matières et fournitures consommables",
  },
  {
    i: 60,
    num: 3913,
    title: "Provisions pour dépréciation des produits en cours",
  },
  {
    i: 61,
    num: 3914,
    title:
      "Provisions pour dépréciation des produits intermédiaires et produits résiduels",
  },
  {
    i: 62,
    num: 3915,
    title: "Provisions pour dépréciation des produits en finis",
  },
  {
    i: 63,

    p: 1,
    title: "Dépréciations",
    relation: [59, 60, 61, 62, 999],
  },

  {
    i: 64,

    p: 2,
    title: "Stocks et en-cours",
    relation: [58, 63],
  },
  ///
  {
    i: 65,
    num: 3411,
    title:
      "Fournisseurs - avances et acomptes versés sur commandes d'exploitation",
  },
  {
    i: 66,
    num: 3413,
    title: "Fournisseurs - créances pour emballages et matériel à rendre",
  },
  {
    i: 67,
    num: 3417,
    title: "Rabais, remises et ristournes à obtenir - avoirs non encore reçus",
  },
  { i: 68, num: 3418, title: "Autres fournisseurs débiteurs" },
  {
    i: 69,

    p: 1,
    num: 341,
    title: "Fournisseurs débiteurs, avances et acomptes-Valeurs brutes",
    relation: [65, 66, 67, 68],
  },
  {
    i: 70,
    num: 3941,
    title:
      "Provisions pour dépréciation - fournisseurs débiteurs, avances et acomptes",
  },
  {
    i: 71,

    p: 1,
    num: 394,
    title: "Fournisseurs débiteurs, avances et acomptes- Dépréciations",
    relation: [70],
  },
  { i: 28, space: true, special: "space" },
  {
    i: 72,

    p: 1,
    num: 341,
    title: "Fournisseurs débiteurs, avances et acomptes- Valeurs Nettes",
    relation: [69, 71],
  },
  //
  { i: 73, num: 3421, title: "Clients" },
  { i: 74, num: 3423, title: "Clients - retenues de garantie" },
  { i: 75, num: 3424, title: "Clients douteux ou litigieux" },
  { i: 76, num: 3425, title: "Clients - effets à recevoir" },
  {
    i: 77,
    num: 3427,
    title:
      "Clients - factures à établir et créances sur travaux non encore facturés",
  },
  { i: 78, num: 3428, title: "Autres clients et comptes rattachés" },
  {
    i: 79,

    p: 1,
    num: 342,
    title: "Clients et comptes rattachés-Valeurs Brutes",
    relation: [73, 74, 75, 76, 77, 78],
  },
  {
    i: 80,
    num: 3942,
    title: "Provisions pour dépréciation - Clients et comptes rattachés",
  },
  {
    i: 81,
    p: 1,
    num: 394,
    title: "Clients et comptes rattachés- Dépréciations",
    relation: [80],
  },
  { i: 28, space: true, special: "space" },
  {
    i: 82,
    p: 1,
    num: 342,
    title: "Clients et comptes rattachés- Valeurs Nettes",
    relation: [79, 81],
  },
  { i: 83, num: 3431, title: "Avances et acomptes au personnel" },
  { i: 84, num: 3438, title: "Personnel - autres débiteurs" },
  {
    i: 85,
    p: 1,
    num: 343,
    title: "Personnel - débiteur - Valeurs Brutes",
    relation: [83, 84],
  },
  {
    i: 86,
    num: 3943,
    title: "Provisions pour dépréciation du personnel - débiteur",
  },
  {
    i: 87,
    p: 1,
    num: 394,
    title: "Personnel - débiteur - Depréciation",
    relation: [86],
  },
  { i: 28, space: true, special: "space" },
  {
    i: 88,
    p: 1,
    num: 343,
    title: "Personnel - débiteur - Valeurs Nettes",
    relation: [85, 87],
  },
  { i: 89, num: 3451, title: "Subventions à recevoir" },
  { i: 90, num: 3453, title: "Acomptes sur impôts sur les résultats" },
  { i: 91, num: 3455, title: "Etat - TVA récupérable" },
  { i: 92, num: 3456, title: "Etat - crédit de TVA {suivant déclaration}" },
  { i: 93, num: 3457, title: "Etat - créance IR / {salaires, dividende,…}" },
  { i: 94, num: 3458, title: "Etat - autres comptes débiteurs {CNSS}" },

  {
    i: 95,
    p: 1,
    num: 345,
    title: "Etat-débiteur-Valeurs brutes",
    relation: [89, 90, 91, 92, 93, 94],
  },
  { i: 96, num: 3945, title: "Provision Etat-débiteur" },

  {
    i: 97,
    p: 1,
    num: 394,
    title: " Etat-débiteur-Depréciation",
    relation: [96],
  },
  { i: 28, space: true, special: "space" },
  {
    i: 98,
    p: 1,
    num: 345,
    title: "Etat-débiteur-Valeurs nettes",
    relation: [95, 97],
  },
  { i: 980, num: 3461, title: "Associés - comptes d'apport en société" },
  {
    i: 99,
    num: 3462,
    title: "Actionnaires - capital souscrit et appelé non versé",
  },
  { i: 100, num: 3463, title: "Comptes courants des associés débiteurs" },
  { i: 101, num: 3464, title: "Associés - opérations faites en commun" },
  { i: 102, num: 3467, title: "Créances rattachées aux comptes d'associés" },
  { i: 103, num: 3468, title: "Autres comptes d'associés débiteurs " },
  {
    i: 104,
    p: 1,
    num: 346,
    title: "Groupe et associés-Valeurs brutes",
    relation: [980, 99, 100, 101, 102, 103],
  },
  {
    i: 105,
    num: 3946,
    title: "Provisions pour dépréciation des comptes d'associés débiteurs",
  },
  {
    i: 106,
    p: 1,
    num: 394,
    title: "Groupe et associés-Depréciation",
    relation: [105],
  },
  { i: 28, space: true, special: "space" },
  {
    i: 107,
    p: 1,
    num: 346,
    title: "Groupe et associés-Valeurs nettes",
    relation: [104, 106],
  },
  { i: 108, num: 3481, title: "Créances sur cessions d'immobilisations" },
  {
    i: 109,
    num: 3482,
    title: "Créances sur cessions d'éléments d'actif circulant",
    background: "#808080",
  },
  {
    i: 110,
    num: 3487,
    title: "Créances rattachées aux autres débiteurs",
    background: "#808080",
  },
  { i: 111, num: 3488, title: "Divers débiteurs" },
  {
    i: 112,
    p: 1,
    num: 348,
    title: "Autres débiteurs-Valeurs brutes",
    relation: [108, 109, 110, 111],
  },
  { i: 113, num: 3948, title: "Provisions pour dépréciation Autres débiteurs" },
  {
    i: 114,
    p: 1,
    num: 394,
    title: "Autres débiteurs-Depréciation",
    relation: [113],
  },
  { i: 28, space: true, special: "space" },
  {
    i: 115,
    p: 1,
    num: 348,
    title: "Autres débiteurs-Valeurs nettes",
    relation: [112, 114],
  },
  { i: 116, num: 3491, title: "Charges constatées d'avance" },
  { i: 117, num: 3493, title: "Intérêts courus et non échus à percevoir" },
  { i: 118, num: 3495, title: "Comptes de répartition périodique des charges" },
  { i: 119, num: 3497, title: "Comptes transitoires ou d'attente - débiteurs" },
  {
    i: 120,
    p: 1,
    num: 349,
    title: "Comptes de régularisation - actif-Valeurs brutes",
    relation: [116, 117, 118, 119],
  },
  ///////fdfdfd/f/d/f/d/f/d/f/d/f/d
  {
    i: 121,
    p: 2,
    title: "Créances de l'actif circulant",
    relation: [72, 120, 115, 107, 98, 88, 82],
  },
  { i: 122, num: 3501, title: "Actions, partie libérée" },
  { i: 123, num: 3502, title: "Actions, partie non libérée" },
  { i: 124, num: 3504, title: "Obligations" },
  { i: 125, num: 3506, title: "Bons de caisse et bons de trésor" },
  {
    i: 126,
    num: 3508,
    title: "Autres titres et valeurs de placement similaires",
  },
  {
    i: 127,
    p: 1,
    title: "Valeurs brutes",
    relation: [122, 123, 124, 125, 126],
  },
  {
    i: 128,
    num: 3950,
    title: "Provisions pour dépréciation des titres et valeurs de placement",
  },
  { i: 129, p: 1, title: "Depréciation", relation: [128] },
  {
    i: 130,
    p: 2,
    title: "Titres et valeurs de placement",
    relation: [127, 129],
  },
  { i: 131, num: 3701, title: "Diminution des créances circulantes" },
  { i: 132, num: 3702, title: "Augmentation des dettes circulantes" },
  {
    i: 133,
    p: 1,
    title: "Ecarts de Conversion-Actif {Eléments circulants}",
    relation: [131, 132],
  },
  {
    i: 134,
    p: 2,
    title: "Ecarts de Conversion-Actif {Eléments circulants}",
    relation: [133],
  },
  { i: 135, num: 511, title: "Chèques et valeurs à encaisser" },
  {
    i: 136,
    num: 514,
    title: "Banques, Trésorerie Générale et chèques postaux débiteurs",
  },
  { i: 137, num: 516, title: "Caisses, régies d'avances et accréditifs" },
  { i: 138, p: 1, title: "Valeurs brutes", relation: [135, 136, 137] },
  {
    i: 139,
    num: 590,
    title: "Provisions pour dépréciation des comptes de trésorerie",
  },
  { i: 140, p: 1, title: "Depréciation", relation: [139] },
  { i: 141, p: 2, title: "Trésorerie - Actif", relation: [138, 140] },
  {
    i: 142,
    p: 3,
    title: "Total Actif",
    end: true,
    relation: [141, 134, 130, 121, 64, 52, 48, 37, 20, 9],
  },
];
////!PAssif
export const TotalPassif = [
  { i: 1, num: 1111, title: "Capital social" },
  {
    i: 2,
    num: 1119,
    title: "Moins : Actionnaires, capital souscrit-non appelé",
  },
  { i: 3, num: 1120, title: "Primes d'émission, de fusion et d'apport" },
  { i: 4, num: 1130, title: "Ecarts de réévaluation" },
  { i: 5, num: 1140, title: "Réserve légale" },
  { i: 6, num: 1150, title: "Autres réserves" },
  { i: 7, num: 1160, title: "Report à nouveau {débiteur et créditeur}" },
  {
    i: 8,
    num: 1180,
    title: "Résultats nets en instance d'affectation {débiteurs et créditeurs}",
  },
  {
    i: 9,
    p: 1,
    title: "Capitaux propres hors résultat net de la période",
    relation: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    i: 10,
    num: 1190,
    title: "Résultat net de l'exercice {débiteur et créditeur}",
  },
  {
    i: 11,
    p: 1,
    title: "Résultat net de l'exercice",
    relation: [10],
  },
  {
    i: 12,
    p: 2,
    title: "Capitaux propres",
    relation: [9, 11],
  },
  { i: 13, num: 1311, title: "Subventions d'investissement reçues" },
  { i: 14, num: 1319, title: "Subventions d'investissement inscrites au CPC" },
  { i: 15, p: 1, title: "Subventions d'investissement", relation: [13, 14] },
  { i: 16, num: 1351, title: "Provisions pour amortissements dérogatoires" },
  {
    i: 17,
    num: 1352,
    title: "Provisions pour plus-values en instance d'imposition",
  },
  { i: 18, num: 1354, title: "Provisions pour investissements" },
  { i: 19, num: 1355, title: "Provisions pour reconstitution des gisements" },
  {
    i: 20,
    num: 1356,
    title: "Provisions pour acquisition et construction de logements",
  },
  { i: 21, num: 1358, title: "Autres provisions réglementées" },
  {
    i: 22,
    p: 1,
    title: "Provisions réglementées",
    relation: [16, 17, 18, 19, 20, 21],
  },
  { i: 23, p: 2, title: "Capitaux propres assimilés", relation: [15, 22] },
  { i: 33, num: 1410, title: "Emprunts obligataires" },
  { i: 34, p: 1, title: "Dettes de financement", relation: [33] },
  { i: 24, num: 1481, title: "Emprunts auprès des établissements de crédit" },
  { i: 25, num: 1482, title: "Avances de l'Etat" },
  { i: 26, num: 1483, title: "Dettes rattachées à des participations" },
  { i: 27, num: 1484, title: "Billets de fonds" },
  { i: 28, num: 1485, title: "Avances reçues et comptes courants bloqués" },
  { i: 29, num: 1486, title: "Fournisseurs d'immobilisation" },
  { i: 30, num: 1487, title: "Dépôts et cautionnements reçues" },
  { i: 31, num: 1488, title: "Dettes de financement diverses" },
  {
    i: 32,
    p: 1,
    title: "Autres dettes de financement",
    relation: [24, 25, 26, 27, 28, 29, 30, 31],
  },

  { i: 35, p: 2, title: "Dettes de financement", relation: [34, 32] },
  //?Good
  { i: 36, num: 1511, title: "Provisions pour litiges" },
  { i: 37, num: 1512, title: "Provisions pour garanties données aux clients" },
  { i: 38, num: 1513, title: "Provisions pour propre assureur" },
  { i: 39, num: 1514, title: "Provision pour pertes sur marchés à terme" },
  {
    i: 40,
    num: 1515,
    title: "Provisions pour amendes, double droits, pénalités",
  },
  { i: 41, num: 1516, title: "Provisions pour pertes de change" },
  { i: 42, num: 1518, title: "Autres provisions pour risques" },
  {
    i: 43,
    p: 1,
    title: "Provisions pour risques",
    relation: [36, 37, 38, 39, 40, 41, 42],
  },
  { i: 44, num: 1551, title: "Provisions pour impôts" },
  {
    i: 45,
    num: 1552,
    title: "Provisions pour pensions de retraite et obligations similaires",
  },
  {
    i: 46,
    num: 1555,
    title: "Provisions pour charges à répartir sur plusieurs exercices",
  },
  { i: 47, num: 1558, title: "Autres provisions pour charges" },
  { i: 48, p: 1, title: "Provisions pour charges", relation: [44, 46, 45, 47] },
  {
    i: 49,
    p: 2,
    title: "Provisions pour risques et charges",
    relation: [43, 48],
  },
  { i: 50, num: 1710, title: "Augmentation des créances immobilisées" },
  { i: 51, num: 1720, title: "Diminution des dettes de financement" },
  { i: 52, p: 1, title: "Ecarts de Conversion-Passif", relation: [50, 51] },
  {
    i: 53,
    p: 2,
    title: "Ecarts de Conversion-Passif",
    relation: [52],
  },
  { i: 54, num: 4411, title: "Fournisseurs" },
  { i: 55, num: 4413, title: "Fournisseurs - retenues de garantie" },
  { i: 56, num: 4415, title: "Fournisseurs - effets à payer" },
  { i: 57, num: 4417, title: "Fournisseurs - factures non parvenues" },
  { i: 58, num: 4418, title: "Autres fournisseurs et comptes rattachés" },
  {
    i: 59,
    p: 1,
    title: "Fournisseurs et comptes rattachés",
    relation: [54, 55, 56, 57, 58],
  },
  //?Good
  {
    i: 60,
    num: 4421,
    title: "Clients - avances et acomptes reçus sur commandes en cours",
  },
  {
    i: 61,
    num: 4425,
    title: "Clients - dettes pour emballages et matériel consignés",
  },
  {
    i: 62,
    num: 4427,
    title: "Rabais, remises et ristournes à accorder - avoirs à établir",
  },
  { i: 63, num: 4428, title: "Autres clients créditeurs" },
  {
    i: 64,
    p: 1,
    title: "Clients créditeurs, avances et acomptes",
    relation: [60, 61, 62, 63],
  },
  { i: 65, num: 4432, title: "Rémunérations dues au personnel" },
  { i: 66, num: 4433, title: "Dépôts du personnel créditeurs" },
  { i: 67, num: 4434, title: "Oppositions sur salaires" },
  { i: 68, num: 4437, title: "Charges du personnel à payer {provision CP}" },
  { i: 69, num: 4438, title: "Personnel - autres créditeurs" },
  {
    i: 70,
    p: 1,
    title: "Personnel - créditeur",
    relation: [65, 66, 67, 68, 69],
  },

  { i: 71, num: 4441, title: "Caisse Nationale de la Sécurité Sociale" },
  { i: 72, num: 4443, title: "Caisses de retraite" },
  { i: 73, num: 4445, title: "Mutuelles" },
  { i: 74, num: 4447, title: "Charges sociales à payer {provision CS sur CP}" },
  { i: 75, num: 4448, title: "Autres organismes sociaux" },

  { i: 76, p: 1, title: "Organismes sociaux", relation: [71, 72, 73, 74, 75] },

  { i: 77, num: 4452, title: "Etat Impôts, taxes et assimilés" },
  { i: 78, num: 4453, title: "Etat, impôts sur les résultats" },
  { i: 79, num: 4454, title: "Etat, IR / {salaires, dividende,…}" },
  { i: 81, num: 4455, title: "Etat, TVA facturée" },

  { i: 82, num: 4456, title: "Etat, TVA due {suivant déclarations}" },
  { i: 83, num: 4457, title: "Etat, impôts et taxes à payer" },
  { i: 84, num: 4458, title: "Etat - autres comptes créditeurs" },

  {
    i: 85,
    p: 1,
    title: "Etat - créditeur",
    relation: [77, 78, 79, 81, 82, 83, 84],
  },

  { i: 86, num: 4461, title: "Associés - capital à rembourser" },
  {
    i: 87,
    num: 4462,
    title: "Associés - versements reçus sur augmentation de capital",
  },
  { i: 88, num: 4463, title: "Comptes courants des associés créditeurs" },
  { i: 89, num: 4464, title: "Associés - opérations faites en commun" },
  { i: 90, num: 4465, title: "Associés - dividendes à payer" },
  { i: 91, num: 4468, title: "Autres comptes d'associés - créditeurs" },
  {
    i: 92,
    p: 1,
    title: "Comptes d'associés - créditeurs",
    relation: [86, 87, 88, 89, 90, 91],
  },
  {
    i: 93,
    num: 4481,
    title: "Dettes sur acquisitions d'immobilisations",
  },
  {
    i: 94,
    num: 4483,
    title: "Dettes sur acquisitions de titres et valeurs de placement",
  },
  { i: 95, num: 4484, title: "Obligations échues à rembourser" },
  { i: 96, num: 4485, title: "Obligations, coupons à payer {intérêts}" },
  {
    i: 97,
    num: 4487,
    title: "Dettes rattachées aux autres créanciers",
    background: "#808080",
  },
  { i: 98, num: 4488, title: "Divers créanciers" },
  {
    i: 99,
    p: 1,
    title: "Autres créanciers",
    relation: [93, 94, 95, 96, 97, 98],
  },
  { i: 100, num: 4491, title: "Produits constatés d'avance" },
  { i: 101, num: 4493, title: "Intérêts courus et non échus à payer" },
  {
    i: 102,
    num: 4495,
    title: "Comptes de répartition périodique des produits",
  },
  {
    i: 103,
    num: 4497,
    title: "Comptes transitoires ou d'attente - créditeurs",
  },
  {
    i: 104,
    p: 1,
    title: "Comptes de régularisation - passif",
    relation: [100, 101, 102, 103],
  },
  //////////fdfdfdfd
  {
    i: 105,
    p: 2,
    title: "Dettes du passif circulant",
    relation: [59, 64, 70, 76, 85, 92, 99, 104],
  },
  { i: 106, num: 4501, title: "Provisions pour litiges" },
  { i: 107, num: 4502, title: "Provisions pour garanties données aux clients" },
  {
    i: 108,
    num: 4505,
    title: "Provisions pour amendes, doubles droits et pénalités",
  },
  { i: 109, num: 4506, title: "Provisions pour pertes de change" },
  { i: 110, num: 4507, title: "Provisions pour impôts" },
  { i: 111, num: 4508, title: "Autres provisions pour risques et charges" },
  {
    i: 112,
    p: 1,
    title: "Autres provisions pour risques et charges",
    relation: [106, 107, 108, 109, 110, 111],
  },
  {
    i: 113,
    p: 2,
    title: "Autres provisions pour risques et charges",
    relation: [112],
  },
  { i: 114, num: 4701, title: "Augmentation des créances circulantes" },
  { i: 115, num: 4702, title: "Diminution des dettes circulantes" },
  {
    i: 116,
    p: 1,
    title: "Ecarts de Conversion-Passif {Eléments circulants}",
    relation: [114, 115],
  },
  {
    i: 117,
    p: 2,
    title: "Ecarts de Conversion-Passif {Eléments circulants}",
    relation: [116],
  },
  { i: 118, num: 5520, title: "Crédits d'escompte" },
  { i: 119, p: 1, title: "Crédits d'escompte", relation: [118] },
  { i: 120, num: 5530, title: "Crédits de trésorerie" },
  { i: 121, p: 1, title: "Crédits de trésorerie", relation: [120] },
  { i: 122, num: 5541, title: "Banques {solde créditeur}" },
  {
    i: 123,
    num: 5548,
    title: "Autres établissements financiers et assimilés {soldes créditeurs}",
  },
  { i: 124, p: 1, title: "Banques {solde créditeur}", relation: [122, 123] },
  { i: 125, p: 2, title: "Trésorerie-Passif", relation: [119, 121, 124] },
  ///////
  {
    i: 126,
    p: 3,
    title: "Total Passif",
    round: true,
    relation: [12, 23, 35, 49, 53, 105, 113, 117, 125],
  },
  { i: 28, space: true, special: "space" },
  {
    i: 0,
    p: 1,
    title: "Contrôle",
    special: "controle t6-t7",
  },
];
