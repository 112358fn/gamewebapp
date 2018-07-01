import React from 'react';
import DataProvider from './DataProvider'
import ActivationForm from './ActivationForm'

const ActivateTeamPage = (props) => {
    console.log(props)
    return (
        <div>
            Assamble your heroes:
            <DataProvider 
            endpoint={"http://192.168.0.10:8000/api/team/"+props.match.params.id+'/'}
            dataConsumer={data =>
                <ActivationForm data={data} endpoint={"http://192.168.0.10:8000/api/team/update/"+props.match.params.id+'/'}/>
            }
            />
        </div>
    )
};

export default ActivateTeamPage