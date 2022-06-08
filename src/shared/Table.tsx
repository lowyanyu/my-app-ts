import { useContext } from "react";
import { JsxElement } from "typescript";
import { ThemeContext } from "./ThemeContext";
import './Table.scss';

export const Table = (props: any) => {
  const theme = useContext(ThemeContext);

  let tableClasses = 'table';
  if (theme.dark) {
    tableClasses += ' table--dark';
  }
  
  return (
    <div>
      <table className={tableClasses}>
        {props.children}
      </table>
    </div>
  )
};

export const TableHeader = (props: any) => {
  return (
    <thead>
      <tr>
        {
          props.data.map((d: string) => {
            return <th key={d}>{d}</th>
          })
        }
      </tr>
    </thead>
  )
};

export const TableBody = (props: any) => {
  return (
    <tbody>
      {
        props.data.map((d: JsxElement, idx: number) => {
          return <TableRow key={idx} index={idx}>{d}</TableRow>
        })
      }
    </tbody>
  )
};

const TableRow = (props: any) => {
  return (
    <tr className={'table__row ' + (props.index % 2 === 0 ? 'table__row--even' : 'table__row--odd')}>
      {props.children}
    </tr>
  )
};