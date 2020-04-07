import './home.less'
import Head from 'next/head'
// import {
//   Form,
//   Select,
//   InputNumber,
//   DatePicker,
//   Switch,
//   Slider, 
//   Button,
// } from 'antd'
import Sider from '../../component/layout/sider'

// const FormItem = Form.Item
// const Option = Select.Option


function Home({ userAgent }) {
  return <section>
    <div style={{ borderBottom: '1px solid lightgreen' }}>{userAgent}</div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Sider></Sider>
  </section >
}
Home.getInitialProps = ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}
export default Home