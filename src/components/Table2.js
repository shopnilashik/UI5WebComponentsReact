import React,{Component} from "react";
import { Button,TableRow,TableCell,Label,useState,Table,TableGrowingMode,TableColumn,useEffect,List,StandardListItem,Text,AnalyticalTable, FlexBox}  from '@ui5/webcomponents-react';
import "@ui5/webcomponents-base/dist/features/F6Navigation.js"
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js"; 

export class BTable extends Component {
    
    render () {
        const sayHello = () => {
            ;
          };
        
        return (
           
          
            <>
            
            <ui5-table class="demo-table" id="table"  >
                  
                <ui5-table-column slot="columns">
                    <span >Product</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="800">
                    <span >Supplier</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin class="table-header-text-alignment">
                    <span >Dimensions</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin class="table-header-text-alignment">
                    <span >Weight</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" class="table-header-text-alignment">
                    <span >Price</span>
                </ui5-table-column>

                <ui5-table-row onClick={alert("Hello!gsdfsdfd")}>
                    <ui5-table-cell>Notebook Basic 15HT-1000</ui5-table-cell>
                    <ui5-table-cell>Very Best Screens</ui5-table-cell>
                    <ui5-table-cell  >30 x 18 x 3cm</ui5-table-cell>
                    <ui5-table-cell >4.2KG</ui5-table-cell>
                    <ui5-table-cell >956EUR</ui5-table-cell>
                </ui5-table-row>

                <ui5-table-row>
                    <ui5-table-cell>Notebook Basic 15HT-1000</ui5-table-cell>
                    <ui5-table-cell>Very Best Screens</ui5-table-cell>
                    <ui5-table-cell  >30 x 18 x 3cm</ui5-table-cell>
                    <ui5-table-cell >4.2KG</ui5-table-cell>
                    <ui5-table-cell >956EUR</ui5-table-cell>
                </ui5-table-row>
                
                <ui5-table-row>
                    <ui5-table-cell>Notebook Basic 15HT-1000</ui5-table-cell>
                    <ui5-table-cell>Very Best Screens</ui5-table-cell>
                    <ui5-table-cell  >30 x 18 x 3cm</ui5-table-cell>
                    <ui5-table-cell >4.2KG</ui5-table-cell>
                    <ui5-table-cell >956EUR</ui5-table-cell>
                </ui5-table-row>
            </ui5-table>
            </>
                            
        );
      }
}