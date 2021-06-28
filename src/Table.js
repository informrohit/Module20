import React from 'react'
import MaterialTable from 'material-table'
import { TableBody } from '@material-ui/core'


export const Table=()=>{
    const data=[
        {NAME:'Jorgh',INFO:2763},
        {NAME:'Robin',INFO:2424},
        {NAME:'Califer',INFO:4223},
        {NAME:'Sansu',INFO:2324}
    ]
    const columns=[
        {title:'NAME',field:'NAME'},
        {title:'INFO',field:'INFO'}
    ]
    return(<div>
        <MaterialTable title="Material table"
        data={data}
        columns={columns}
        />
    </div>)
}