import React from 'react';
import MapContainer from '../map/google_map';
import ConsignmentDraw from '../map/googlemap_consignment'


export default class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicles: [
                {
                    vehicleNo: "UP 14 5522",
                    consignment: ""
                },
                {
                    vehicleNo: "DL 8C 3487",
                    consignment: ""
                },
                {
                    vehicleNo: "BR 2A 8433",
                    consignment: ""
                }
            ], dragDone: false
        }
    }
    consignment = [
        {
            name: "consignment 1",
            address: "delhi"
        },
        {
            name: "consignment 2",
            address: "Kanpur"
        },
        {
            name: "Consignment 3",
            address: "Mumbai"
        }
    ];

    vehicles = [
        {
            vehicleNo: "UP 14 5522",
            consignment: ""
        },
        {
            vehicleNo: "DL 8C 3487",
            consignment: ""
        },
        {
            vehicleNo: "BR 2A 8433",
            consignment: ""
        }
    ];
    renderConsignment(cons) {
        return cons.map(e => {
            return <div className="hover_list">
                <div className="dash-cardbox-map google_map_shadow" draggable onDragStart={(ev) => this.onDragStart(ev, e.name)}>
                    <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                    <div className="cardbox__content">
                        <div className="">Name : {e.name}</div>
                        <div className="">Address : {e.address}</div>
                    </div>
                </div>
            </div>
        });
    }

    renderVehicles(vehicles) {
        return vehicles.map(e => {
            return <div className="hover_list">
                <div className="dash-cardbox-map google_map_shadow" onDragOver={(ev) => this.onDragOver(ev)}
                    onDrop={(ed) => this.onDrop(ed, e.vehicleNo)}>
                    <div className="cardbox__icon cardbox__icon--botsavailable"><i className="fa fa-car"></i></div>
                    <div className="cardbox__content">
                        <div className="">Vehicle No : {e.vehicleNo}</div>
                        <div className="">Consignment : {e.consignment}</div>
                    </div>
                </div>
            </div>
        });
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (e, name) => {
        console.log("drag start: ", name);
        e.dataTransfer.setData("id", name);
    }

    onDrop = (e, vehicleNo) => {
        let name = e.dataTransfer.getData("id");
        let vehicles = this.state.vehicles.filter((vehicle) => {
            if (vehicle.vehicleNo == vehicleNo) {
                vehicle.consignment = name;
            }
            return vehicle;
        })
        this.setState({ ...this.state, vehicles, dragDone: true });
    }

    render() {
        return (
            <div className="mainDashBoard">
                <div className="dashboard-pageheader">
                    <div className="page-header__title">Geo Allocation</div>
                </div>
                <div className="flexbox">
                    <div>
                        <div style={{ border: '1px solid gray', marginTop: 10, boxShadow: '1px 1px #bb9f9f' }}>
                            <div><h3 style={{ padding: 5 }}>Consignments</h3></div>
                            {this.renderConsignment(this.consignment)}
                        </div>
                        <div style={{ border: '1px solid gray', marginTop: 10, boxShadow: '1px 1px #bb9f9f' }}>
                            <div><h3 style={{ padding: 5 }}>Vehicles</h3></div>
                            {this.renderVehicles(this.state.vehicles)}
                        </div>
                    </div>

                    <div className="google_map">
                        {this.state.dragDone === true ? <ConsignmentDraw /> : <MapContainer />}
                    </div>

                </div>
            </div>
        )

    }
}