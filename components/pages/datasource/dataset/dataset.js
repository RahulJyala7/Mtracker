import React from 'react'

export default class DataSet extends React.Component {
    constructor(props) {
        super(props)
    }

    onAddDataSource = () => {
        this.props.history.push('/datanextconfig/adddataset')
    }


    render() {
        return (
            <div className="mainDashBoard">
                <div className="dashboard-pageheader">
                    <div className="page-header__title">Datasets</div>
                    <a className="tabList__icon" onClick={this.onAddDataSource} ><i className="addnew fa fa-plus-circle"></i></a>
                </div>
                <table className="datasettable">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Sql Query</th>
                            <th>Sample</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>19846</td>
                            <td>Lead_NewDB_2017-2018</td>
                            <td>Select * from .....</td>
                            <td>view</td>
                            <td>actions</td>
                        </tr>

                        <tr>
                            <td>19846</td>
                            <td>opportunity_PB_2017-2018</td>
                            <td>Select * from .....</td>
                            <td>view</td>
                            <td>actions</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
