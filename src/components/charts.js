
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
export default function Charts () {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#FFA726',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    });
    const [city, setCity] = useState(null);
    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#707172'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#707172'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#707172'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions          
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div className='group_charts'>
            <div className="card">
            <div className='card_header'>
                <h4>Vertical</h4>
                <div className='dropdownbox'>                        
                    <Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
                </div>
            </div>
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
            <div className="card">
            <div className='card_header'>
                <h4>Vertical</h4>
                <div className='dropdownbox'>                        
                    <Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
                </div>
            </div>
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}
                 