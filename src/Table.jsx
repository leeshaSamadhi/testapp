import React, {Component} from 'react';

class Table extends React.Component{
    render(){
        const items = this.props.items;
        return(
            <div id="Table">
                <table>
                    <tbody>
                        <tr>
                            <th>Job Title</th>
                            <th>Job Description</th>
                            <th>Job Type</th>
                        </tr>
                        {items.map(item =>{
                            return(
                                <tr>
                                    <td>{item.jobtitle} </td>
                                    <td>{item.jobdescription} </td>
                                    <td>{item.jobtype} </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Table;