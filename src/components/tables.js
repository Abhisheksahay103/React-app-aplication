
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../services/productServices';
import { Table } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
const Tables = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const [city, setCity] = useState(null);
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
    return (
        <div className='group_charts'>          
            <div className="card">
            <div className='card_header'>
                <h4>Top 5 Limits by Utilization</h4>
                <div className='dropdownbox'>                        
                    <Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
                </div>
            </div>
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
            <div className="card">
            <div className='card_header'>
                <h4>Top 5 Limits by Utilization</h4>
                <div className='dropdownbox'>                        
                    <Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
                </div>
            </div>
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    );
}
                 
export default Tables;