import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form"

const App = () => (
    <React.Fragment>
        <DataProvider endpoint={"http://localhost:8000/api/team/"+window.location.href.split('/')[4]+'/'}
        dataConsumer={data => {
                if(data['activated']) {
                    return <DataProvider endpoint="http://localhost:8000/api/team/" dataConsumer={data => <Table data={data} />} />
                } else {
                    return <Form data={data} endpoint={"http://localhost:8000/api/team/"+window.location.href.split('/')[4]+'/'}/>
                }
            }
        }/>
    </React.Fragment>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;