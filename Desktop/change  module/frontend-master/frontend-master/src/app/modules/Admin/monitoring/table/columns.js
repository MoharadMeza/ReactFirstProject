import { HeaderFormatter } from "./column-formatter/header.column-formatter";
import { ColumnFormatter } from "./column-formatter/caching-database.column-formatter";
import { LogsColumnFormatter } from "./column-formatter/logs.column-formatter";

const columns = (data, dispatch) => {
  const cols = [
    {
      dataField: "name",
      text: "Name",
      sort: false
    },
    {
      dataField: "app_name",
      text: "AppName",
      sort: false
    },
    {
      dataField: "version",
      text: "Version",
      sort: false
    },
    {
      dataField: "ping",
      text: "Ping",
      sort: false
    },
    {
      dataField: "caching",
      text: "Caching",
      sort: false,
      headerAlign: "center",
      align: "center",
      headerFormatter: HeaderFormatter,
      formatter: data.length && ColumnFormatter,
      formatExtraData: { data: data.caching }
    },
    {
      dataField: "database",
      text: "DataBase",
      sort: false,
      headerAlign: "center",
      align: "center",
      headerFormatter: HeaderFormatter,
      formatter: data.length && ColumnFormatter,
      formatExtraData: { data: data.database }
    },
    {
      dataField: "logs",
      text: "logs",
      headerAlign: "center",
      align: "center",
      headerFormatter: HeaderFormatter,
      formatter: LogsColumnFormatter,
      formatExtraData: {
        dispatch: dispatch
      }
    }
  ];

  return cols;
};

export { columns };
