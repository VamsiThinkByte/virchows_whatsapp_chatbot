// data.js

const menuData = {
  // Main Categories
  mainMenu: [
    '1. API (Active Pharmaceutical Ingredient)',
    '2. Intermediates',
    '3. Finished Dosages (for exports)',
    '4. Biotech Products'
  ],

  // Subcategories under 'API'
  API: {
    options: [
      'Andhra Organics Limited',
      'Covalent Laboratories Pvt Ltd',
      'Emnar Pharma Pvt Ltd',
      'Saraca Laboratories Limited',
      'Virchow Drugs Limited',
      'Virchow Laboratories Limited'
    ],
    subOptions: {
      'Andhra Organics Limited': [
        'Sulfamethoxazole',
        'Itraconazole',
        'Sulfanilamide',
        'Olmesartan',
        'Sulfadiazine',
        'Sildenafil Citrate',
        'Sulfadiazine Sodium',
        'Telmisartan',
        'Sulfadimidine',
        'Trimethoprim'
      ],
      'Covalent Laboratories Pvt Ltd': {
        'Oral Cephalosporins': [
          'Cefixime',
          'Cefdinir',
          'Cefprozil',
          'Cefditoren Pivoxil',
          'Ceftibuten',
          'Cefuroxime Axetil',
          'Cefuroxime Axetil DC',
          'Cefpodoxime Proxetil'
        ],
        'Sterile Cephalosporins': [
          'Ceftriaxone Sodium',
          'Cefotaxime Sodium',
          'Cefuroxime Sodium'
        ]
      },
      'Emnar Pharma Pvt Ltd': {
        'Commercial APIs': [
          'Aciclovir',
          'Acotiamide Hydrochloride Hydrate',
          'Dabigatran Etexilate Mesylate',
          'Dapagliflozin Propanediol',
          'Empagliflozin',
          'Gabapentin',
          'Lacosamide',
          'Lamotrigine',
          'Levetiracetam',
          'Pitolisant Hcl',
          'Sodium Bicarbonate USP',
          'Tramadol Hydrochloride',
          'Zinc Pyrithione',
          'Zonisamide'
        ],
        'Pipeline APIs': [
          'Apixaban',
          'Bupropion Hcl',
          'Carbachol',
          'Dolutegravir Sodium',
          'Linezolid',
          'Lithium Carbonate',
          'Lamivudine',
          'L-lysine Aescinate',
          'Magnesium Oxide',
          'Netupitant',
          'Potassium Bicarbonate',
          'Pridinol Mesylate Anhydrous',
          'Pridinol Mesylate Monohydrate',
          'Tenofovir',
          'Vonoprazon Fumarate'
        ]
      },
      'Saraca Laboratories Limited': [
        'Gabapentin',
        'Pantoprazole',
        'Pregabalin',
        'Ranitidine'
      ],
      'Virchow Drugs Limited': [
        'Sulfapyridine',
        'Sulfasalazine'
      ],
      'Virchow Laboratories Limited': [
        'Sulfamethoxazole'
      ]
    }
  },

  // Subcategories under 'Intermediates'
  Intermediates: {
    options: [
      'Cephalosporin Intermediates',
      'Levetiracetam Intermediates',
      'Telmisartan Intermediates',
      'Sildenafil Citrate Intermediates',
      'Gabapentin Intermediates',
      'Other Intermediates',
      'Virchow Petrochemical Private Limited'
    ],
    subOptions: {
      'Cephalosporin Intermediates': [
        '7-AVCA (7-Amino Vinyl Cephalosporanic Acid)',
        '7-APCA (7-Amino Propenyl Cephalosporanic Acid)',
        '7-ATCA (7-Amino Thiazolyl Cephalosporanic Acid)',
        'Triphenyl Phosphine (TPP)'
      ],
      'Levetiracetam Intermediates': [
        '(S)-2-Amino Butyramide Hydrochloride (SABAM)',
        '4-Chloro Butyryl Chloride (4-CBC)'
      ],
      'Telmisartan Intermediates': [
        '2-N-Propyl-4-methyl-6-(1-methylbenzimidazole-2-yl) benzimidazole',
        '4’-Bromomethyl-2-biphenylcarbonitrile (Bromo-OTBN)'
      ],
      'Sildenafil Citrate Intermediates': [
        '1-Methyl-4-nitro-3-propyl-1 H-pyrazole-5-carboxamide',
        '4-Amino-1-methyl-3-propyl-1H-pyrazole-5-carboxamide',
        '5-(2-Ethoxyphenyl)-1-methyl-3-propyl-1H-pyrazolo [4,3-d] pyrimidin-7(6H)-one',
        '5-(5-chlorosulfonyl-2-ethoxyphenyl)-1-methyl-3-propyl-1H- pyrazolo[4,3-dpyrimidin-7(6H)-one'
      ],
      'Gabapentin Intermediates': [
        '1,1-Cyclohexane-Diacetic Acid (CDA)',
        '1,1- Cyclohexane Diacetic Acid Monoamide (CAM)'
      ],
      'Other Intermediates': [
        'Cis-Lactam (Intermediate of Diltiazem)',
        '5-Bromo-2-Chloro Benzoic Acid (Dapagliflozin)',
        '1,3-DicyclohexyI Carbodimide (DCC) (Valacyclovir)',
        '1-Methylamine-1-Methyl-Thio-2 Nitro Ethane (NMSM) (Ranitidine)',
        '6-Bromo-3-Hydroxy Pyrazine 2-Carboxamide (Favipiravir)',
        'Methyl 1-[(4-Fluorophenyl) Carbamoyl] Cyclopropane Carboxylate (Cabozatinib)',
        '1, 1-Cyclopropane, Dicarboxylic Acid (Keterolac)',
        'N,N-Dimethyl Thiourea',
        '2- Piperazinone',
        'Benzoic Acid, 3-[[(Methyl Amino) Thioxomethyl]] Amino'
      ],
      'Virchow Petrochemical Private Limited': [
        'GCLE',
        '7-ACCA (7-Amino Chloro Cephalosporanic Acid)'
      ]
    }
  },

  // Placeholder data for 'Finished Dosages' and 'Biotech Products'
  FinishedDosages: {
    options: [
      'Orthopedic',
      'Oncology',
      'Probiotic',
      'Blood Plasma',
      'Anti-Coagulant/Anti-Fibrinolytic',
      'Iron Replacement',
      'Advanced Wound Care',
      'Anesthetics',
      'Pain Management',
      'Vitamin Supplements',
      'Cosmetic Dermatology',
      'Miscellaneous',
      'Other Product List'
    ]
  },

  BiotechProducts: {
    options: [
      'Endocrinology',
      'Cardiovascular',
      'Gastroenterology',
      'Oncology',
      'Advanced Wound Care',
      'Human Blood Products',
      'Equine Blood Products',
      'Ophthalmology',
      'Orthopedics',
      'Aesthetic Surgery',
      'Neurology',
      'Critical Care',
      'Hematology',
      'Vitamin Deficiency',
      'Institutional Supplies/Surgicals',
      'OTC and Dietary Supplements',
      'Nutraceuticals - Soft Gels'
    ]
  }
};

// Export the menu data
module.exports = menuData;
