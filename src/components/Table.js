import React,{Component} from "react";
import { Button,TableRow,TableCell,Label,useState,Table,TableGrowingMode,TableColumn,useEffect,List,StandardListItem,Text,AnalyticalTable, FlexBox}  from '@ui5/webcomponents-react';
export class ATable extends Component {
    
    render () {
     
        
        return (
          
     
          <AnalyticalTable
                columns={[
                    {
                    Header: 'Name',
                    accessor: 'name',
                    headerTooltip: 'Full Name'
                    },
                    {
                    Header: 'Age',
                    accessor: 'age',
                    className: 'superCustomClass',
                    disableFilters: false,
                    disableGroupBy: true,
                    disableSortBy: false,
                    hAlign: 'End'
                    },
                    {
                    Header: 'Friend Name',
                    accessor: 'friend.name'
                    },
                    {
                    accessor: 'friend.age',
                    hAlign: 'End',
                    Header: () => <span>Friend Age</span>,
                    filter: (rows, accessor, filterValue) => {
                        if (filterValue === 'all') {
                        return rows;
                        }
                        if (filterValue === 'true') {
                        return rows.filter((row) => row.values[accessor] >= 21);
                        }
                        return rows.filter((row) => row.values[accessor] < 21);
                    },
                    Filter: ({ column }) => {
                        return (
                        <select
                            onChange={(event) => column.setFilter(event.target.value)}
                            style={{ width: '100%' }}
                            value={column.filterValue ? column.filterValue : 'all'}
                        >
                            <option value="all">Show All</option>
                            <option value="true">Can Drink</option>
                            <option value="false">Can't Drink</option>
                        </select>
                        );
                    }
                    },
                    {
                    Cell: (instance) => {
                        const { cell, row, webComponentsReactProperties } = instance;
                        // disable buttons if overlay is active to prevent focus
                        const isOverlay = webComponentsReactProperties.showOverlay;
                        // console.log('This is your row data', row.original);
                        return (
                        <FlexBox>
                            <Button icon="edit" disabled={isOverlay} />
                            <Button icon="delete" disabled={isOverlay} />
                        </FlexBox>
                        );
                    },
                    Header: 'Actions',
                    accessor: '.',
                    disableFilters: true,
                    disableGroupBy: true,
                    disableResizing: true,
                    disableSortBy: true,
                    id: 'actions',
                    width: 100
                    }
                ]}
                data={[
                    {
                    age: 80,
                    friend: {
                        age: 68,
                        name: 'Carver Vance'
                    },
                    name: 'Allen Best',
                    status: 'Success'
                    },
                    {
                    age: 31,
                    friend: {
                        age: 70,
                        name: 'Strickland Gallegos'
                    },
                    name: 'Combs Fleming',
                    status: 'None'
                    }
                    // shortened for readability
                ]}
                filterable
                groupBy={[]}
                groupable
                header="Table Title"
                infiniteScroll
                onColumnsReorder={() => {}}
                onGroup={() => {}}
                onLoadMore={() => {}}
                onRowClick={(e) => {alert(e);
                console.log(e);}}
                onRowExpandChange={() => {}}
                onRowSelect={() => {}}
                onSort={() => {}}
                onTableScroll={() => {}}
                rowHeight={44}
                selectedRowIds={{
                    3: true
                }}
                selectionMode="SingleSelect"
                withRowHighlight
                />
        
          
        );
      }
}