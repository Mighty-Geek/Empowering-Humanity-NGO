// import React from 'react';
// import { useTable } from 'react-table';
// import styled from 'styled-components';
// import Nav from './helper/Nav'

// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
// `

// function Table({ c, d }) {
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     } = useTable({
//         c,
//         d,
//     })


//     function Table() {

//         return (
//             <table {...getTableProps()}>
//                 <thead>
//                     {headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map(column => (
//                                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map((row, i) => {
//                         prepareRow(row)
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map(cell => {
//                                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                 })}
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         );
//     }

//     const cols = React.useMemo(
//         () => [
//             {
//                 Header: 'User',
//                 columns: [
//                     {
//                         Header: 'Name',
//                         accessor: 'usr-name',
//                     },
//                     {
//                         Header: 'Contact',
//                         accessor: 'usr-contact',
//                     },
//                     {
//                         Header: 'Status',
//                         accessor: 'status',
//                     },
//                     {
//                         Header: 'Volunteers',
//                         accessor: 'volunteers'
//                     }
//                 ],
//             },
//             {
//                 Header: 'Admin',
//                 columns: [
//                     {
//                         Header: 'Name',
//                         accessor: 'a-name',
//                     },
//                     {
//                         Header: 'Contact',
//                         accessor: 'a-contact',
//                     },
//                     {
//                         Header: 'Location',
//                         accessor: 'location',
//                     },
//                 ],
//             },
//         ],
//         []
//     )

//     const data = [
//         {
//             "usr-name": 'Isha',
//             "usr-contact": '99999999',
//             "status": 'safe',
//             "volunteers": 'none',
//             "a-name": 'Urvashi',
//             "a-contact": '99999922',
//             "location": 'Kashmere Gate'
//         },
//         {
//             "usr-name": 'Yashika',
//             "usr-contact": '99999999',
//             "status": 'safe',
//             "volunteers": 'none',
//             "a-name": 'Urvashi',
//             "a-contact": '99999922',
//             "location": 'Kashmere Gate'
//         }
//     ]
// }
// function SuperAdminPage({ cols, data }) {
//     return (
//         <>
//             <div className="heading">
//                 <h1>Suraksha</h1>
//                 <h3>Portal</h3>
//             </div>
//             <Nav />
//             <div className="sadmin">
//                 <Styles>
//                     <Table columns={cols} data={data} />
//                 </Styles>
//             </div>
//         </>
//     )
// }

// export default SuperAdminPage;

import React from 'react'
import Nav from './helper/Nav'
import styled from 'styled-components'
import { useTable } from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function SuperAdminPage() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'User',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'usr-name',
                    },
                    {
                        Header: 'Contact',
                        accessor: 'usr-contact',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                    {
                        Header: 'Volunteers',
                        accessor: 'volunteers'
                    }
                ],
            },
            {
                Header: 'Admin',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'a-name',
                    },
                    {
                        Header: 'Contact',
                        accessor: 'a-contact',
                    },
                    {
                        Header: 'Location',
                        accessor: 'location',
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "usr-name": 'Isha',
            "usr-contact": '99999999',
            "status": 'safe',
            "volunteers": 'none',
            "a-name": 'Urvashi',
            "a-contact": '99999922',
            "location": 'Kashmere Gate'
        },
        {
            "usr-name": 'Yashika',
            "usr-contact": '99999999',
            "status": 'safe',
            "volunteers": 'none',
            "a-name": 'Urvashi',
            "a-contact": '99999922',
            "location": 'Kashmere Gate'
        }
    ]

    return (
        <>
            <div className="heading">
                <h1>Suraksha</h1>
                <h3>Portal</h3>
            </div>
            <Nav />

            <Styles className="tbl">
                <Table columns={columns} data={data} />
            </Styles>
        </>
    )
}

export default SuperAdminPage;
