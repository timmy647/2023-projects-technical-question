/* eslint-disable react/jsx-key */

import { useState } from "react";
import AlertModal from "../AlertModal";
import styles from "./Table.module.css";

// !!!!!!!!!!!!!!!!!!!!
// TODO is at line 68 !
// !!!!!!!!!!!!!!!!!!!!

export interface AlertUpdate {
  date: string;
  update: string;
}

export interface Alert {
  alert: string;
  status: string;
  updates: AlertUpdate[];
}

export interface TableContents {
  columnTitles: string[];
  rowContents: Alert[];
}

export default function Table() {
  const [contents, useContents] = useState<TableContents>({
    columnTitles: ["Alert", "Status", "Updates"],
    rowContents: [
      {
        alert: "food",
        status: "good!",
        updates: [],
      },
      {
        alert: "water",
        status: "low",
        updates: [
          { update: "dropped to 10% below normal", date: "11/11/2022" },
        ],
      },
      {
        alert: "shelter",
        status: "terrible :(",
        updates: [
          { update: "slept on cold ground", date: "11/11/2022" },
          { update: "slept on hard concrete", date: "13/11/2022" },
        ],
      },
      {
        alert: "Done!",
        status: "Tim Liu",
        updates: [],
      },
    ],
  });

  var [new_alert, set_alert] = useState<String[]>([]);
  var key_id = 0;

  return (
    <>
      <AlertModal useContents={useContents} setAlert={set_alert} />
      <div className={styles.myTable}>
        <div className={styles.row}>
          {contents.columnTitles.map((item) => (
            <div className={styles.item} key={item}>
              {item}
            </div>
          ))}
        </div>
        {contents.rowContents.map((content) => (
          <div data-testid="row" className={styles.row} key={key_id++}>
            <div className={styles.item} key={key_id++}>
              {content.alert}
            </div>
            <div className={styles.item} key={key_id++}>
              {content.status}
            </div>
            <div className={styles.update} key={key_id++}>
              <div className={styles.item}>
                {content.updates.map((update) => (
                  <div className={styles.item} key={key_id++}>
                    {update.update}
                  </div>
                ))}
              </div>
              <div className={styles.item}>
                {content.updates.map((update) => (
                  <div className={styles.date} key={key_id++}>
                    {update.date}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div>
          {new_alert.map((alert) => (
            <div data-testid="row" className={styles.row} key={key_id++}>
              <div className={styles.item} key={key_id++}>
                new Alert
              </div>
              <div className={styles.item} key={key_id++}></div>
              <div className={styles.item} key={key_id++}>
                {alert}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
