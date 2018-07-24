import React from 'react'

class AddDS extends React.Component {
    constructor() {
        super();
        this.state = { datasetname: "", datasource: "", sqldatatype: "", csvdatatype: "", connectionstringdatatype: "", query: "" }
    }

    handleChangeForm = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleCheckboxChange = (e) => {
        let input = e.target.checked;
        this.setState({ [e.target.name]: input })
    }

    submitInfo = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="mainContentBox">
                <div className="page-header">
                    <div className="page-title">Add Data Source</div>
                </div>

                <div className="formrow smallcard-row">
                    <div className="formrow">
                        <label htmlFor="Name">Data Source Name</label>
                        <input type="text" className="forminput formwidth" value={this.state.datasetname} placeholder="Enter Data Source" name="datasetname" onChange={this.handleChangeForm.bind(this)} />
                    </div>
                </div>

                <div className="formrow smallcard-row">
                    <div className="formrow">
                        <label htmlFor="Name">Data Source</label>
                        <select value={this.state.datasource} onChange={this.handleChangeForm.bind(this)} className="forminput formwidth" id="lang" name="datasource">
                            <option value="select">Select Data Source</option>
                            <option value="crmnext">CRMNEXT</option>
                            <option value="yourdb">Your DB</option>
                        </select>
                    </div>
                </div>

                <div className="formrow smallcard-row">
                    <input type="checkbox" name="sqldatatype" className="check-box"
                        checked={this.state.sqldatatype}
                        onChange={this.handleCheckboxChange.bind(this)} />SQL

                                    <input type="checkbox" name="csvdatatype" className="check-box"
                        checked={this.state.csvdatatype}
                        onChange={this.handleCheckboxChange.bind(this)} />CSV

                                    <input type="checkbox" name="connectionstringdatatype" className="check-box"
                        checked={this.state.connectionstringdatatype}
                        onChange={this.handleCheckboxChange.bind(this)} />Connection String
                </div>

                <div className="formrow smallcard-row">
                    <div className="formrow">
                        <label htmlFor="Name">Query</label>
                        <input type="text" value={this.state.query} className="forminput formwidth" placeholder="Enter Query" name="query" onChange={this.handleChangeForm.bind(this)} />
                    </div>
                </div>

                <div className="form-group smallcard-row">
                    <button className="Loginbutton" onClick={this.submitInfo.bind(this)}>Save</button>
                </div>
            </div>
        )
    }
}

export default AddDS;