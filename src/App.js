// import logo from './logo.svg';
import './App.css';
import { Button, Layout, Table } from 'antd';
import Logo from './icons/Logo'
import { Row, Col } from 'antd';
import React,{useState} from 'react';
import Data from "./Data.json";
import LineChart from './components/LineChart';

const { Header, Footer, Content } = Layout;
const stackline_data = Data[0]
const title = stackline_data.title
const subtitle = stackline_data.subtitle


function App() {
  const columns = [
    {
      title: 'WEEKENDING',
      dataIndex: 'weekEnding',
      key: 'WEEKENDING',
      sorter:(a, b) => new Date(a.weekEnding) - new Date(b.weekEnding),
      ellipsis: true,
    },
    {
      title: 'RETAIL SALES',
      dataIndex: 'retailSales',
      key: 'RETAIL SALES',
      sorter: (a, b) => a.retailSales - b.retailSales,
      ellipsis: true,
      render: text => <a>${text}</a>,
    },
    {
      title: 'WHOLESALE SALES',
      dataIndex: 'wholesaleSales',
      key: 'WHOLESALE SALES',
      sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
      ellipsis: true,
      render: text => <a>${text}</a>,
    },
    {
      title: 'UNITS SOLD',
      dataIndex: 'unitsSold',
      key: 'unitsSold',
      sorter: (a, b) => a.unitsSold - b.unitsSold,
      ellipsis: true,
    },
    {
      title: 'RETAILER MARGIN',
      dataIndex: 'retailerMargin',
      key: 'RETAILER MARGIN',
      sorter: (a, b) => a.retailerMargin - b.retailerMargin,
      ellipsis: true,
      render: text => <a>${text}</a>,
    },
  ]
  const [stat,setStat]=useState(stackline_data.sales);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      setFilteredInfo(filters);
      setSortedInfo(sorter);
    };

  return (
    <>
    <div className="App">
      <Layout>
        <Header className='header'>
          <Logo />
        </Header>
        <Layout> 
          <Content className='content'>
          <Row>
            <Col span={5} className="col">
            <img src={stackline_data.image} width={150}/>
            <div className='title'>{title}</div>
            <p className='sub-title'>{subtitle}</p>
            <div className='data'>
            {
              stackline_data.tags && stackline_data.tags.map((item, i) =>{
                return(
                  <Button className='buttons'>{item}</Button>
                )
              })
            }
            </div>
            </Col>
            <Col span={18} className="col">
              <div className='lable'>
                <div className='RetailSales'>Retail Sales</div>
                <div className='WholesaleSales'>Wholesale Sales</div>
              </div>
            <LineChart />
             <div className='table'>
             <Table columns={columns} dataSource={stat} pagination={{pageSize: 50, }}scroll={{y: 240, }} onChange={handleChange} />
             </div>            
            </Col>
          </Row>
          </Content>
        </Layout>
        <Footer className='footer'></Footer>
    </Layout>
    </div>
    </>
  );
}

export default App;
