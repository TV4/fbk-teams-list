import React, { useEffect, useState } from "react";
import MUIDataTable, { MUIDataTableProps } from "mui-datatables";

import SearchIcon from "@mui/icons-material/YoutubeSearchedFor";
import PrintIcon from "@mui/icons-material/Receipt";
import DownloadIcon from "@mui/icons-material/GetApp";
import ViewColumnIcon from "@mui/icons-material/DynamicFeed";
import FilterIcon from "@mui/icons-material/GroupWork";

function Datatable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("teams.json")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const columns = [
    {
      name: "LeagueID",
      label: "League ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "OddsetName",
      label: "Odds Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "TV4Name",
      label: "TV4Name",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  //   const options = {
  //     toolbar: {

  //     }
  //   }

  let components = {
    icons: {
      SearchIcon,
      FilterIcon,
    },
  };

  return (
    <>
      <MUIDataTable
        columns={columns}
        data={data}
        title="Teams"
        options={{
          selectableRows: "multiple",
          filterType: "dropdown",
          responsive: "vertical",
          customToolbar: null

        }}
      />
    </>
  );
}

export default Datatable;
