import React,{Component} from "react";
import { Button,TableRow,TableCell,Label,useState,Table,TableGrowingMode,TableColumn,useEffect,List,StandardListItem,Text,AnalyticalTable, FlexBox}  from '@ui5/webcomponents-react';
import "@ui5/webcomponents-base/dist/features/F6Navigation.js"
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js"; 
export class BTable extends Component {
    
    render () {
     
        
        return (
          
          
            <>
            <div class="header">
                <span>Products table - resize your browser to make some columns pop-in</span>
                <button id="toggleSticky" style="height: 32px">Toggle Sticky Column Header</button>
            </div>
            <ui5-table class="demo-table" id="table">
                  
                <ui5-table-column slot="columns">
                    <span style="line-height: 1.4rem">Product</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="800">
                    <span style="line-height: 1.4rem">Supplier</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin class="table-header-text-alignment">
                    <span style="line-height: 1.4rem">Dimensions</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin class="table-header-text-alignment">
                    <span style="line-height: 1.4rem">Weight</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" class="table-header-text-alignment">
                    <span style="line-height: 1.4rem">Price</span>
                </ui5-table-column>

                <ui5-table-row>
                    <ui5-table-cell>Notebook Basic 15HT-1000</ui5-table-cell>
                    <ui5-table-cell>Very Best Screens</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">30 x 18 x 3cm</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">4.2KG</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">956EUR</ui5-table-cell>
                </ui5-table-row>

                <ui5-table-row>
                    <ui5-table-cell>Notebook Basic 17HT-1001</ui5-table-cell>
                    <ui5-table-cell>Very Best Screens</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">29 x 17 x 3.1cm</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">4.5KG</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">1249EUR</ui5-table-cell>
                </ui5-table-row>

                <ui5-table-row>
                    <ui5-table-cell>Notebook Basic 18HT-1002</ui5-table-cell>
                    <ui5-table-cell>Very Best Screens</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">28 x 19 x 2.5cm</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">4.2KG</ui5-table-cell>
                    <ui5-table-cell style="text-align: right">1570EUR</ui5-table-cell>
                </ui5-table-row>
            </ui5-table>
            </>
                            
        );
      }
}