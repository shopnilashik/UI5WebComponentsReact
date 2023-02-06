import {
    FlexBox,
    FlexBoxAlignItems,
    FlexBoxDirection,
    FlexBoxJustifyContent,
    Link,
    LinkDesign,
    ShellBar,
} from "@ui5/webcomponents-react";
import React, { useState } from "react";
import {
    Button,
    TableRow,
    TableCell,
    Label,
    Table,
    TableGrowingMode,
    TableColumn,
    useEffect,
    List,
    StandardListItem,
} from "@ui5/webcomponents-react";
import "./App.css";
import { Main } from "./components/Main";
import { ATable } from "./components/Table";
import { BTable } from "./components/Table2";
import "@ui5/webcomponents-fiori/dist/Bar.js";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_fiori_3");
// setTheme("sap_horizon_dark");
// setTheme("sap_fiori_3_hcw");
// setTheme("sap_fiori_3_hcw");
function App() {
    return (
        <>
            <ShellBar
                logo={<img src="logo.png" />}
                primaryTitle="UI5 Web Components in React"
            />
            {/* <List
            headerText="List with StandardListItems">
            <StandardListItem additionalText="3">
              List Item 1
            </StandardListItem>
            <StandardListItem additionalText="2">
              List Item 2
            </StandardListItem>
            <StandardListItem additionalText="1">
              List Item 3
            </StandardListItem>
          </List> */}
            <ui5-bar design="FloatingFooter">
                <ui5-button design="Positive" slot="endContent">
                    Agree
                </ui5-button>
                <ui5-button design="Negative" slot="endContent">
                    Decline
                </ui5-button>
                <ui5-button design="Transparent" slot="endContent">
                    Cancel
                </ui5-button>
            </ui5-bar>
            <FlexBox
                alignItems="Center"
                direction="Column"
                justifyContent="Center"
                wrap=""
                style={{ background: "#E3E3E3" }}
            >
                <ui5-button icon="employee">Add</ui5-button>
                <ui5-button icon="download" icon-end>
                    Download
                </ui5-button>
                <ui5-button design="Positive" icon="add">
                    Add
                </ui5-button>
                <ui5-button design="Negative" icon="delete">
                    Remove
                </ui5-button>
                <ui5-button design="Attention" icon="message-warning">
                    Warning
                </ui5-button>
                <ui5-button design="Transparent" icon="accept">
                    Transparent
                </ui5-button>
                <ui5-button>Hello world!</ui5-button>
                {/* <Main/>
            <ATable/> */}
                <BTable />
            </FlexBox>
        </>
    );
    // return (
    //   <>
    //     <ShellBar primaryTitle="UI5 Web Components for React Template" />
    //     <FlexBox
    //       style={{ width: '100%', height: '100vh' }}
    //       direction={FlexBoxDirection.Column}
    //       justifyContent={FlexBoxJustifyContent.Center}
    //       alignItems={FlexBoxAlignItems.Center}
    //     >
    //       {/* <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
    //         Getting Started with UI5 Web Component for React
    //       </Link>
    //       <Button
    //         icon="employee"
    //       >
    //         Button Text
    //       </Button> */}

    //     </FlexBox>
    //   </>
    // );
}

export default App;
