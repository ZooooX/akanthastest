import React from "react";
import "./styles.css";
import MUIDataTable from "mui-datatables";
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';
import DATA from "./MOCK_DATA";

const useStyles = theme => ({
    customHoverFocus: {
      "&:hover, &.Mui-focusVisible": {transform : "scale(1.2)", cursor : "pointer"}
    }
  });


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : DATA
        }

        

        this.classes = useStyles();

    }

  render (){

    const {classes} = this.props;

    const columns = [ 
        {
            name:'label',
            label:"Label",
            options:{
                filter : true,
                sort : true
            }
        },
        {
            name:'code_onu_plein',
            label:"Code ONU plein",
            options:{
                filter : true,
                sort : false
            }
        },
        {
            name:'code_onu_vide',
            label:"Code ONU vide",
            options:{
                filter : true,
                sort : false
            }
        },
        {
            name:'code_dechet_plein',
            label:"Code déchet plein",
            options:{
                filter : true,
                sort : false
            }
        },
        {
            name:'code_dechet_vide',
            label:"Code déchet vide",
            options:{
                filter : true,
                sort : false
            }
        },
        {
            name:'traitement_vide',
            label:"Traitement vide (€)",
            options:{
                filter : true,
                sort : false
            }
        },
        {
            name:'traitement_plein',
            label:"Traitement plein (€)",
            options:{
                filter : true,
                sort : false
            }
        },
        {
            name:'unite_traitement',
            label:"Unité traitement",
            options:{
                filter : true,
                sort : false
            }
        },
        {
            name : "delete_column",
            label : "Delete",
            empty : true,
            options : {
                customBodyRenderLite : (dataIndex) => {
                    return (
                        <DeleteIcon onClick={ () => {
                            const {data} = this.state;
                            data.splice(dataIndex,1);
                            this.setState({data});
                        }} style={{color : red[500]}} className={classes.customHoverFocus}/>
                    )
                }
            }
        }
    ];

    const options = {
        download : false,
        print : false,
        filter : false
    };

    

    return <div className="App">
      <MUIDataTable
        title={"Déchets Dangereux"}
        data={this.state.data}
        columns={columns}
        options={options}/>
    </div>
  }
}

export default withStyles(useStyles)(App);