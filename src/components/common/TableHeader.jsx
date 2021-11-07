import React, { Component } from 'react';

class TableHeader extends Component {
    
    raiseSort = path => {
        // console.log(path)
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path){
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        }
        else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn)  
    }    

    renderSortItem = column => {
        const { sortColumn } = this.props

        if(column.path !== sortColumn.path ) return null;

        if( sortColumn.order === 'asc') return <i className='fa fa-sort-asc'></i>

        // return <i className='fa fa-sort-desc'></i>
    }

    render() { 
        return (
            <thead>
                <tr>
                    { this.props.columns.map(column => 
                    <th 
                        style={{cursor:'pointer'}}
                        key={column.path || column.key}
                        onClick={() => this.raiseSort(column.path)}>{column.label} 
                            {this.renderSortItem(column)}</th>)}
                    </tr>  
            </thead>    
        );
    }
}
 
export default TableHeader;