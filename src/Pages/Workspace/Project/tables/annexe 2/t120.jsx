import { useDispatch, useSelector } from "react-redux";


import Table_A2_S from "../customTables/table_a2_s";

import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography, TextField, InputAdornment } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { update } from '../../../../../redux/configSlice';
import { notifier } from "../../../../../redux/notifSlice";



const T120 = () => {

    return <div>

        <ConfigAS1 />
        <Table_A2_S title={"Rémunération brute mensuelle"} bigTitle={"Paramètres Masse salariale et CNSS 1"} personne />
        <Table_A2_S formule={1} title="Frais professionnel mensuel" />
        <Table_A2_S formule={2} title="Cotisations CNSS déductibles" />
        <Table_A2_S formule={3} title="Cotisations AMO déductibles" />
        <Table_A2_S formule={4} gris title="Total déduction (Frais professionnel + CNSS + AMO + Autres organismes sociaux retraite, mutuelle, Assurance,…)" />
        <Table_A2_S formule={5} gris title="Rémunération nette mensuelle imposable" />
        <Table_A2_S formule={6} gris title="Taux Tranche IR" />
        <Table_A2_S formule={7} gris title="Montant à déduire" />
        <Table_A2_S formule={8} gris title="IR Brut" />
        <Table_A2_S formule={9} gris title="Charge de famille" />
        <Table_A2_S formule={10} gris title="IR net" />
        <Table_A2_S formule={11} gris title="Salaire net (CNSS et IR)" />
        <Table_A2_S formule={12} title="Cotisations Prestations familiales patronales" />
        <Table_A2_S formule={13} title="Cotisations CNSS patronales (sociales à CT et à LT)" />
        <Table_A2_S formule={14} title="Cotisations AMO patronales" />
        <Table_A2_S formule={15} title="Cotisations Formation professionnelle patronales" />
        <Table_A2_S formule={16} title="Total cotisations sociales salariales" />
        <Table_A2_S formule={17} title="Total cotisations sociales patronales" />
    </div>

};



export const ConfigAS1 = () => {
    const data = useSelector((state) => state.config.aS1)
    console.log('data :>> ', data);
    const dis = useDispatch()
    const [config, setconfig] = useState(JSON.parse(JSON.stringify(data.type_1)).filter((c) => c !== null))
    const [config2, setconfig2] = useState(JSON.parse(JSON.stringify(data.type_2)).filter((c) => c !== null))
    const [config3, setconfig3] = useState(JSON.parse(JSON.stringify(data.type_3)).filter((c) => c !== null))
    const onValid = () => {
        try {
            console.log('config2', config2)
            dis(update({ field: "aS1", data: {type_1:config,type_2:config2,type_3:config3} }))
            dis(notifier({ message: "Nouvelle configuration réussie" }))
        } catch (error) {
            dis(notifier({ message: "Erreur de l'opération", type: "Error" }))
        }
    }
    return (
        <div>
            <div className="px-3 py-2">
                <Accordion className="max-w-[1000px]">
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className="font-semibold">Configuration</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex flex-row gap-6">
                            <div className="w-[500px]">

                                {config.map((c, i) => {
                                    return <div key={i} className="my-4">
                                        <span>{c.title}</span>
                                        <div className='flex flex-row gap-2'>
                                            {c.field.charge !== undefined && <TextField
                                                type={"number"}
                                                className="w-[180px]"
                                                value={c.field.charge}
                                                size="small"
                                                onChange={(v) => setconfig(old => [...old.map((o, i) => {
                                                    return o.id !== c.id ? o : ({ ...o, field: { ...o.field, charge: v.target.value } })
                                                })])
                                                }
                                            />}
                                            {c.field.hypothese && <TextField
                                                type={"number"}
                                                className="w-[130px]"
                                                value={c.field.hypothese}
                                                size="small"
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                                                }}
                                                onChange={(v) => setconfig(old => [...old.map((o, i) => {
                                                    return o.id !== c.id ? o : ({ ...o, field: { ...o.field, hypothese: v.target.value } })
                                                })])
                                                }

                                            />}
                                        </div>

                                    </div>
                                })}
                            </div>
                            <div className="space-y-6">
                                <ConfigEl config={config2} setconfig={setconfig2}/>
                                <ConfigEl config={config3} setconfig={setconfig3} isPercentage={false}/>

                            </div>
                        </div>

                        <Button onClick={onValid} variant="contained" color="primary">
                            enregistrer
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

const ConfigEl = ({config,setconfig,isPercentage=true}) => {
    
    return <table  >
        <thead className="">
            <tr>
                <th colSpan={2}
                    scope="col" className="min-w-[300px]">
                    Tranche de
                    revenu mensuel
                </th>
                <th

                    className="w-[130px] text-center"
                >
                  {isPercentage?"Taux applicable %":"Somme à déduire"}
                </th>
            </tr></thead>
        <tbody>
            {config.map((c, i) => {

                const isFirst=i==0
                const isLast=i==config.length-1
                return <tr>

                <th>
                <TextField
                        type={"number"}
                        className="w-[150px] border-none text-center"
                        value={isFirst?0:c.min}
                        sx={{
                            "& fieldset": { border: 'none' },
                          }}
                        size="small"
                       
                    onChange={(v) => {
                        setconfig(config.map((m,index)=>{
                            return index!=i?m:({...m,min:isFirst?undefined:v.target.value})
                        }))
                    }
                    }

                    />
                </th>
                <th>
                <TextField
                        type={!isLast?"number":"text"}
                        className="w-[150px] border-none text-center"
                        value={isLast?"et au delà":c.max}
                        sx={{
                            "& fieldset": { border: 'none' },
                          }}
                        size="small"
                        onChange={(v) => {
                            setconfig(config.map((m,index)=>{
                                return index!=i?m:({...m,max:isLast?undefined:v.target.value})
                            }))
                        }}

                    />
                </th>
                <th>
                    <TextField
                        type={"number"}
                        className="w-[120px] border-none text-center"
                        value={c.value}
                        sx={{
                            "& fieldset": { border: 'none' },
                          }}
                        size="small"
                        InputProps={isPercentage&&{
                            endAdornment: <InputAdornment position="start">%</InputAdornment>,
                        }}
                        onChange={(v) => {
                            setconfig(config.map((m,index)=>{
                                return index!=i?m:({...m,value:v.target.value})
                            }))
                        }}
                    // onChange={(v) => setconfig(old => [...old.map((o, i) => {
                    //     return o.id !== c.id ? o : ({ ...o, field: { ...o.field, hypothese: v.target.value } })
                    // })])
                    // }

                    />
                </th>
            </tr>
            })}

        </tbody>
    </table>
}
export default T120;
