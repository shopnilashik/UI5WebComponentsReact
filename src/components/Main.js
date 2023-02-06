import React,{Component} from "react";
import "@ui5/webcomponents/dist/Button.js"
import { Button,TableRow,TableCell,Label,useState,Table,TableGrowingMode,TableColumn,useEffect,List,StandardListItem,Text,AnalyticalTable, FlexBox}  from '@ui5/webcomponents-react';
import './Main.css';
import axios from 'axios';
export class Main extends Component {
    state = {
        data: []
      };

      componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            this.setState({ data: response.data });
            
          });
        }
    render () {
        const { data } = this.state;
        // const tableData = new Array(50).fill(null).map((_, index) => {
        //   return {
        //     name: `name${index}`,
        //     age: Math.floor(Math.random() * 100),
        //     friend: {
        //       name: `friend.Name${index}`,
        //       age: Math.floor(Math.random() * 100)
        //     }
        //   };
        // });
        // console.log(data);
        const tableColumns = [
          {
            Header: "ID",
            accessor: "id", // String-based value accessors!
          },
          {
            Header: "Body",
            accessor: "body",
          },
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "User Id",
            accessor: "userId",
          },
        ];
        
        return (
          // <Table data = {data}
          //   showNoData={false}
          //   noDataText="No data available"
          //   columns={[
          //     <TableColumn
          //       key="userId"
          //       header={<Text>User ID</Text>}
          //       footer={<Text>User ID</Text>}
          //     />,
          //     <TableColumn
          //       key="id"
          //       header={<Text>ID</Text>}
          //       footer={<Text>ID</Text>}
          //     />,
          //     <TableColumn
          //       key="title"
          //       header={<Text>Title</Text>}
          //       footer={<Text>Title</Text>}
          //     />,
          //     <TableColumn
          //       key="body"
          //       header={<Text>Body</Text>}
          //       footer={<Text>Body</Text>}
          //     />
          //   ]}
          //     items={data.map((item, index) => ({
          //       userId: item.userId,
          //       id: item.id,
          //       title: item.title,
          //       body: item.body
          //     }))}
          //   />
         
          <AnalyticalTable data={data} columns={tableColumns} visibleRows="10" />
         
          
        );
      }
}