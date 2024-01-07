import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    aS1:{
        type_1: [{
        id: 1,
        title: "Frais professionnel mensuel",
        field: {
            charge: 2500,
            hypothese: 20
        }
    }
        ,
    {
        id: 2,
        title: "Cotisations CNSS déductibles",
        field: {
            charge: 6000,
            hypothese: 4.48
        }
    }
        ,
    {
        id: 3,
        title: "Cotisations AMO déductibles",
        field: {
            hypothese: 2.26
        }
    },
        ,
    {

        id: 9,
        title: "Charge de famille",
        field: {
            charge: 30
        }
    },
    {
        id: 12,
        title: "Cotisations Prestations familiales patronales",
        field: {
            hypothese: 6.40
        },

    },
    {
        id: 13,
        title: "Cotisations CNSS patronales (sociales à CT et à LT)",
        field: {
            charge: 6000,
            hypothese: 8.98
        },

    },
    {
        id: 14,
        title: "Cotisations AMO patronales",
        field: {
            hypothese: 4.11
        },

    },
    {
        id: 15,
        title: "Cotisations Formation professionnelle patronales",
        field: {
            hypothese: 1.6
        },

    },
    ],
    type_2:[{

        max: 2500,
        value: 0
    },
    {
        min: 2500,
        max: 4166.67,
        value: 10
    },
    {
        min: 4166.67,
        max: 5000,
        value: 20
    },
    {
        min: 5000,
        max: 6666.67,
        value: 30
    },
    {
        min: 6666.67,
        max: 15000,
        value: 34
    },
    {
        min: 15000,
        value: 38
    },
    ],
    type_3:[{

        max: 2500,
        value: 0
      },
      {
        min: 2500,
        max: 4166.67,
        value: 250
      },
      {
        min: 4166.67,
        max: 5000,
        value: 666.67
      },
      {
        min: 5000,
        max: 6666.67,
        value: 1166.67
      },
      {
        min: 6666.67,
        max: 15000,
        value: 1433.33
      },
      {
        min: 15000,
        value: 2033.33
      },
      ]
}
};

export const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {

        update: (state, action) => {
            const {field,data}= action.payload
            state[field]=data
        },
        update: (state, action) => {
            const {field,data}= action.payload
            state[field]=data
        },
    },
});

// Action creators are generated for each case reducer function
export const { update } = configSlice.actions;

export default configSlice.reducer;
