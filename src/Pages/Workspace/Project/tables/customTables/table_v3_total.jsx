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
const getTotalTable = ({ table, state, start, nbrTable }) => {
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
const Table_V3_total = ({ tables }) => {
  const state = useSelector((state) => state.project);




  //  const cx = getTotalTable({ start, nbrTable, state, table });
  return (
    <>

      <div

        className="w-screen overflow-hidden py-3 my-3">

        <div className={`w-full mx-auto overflow-scroll pb-5 scrollbar-thin scrollbar-thumb-gray-300 ${'scrollbar-track-white'}`}>

          <table  >
            <thead className="head">
              <tr>
                <th className="min-w-[300px]">{"CA prévisionnel HT N+1"}</th>
                <th
                  rowSpan={2}
                  scope="col"
                  className="w-[200px] text-center"
                >
                  {"Fournisseur / "}Commentaire / Hypothèse
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
              <tr>
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
            <tbody className="text-right">
              {tables.map((t, i) => {
                const c = signelTotal({ state, table: t.table });
                const sections = DataTable({
                  state,
                  stateList: state[t.table],
                  type: "A2",
                });
                return <>
                <tr key={1}>
                  <th colSpan={1} className="min-w-[400px] text-left">
                    {"Total "+t.title}
                  </th>
                  <th className="min-w-[100px]"></th>
                  <th className="min-w-[100px]"></th>
                  <ComponentFromList
                    body
                    total
                    data={sections}
                    c={c}
                    table={t}
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
                <tr key={1}>
                  <th colSpan={1} className="min-w-[400px] text-left font-normal">
                    {t.title}
                  </th>
                  <th className="min-w-[100px]"></th>
                  <th className="min-w-[100px]"></th>
                  <ComponentFromList
                    body
                    total
                    data={sections}
                    c={c}
                    table={t}
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
                <tr>
                  <th className="py-3 border-none"></th>
                </tr>
                </>

              })}
            </tbody>
          </table>


          {/* 
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
          </table> */}
        </div>
      </div>
      <div className="h-[40px]"></div>

    </>
  );
};

export default Table_V3_total;

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
