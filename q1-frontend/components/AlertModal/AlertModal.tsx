import { SetStateAction, Dispatch, FormEvent, useState } from "react";
import { TableContents, AlertUpdate } from "../Table/Table";
import styles from "../Table/Table.module.css";

interface AlertModalProps {
  useContents: Dispatch<SetStateAction<TableContents>>;
  setAlert: Dispatch<SetStateAction<String[]>>;
}

export default function AlertModal({ useContents, setAlert }: AlertModalProps) {
  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hint: the alert given is at (e.target as any).elements[0].value - ignore typescript being annoying
    if ((e.target as any)[0]) {
      var newAlert: string = (e.target as any)[0].value;
      console.log(newAlert);
      const alert: AlertUpdate = { update: newAlert, date: "" };
      setAlert((preState) => [...preState, newAlert]);
    }
  }

  return (
    <form data-testid="form" onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type="text" id="alert" name="alert" />
      <button type="submit">Add</button>
    </form>
  );
}
