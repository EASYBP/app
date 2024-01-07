import { Add, Delete } from "@material-ui/icons";
import { Divider, Button, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actif } from "../../../../../redux/dialogSlice";
import { notifier } from "../../../../../redux/notifSlice";
import {
  updateAnnexe2Add,
  updateAnnexe2Delete,
} from "../../../../../redux/projectSlice";
import { SendRequestThunk } from "../../../../../Services/requests";
import { newSection } from "../annexe 2/dataA2";

import {
  DataTable,
  decodeString,
  DisplayValue,
  GetValString,
} from "../factoring";
import UpdateValue from "./dialogTable_v3";
import { useNavigate } from "react-router-dom";

export const LIST_MOIS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const LIST_ANNEE = [1, 2, 3, 4];
export const decodeObjectSection = (d) => ({
  ...d,
  comptes: d.comptes.map((c) => ({
    ...c,
    taux: decodeString(c.taux),
    annee: c.annee.map((a) =>
      a.map((m) => ({
        ...m,
        ht: decodeString(m.ht),
        tva: decodeString(m.tva),
        ttc: decodeString(m.ttc),
      }))
    ),
  })),
});

const signelTotal = ({ state, table }) => {
  return DataTable({
    state,
    stateList: state[table],
    type: "A2",
  })
    .map((d) => d.comptes.filter((c) => c.total)[0])
    .reduce((a, b) => {
      return {
        title: "",
        taux: "",
        commentaire: "",
        annee: a.annee.map((an, i1) =>
          an.map((am, i2) => {
            return {
              ht: GetValString(
                decodeString(a.annee[i1][i2].ht) +
                decodeString(b.annee[i1][i2].ht)
              ),
              tva: GetValString(
                decodeString(a.annee[i1][i2].tva) +
                decodeString(b.annee[i1][i2].tva)
              ),
              ttc: GetValString(
                decodeString(a.annee[i1][i2].ttc) +
                decodeString(b.annee[i1][i2].ttc)
              ),
            };
          })
        ),
      };
    });
};
const getTotalTable = ({ state, start, nbrTable }) => {
  const tables = [];
  for (let i = 0; i < nbrTable; i++) {
    tables.push(`a${start + i}`);
  }
  return tables
    .map((s) => signelTotal({ state, table: s }))
    .reduce((a, b) => {
      return {
        title: "",
        taux: "",
        commentaire: "",
        annee: a.annee.map((an, i1) =>
          an.map((am, i2) => {
            return {
              ht: GetValString(
                decodeString(a.annee[i1][i2].ht) +
                decodeString(b.annee[i1][i2].ht)
              ),
              tva: GetValString(
                decodeString(a.annee[i1][i2].tva) +
                decodeString(b.annee[i1][i2].tva)
              ),
              ttc: GetValString(
                decodeString(a.annee[i1][i2].ttc) +
                decodeString(b.annee[i1][i2].ttc)
              ),
            };
          })
        ),
      };
    });
};
const Table_V3 = ({completions,customTotal,noTotalSection, table, tableName, title, start, nbrTable, sectionTitleTable, sectionTitleSum, fournisseur, totalSection, disabled,
  fill, bigTotal }) => {
  const state = useSelector((state) => state.project);
  const [expand, setexpand] = useState(false);
  const neq = title.toLowerCase().includes("rabais");
  const dis = useDispatch();
  const nav = useNavigate();
  const sections = DataTable({
    customTotal,
    state,
    sectionTitleSum,
    stateList: state[table],
    type: "A2",
  });

  const handleChange = ({
    initValue,
    section,
    compte,
    field,
    annee,
    mois,
    isSection,
    fullData,
  }) => {
    if (!disabled) {
      dis(
        actif({
          initValue,
          section,
          compte,
          field,
          annee,
          mois,
          isSection,
          fullData,
        })
      );
    }
  };

  const handleAddLine = (section) => {
    SendRequestThunk({
      endpoint:
        "/table/a2/add" +
        "/line/" +
        state.id +
        `/${section._id ? section._id : section.id}`,
      method: "post",
      body: {
        data: { section },
        table,
      },
      success: (res) => {
        dis(
          updateAnnexe2Add({ type: "line", section, response: res.data, table })
        );

        // nav(0);
      },
      failed: (err) => {
        console.log(err);
        dis(notifier({ message: "Erreur de modification", type: "error" }));
      },
    });
  };
  const handleAddSection = () => {
    SendRequestThunk({
      endpoint: "/table/a2/add" + "/section/" + state.id + "/bla",
      method: "post",
      body: {
        section: newSection,
        table,
      },
      success: (res) => {
        dis(
          updateAnnexe2Add({
            type: "section",

            response: res.data,
            table,
          })
        );

        // nav(0);
      },
      failed: (err) => {
        console.log(err);
        dis(notifier({ message: "Erreur de modification", type: "error" }));
      },
    });
  };

  const handleDelete = (d, c) => {
   if(!disabled){
    SendRequestThunk({
      endpoint:
        "/table/a2/delete" +
        "/line/" +
        state.id +
        `/${d._id ? d._id : d.id}/${c.num}/${table}`,
      method: "put",
      body: {
        table,
        section: {
          ...d,
          comptes: d.comptes.map((c) => ({
            ...c,
            taux: decodeString(c.taux),
            annee: c.annee.map((a) =>
              a.map((m) => ({
                ...m,
                ht: decodeString(m.ht),
                tva: decodeString(m.tva),
                ttc: decodeString(m.ttc),
              }))
            ),
          })),
        },
      },

      success: (res) => {
        dis(
          updateAnnexe2Delete({
            type: "line",
            section: d,
            response: c,
            table,
          })
        );
        // nav(0);
      },
      failed: (err) => {
        console.log(err);
        dis(notifier({ message: "Erreur de modification", type: "error" }));
      },
    });
   }
  };
  const handleDeleteSection = (d) => {
    SendRequestThunk({
      endpoint:
        "/table/a2/delete" + "/section/" + state.id + "/" + d._id + "/bla/bl",
      method: "put",
      body: {
        table,
      },
      success: (res) => {
        dis(
          updateAnnexe2Delete({
            type: "section",
            response: d._id,
            table,
          })
        );
        // nav(0);
      },
    });
  };
  // const totalSection = () => {
  //   const compte = {
  //     annee: data.map(
  //       (d) => d.comptes
  //       // .filter((f) => f.total)
  //       // .annee.reduce((a, b) => {
  //       //   return {
  //       //     ht: decodeString(a.ht) + decodeString(b.ht),
  //       //     tva: decodeString(a.tva) + decodeString(b.tva),
  //       //     ttc: decodeString(a.ttc) + decodeString(b.ttc),
  //       //   };
  //       // })
  //     ),
  //   };
  //   console.log(compte);
  //   return compte;
  // };
  const c = signelTotal({ state, table });
  const cx = getTotalTable({ start, nbrTable, state, table });
  return (
    <>
      <UpdateValue table={table} state={state} neq={neq} completions={completions}/>
      <div
        style={{ background: fill }}
        className="w-screen overflow-hidden py-3 my-3">
        {sections.map((d, i) => {
          return (
            <div className={`w-full mx-auto overflow-scroll pb-5 scrollbar-thin scrollbar-thumb-gray-300 ${fill || 'scrollbar-track-white'}`}>

              <table key={i} className="w-[4000px] text-left">
                <thead className="head">
                  {i == 0 && (
                    <>
                      <tr style={{ background: fill }}>
                        <th colSpan={1} scope="col">
                          {tableName}
                        </th>
                      </tr>
                      <tr style={{ background: fill }}>
                        <th colSpan={1} scope="col">
                          {i == 0 && title}
                        </th>
                      </tr>
                    </>
                  )}
                  <tr className="h-[22px] bg-white"></tr>
                  <tr style={{ background: fill }}>
                    <th className="min-w-[300px]">{sectionTitleTable || "CA prévisionnel HT N+1"}</th>
                    <th
                      rowSpan={2}
                      scope="col"
                      className="w-[200px] text-center"
                    >
                      {fournisseur && "Fournisseur / "}Commentaire / Hypothèse
                    </th>
                    <th
                      rowSpan={2}
                      scope="col"
                      className="w-[200px] text-center"
                    >
                      Taux de TVA
                    </th>
                    <ComponentFromList
                      header
                      empty
                      content={(a, m) => (
                        <th
                          key={a + m + ""}
                          colSpan={3}
                          scope="col"
                          className="text-center"
                        >
                          {m + 1}-N+{a + 1}
                        </th>
                      )}
                    />
                  </tr>
                  <tr style={{ background: fill }}>
                    <th>Mois</th>
                    <ComponentFromList
                   
                      header
                      content={(a, m) => (
                        <>
                          <th key={1} className=" text-center">
                            HT
                          </th>
                          <th key={2} className=" text-center">
                            TVA
                          </th>
                          <th key={3} className=" text-center">
                            TTC
                          </th>
                        </>
                      )}
                    />
                  </tr>
                </thead>
                <tbody>
                  <tr className="group" style={{ background: fill }}>
                    <th
                      className={`flex items-center justify-center border-none`}
                    >
                      {
                        disabled || <Tooltip title={"Supprimer"}>
                          <IconButton
                            aria-label=""
                            size="small"
                            className={
                              !d._id
                                ? "hidden"
                                : "opacity-0 group-hover:opacity-100"
                            }
                            color="primary"
                            onClick={() => {
                              handleDeleteSection(d);
                            }}
                          >
                            <Delete className="text-[20px]" />
                          </IconButton>
                        </Tooltip>
                      }
                      <span
                        onClick={() =>{
                          if(!disabled){
                            handleChange({
                              initValue: d.title,
                              section: d.id,
                              field: "title",
                              fullData: d,
                              isSection: true,
                            })
                          }
                        }
                      }
                        className={` text-center border-none  text-[14px] flex-grow ${disabled || "updatable"}`}
                      // onClick={() =>
                      //   !c.total &&
                      //   handleChange({
                      //     initValue: c.title,
                      //     section: d.id,
                      //     compte: c.num,
                      //     fullData: d,
                      //     field: "title",
                      //     isCompte: true,
                      //   })
                      // }
                      >
                        {d.title}
                      </span>
                    </th>
                  </tr>

                  {d.comptes.map((c, ci) => (
                    <ItemEditable
                      handleDelete={handleDelete}
                      disabled={disabled}
                      key={ci}
                      handleChange={handleChange}
                      d={d}
                      c={c}
                    />
                  ))}

                  <tr>
                    <th className="border-none p-2">
                      <Button
                        onClick={() => {
                          handleAddLine(d);
                        }}
                        variant="contained"
                        color="primary"
                        disabled={disabled}
                        size="small"
                        className="px-2 py-[2px] text-[12px] lowercase"
                        startIcon={<Add />}
                      >
                        ajouter
                      </Button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddSection()}
          size="small"
          disabled={disabled}

          className=" text-[14px] lowercase m-3 bg-[#31859a] text-white"
          startIcon={<Add />}
        >
          ajouter
        </Button>
        <div className={`w-full mx-auto overflow-scroll pb-5 scrollbar-thin scrollbar-thumb-gray-300 ${fill || 'scrollbar-track-white'}`}>


          <table hidden={noTotalSection} >
            <thead className="head">
              <tr style={{ background: fill }}>
                <th rowSpan={2}></th>
                <th
                  rowSpan={2}
                  scope="col"
                  className="w-[200px] text-center"
                >

                </th>

                <ComponentFromList
                  header
                  empty
                  content={(a, m) => (
                    <th
                      key={a + m + ""}
                      colSpan={3}
                      scope="col"
                      className="text-center"
                    >
                      {m + 1}-N+{a + 1}
                    </th>
                  )}
                />
              </tr>
              <tr style={{ background: fill }}>

                <ComponentFromList
                  header
                  content={(a, m) => (
                    <>
                      <th key={1} className=" text-center">
                        HT
                      </th>
                      <th key={2} className=" text-center">
                        TVA
                      </th>
                      <th key={3} className=" text-center">
                        TTC
                      </th>
                    </>
                  )}
                />
              </tr>
            </thead>
            <tbody className="head text-right">
              <tr style={{ background: fill }}>
                <th colSpan={1} className="min-w-[640px] text-left">
                  {totalSection || "TOTAL Chiffre d'affaires-Ventes de Marchandises au Maroc"}
                </th>
                <th className="border-none min-w-[100px]"></th>
                <ComponentFromList
                  body
                  total
                  data={sections}
                  c={c}
                  table={table}
                  content={(a, m, c) => (
                    <>
                      <th key={1} className=" text-center min-w-[100px]">
                        {c.annee[a][m].ht}
                      </th>
                      <th key={2} className=" text-center min-w-[100px]">
                        {c.annee[a][m].tva}
                      </th>
                      <th key={3} className=" text-center min-w-[100px]">
                        {c.annee[a][m].ttc}
                      </th>
                    </>
                  )}
                />
              </tr>
            </tbody>
          </table>



          <table>
            <tbody className="head">
              <tr style={{ background: fill }}>
                <th colSpan={3} className="min-w-[640px] text-left">
                  {bigTotal || "TOTAL"}
                </th>
                <th className="border-none min-w-[100px]"></th>
                <ComponentFromList
                  body
                  total
                  data={sections}
                  c={cx}
                  table={table}
                  content={(a, m, c) => (
                    <>
                      <th key={1} className=" text-center min-w-[100px]">
                        {cx.annee[a][m].ht}
                      </th>
                      <th key={2} className=" text-center min-w-[100px]">
                        {cx.annee[a][m].tva}
                      </th>
                      <th key={3} className=" text-center min-w-[100px]">
                        {cx.annee[a][m].ttc}
                      </th>
                    </>
                  )}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-[40px]"></div>

    </>
  );
};

export default Table_V3;

const ComponentFromList = ({
  content,
  header,
  empty,
  body,
  compte,
  data,
  total,

  c,
}) => {
  return LIST_ANNEE.map((annee, a) => (
    <>
      {LIST_MOIS.map((mois, m) => content(a, m, c))}
      {header && (
        <>
          <th key={a + 1} className="text-center w-[200px]">
            {!empty && `Total année ${a + 1}`}
          </th>
          {a == 0 && (
            <>
              <th key={a + 1} className="text-center w-[200px]">
                {!empty && `Total année ${a + 2}`}
              </th>
              <th key={a + 1} className="text-center w-[200px]">
                {!empty && `Total année ${a + 3}`}
              </th>
              <th key={a + 1} className="text-center w-[200px]">
                {!empty && `Total année ${a + 4}`}
              </th>
            </>
          )}
        </>
      )}
      {body && (
        <>
          {a != 0 ? (
            <th key={a + 1} className="text-right min-w-[200px]">
              {GetValString(
                (data ? c.annee[a] : compte.annee[a])
                  .map(
                    (r) => decodeString(r.ht)
                  )
                  .reduce((e, b) => e + b)
              )}
            </th>
          ) : (
            (data ? c.annee : compte.annee).map((r, i) => (
              <th key={i + 1} className="text-right min-w-[200px]">
                {GetValString(
                  (data ? c.annee[i] : compte.annee[i])
                    .map(
                      (r) => decodeString(r.ht)

                    )
                    .reduce((e, b) => e + b)
                )}
              </th>
            ))
          )}
        </>
      )}
      <th key={a} className="min-w-[60px] bg-white border-none"></th>
    </>
  ));
};

const ItemEditable = ({ handleChange, d, c, handleDelete ,disabled}) => (
  <tr className="group">
    <th className={`flex items-center items border-[0.5px]`}>
      <Tooltip title={"Supprimer"}>
        <IconButton
          aria-label=""
          size="small"
          className={c.total ? "hidden" : "opacity-0 group-hover:opacity-100"}
          color="primary"
          onClick={() => {
            handleDelete(d, c);
          }}
        >
          <Delete className="text-[20px]" />
        </IconButton>
      </Tooltip>
      <span
        className={`w-[300px] h-auto ${c.total ? "text-[14px]" : "pl-2 py-1"
          } ${disabled&&"update"}`}
        onClick={() =>
          !c.total &&
          handleChange({
            initValue: c.title,
            section: d.id,
            compte: c.num,
            fullData: d,
            field: "title",
            isCompte: true,
          })
        }
      >
        {c.title}
      </span>
    </th>
    <th
      onClick={() =>
        !c.total &&
        handleChange({
          initValue: c.commentaire,
          section: d.id,
          compte: c.num,
          fullData: d,
          field: "commentaire",
        })
      }
      className={`text-left  min-w-[300px] max-w-[300px] ${!c.total&&!disabled && "updatable"
        }`}
    >
      {c.commentaire}
    </th>
    <th
      onClick={() =>
        !c.total &&
        handleChange({
          initValue: c.taux,
          section: d.id,
          compte: c.num,
          fullData: d,
          field: "taux",
        })
      }
      className={`text-center  min-w-[100px] max-w-[100px] ${!c.total&&!disabled && "updatable"
        }`}
    >
      {c.taux}
    </th>

    <ComponentFromList
      body
      compte={c}
      content={(a, m) => (
        <>
          <th
            onClick={() =>
              !c.total &&
              handleChange({
                initValue: c.annee[a][m].ht,
                section: d.id,
                compte: c.num,
                annee: a,
                mois: m,
                fullData: d,
                field: "ht",
                isAnnee: true,
              })
            }
            key={1}
            className={`min-w-[100px] text-right ${!c.total&&!disabled && "updatable"}`}
          >
            {c.annee[a][m].ht}
          </th>
          <th key={2} className={`min-w-[100px] text-right`}>
            {c.annee[a][m].tva}
          </th>
          <th key={3} className={`min-w-[100px] text-right`}>
            {c.annee[a][m].ttc}
          </th>
        </>
      )}
    />
  </tr>
);
