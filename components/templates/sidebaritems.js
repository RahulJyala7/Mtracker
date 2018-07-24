import React from 'react';
import { cloneObject } from '../helpers/helper';
import * as Api from '../helpers/apiMethods';
import { Link } from 'react-router-dom';


export default class SideBarItems extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = { Bots: [], Entities: [] }
        var UserId = localStorage.getItem("UserId");
        this.getData(UserId);
    }

    handleSubItemClicked = (menuName, id) => {
        this.props.action(menuName, id)
    }

    getData = (UserId) => {
        if (this.props.getBots === "Bots") {
            Api.GetAllAgents(UserId)
                .then(res => {
                    this.setState({ Bots: res.data });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        if (this.props.getEntity === "Entity") {
            Api.GetAllEntities(UserId)
                .then(res => {
                    this.setState({ Entities: res.data });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    showAllBotes = (allBotes) => {
        return <ul className="subLink-panel">
            {allBotes.map((bots, i) => {
                return <li key={i}>
                    <Link to={"/agentconfig/" + bots.agentId} className="accordianLink"><span> {bots.agentName} </span></Link>
                </li>
            })
            }
        </ul>
    }


    showAllEntities = (allEntities) => {
        return <ul className="subLink-panel">
            {allEntities.map((Entities, i) => {
                let Eid = Entities._id.$oid;
                return <li key={i}>
                    <Link to={"/agentconfig/entity/" + Eid} className="accordianLink">
                        <span>{Entities.name}</span>
                    </Link>
                </li>
            })}
        </ul>
    }



    render() {
        let allBotes = this.state.Bots;
        let allEntities = this.state.Entities;
        return (
            <div className="accordion__subpanel">
                {this.props.defaultBotSubmenu ?
                    this.showAllBotes(allBotes) : null}

                {this.props.defaultEntitiesSubmenu ?
                    this.showAllEntities(allEntities) : null}
            </div>

        )
    }
}