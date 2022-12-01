import React,{useEffect, useState} from 'react'
import { Carousel } from 'primereact/carousel';
import styled, { ThemeProvider } from "styled-components";
import { Button } from 'primereact/button';
import { ProductService } from '../services/productServices';
import { Chart } from 'primereact/chart';
import {useTheme} from '../theme/useTheme';
export default function Slider() {
    const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
      {
          breakpoint: '1920px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '600px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '480px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  const [chartData] = useState({
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D"
            ]
        }
    ]
});

const [lightOptions] = useState({
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    }
});

  const productService = new ProductService();

  useEffect(() => {
      productService.getProductsSmall().then(data => setProducts(data.slice(0,9)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const productTemplate = (product) => {
    return (
        <div className="product-item">
            <div className="product-item-content">
                <div className="mb-3">
                <div className="card flex justify-content-center">
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%' }} />
        </div>
                </div>
            </div>
        </div>
    );
}
  return (
    <>
   {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
 
    <div className="carousel-demo">
            <div className="card">
                <Carousel value={products} numVisible={2} numScroll={2} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h5>Top Reports</h5>} />
            </div>
            
        </div>
        
      </ThemeProvider>
}
   
        </>
  )
}
