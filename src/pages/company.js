import React from 'react';
import '../assets/sass/pages/company.scss'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Row,
  Col, 
  Image,
  } from 'react-bootstrap';
import { Helmet } from 'react-helmet'

const pageTitle = 'About company and services'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FBFBFB',
    },
    secondary: {
        main: '#B99C66'
      },
    }
  },
)


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Secondary = ({ text }) => (
  <Typography variant="subtitle1" className="secondary">{text}</Typography>
)

export default function HomeTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Policy" {...a11yProps(1)} />
          <Tab label="Quality" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* Company about tab */}
      <TabPanel value={value} index={0}>
        <div className="about-container">
          <Helmet>
            <title>{ pageTitle }</title>
          </Helmet>
          <Row>
            <Col xs={12} md={8}>
              <Typography variant="h1">Company</Typography>
              <Typography variant="subtitle1">Founded in 2003 in Riga. Baltic Arch is a global architecture company that has grown to include 500 employees working out of combined 7 offices in the largest cities of Latvia.</Typography>
              <Typography variant="subtitle1" className="second-para">From education and healthcare to mixed-use and transit-oriented development, we design for a sustainable and resilient future, and to enhance the human experience thorugh the built environment, providing all services required for the commissioning of objects.</Typography>
            </Col>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={9} className="count-container">
              <Row>
                <Col xs={4} md={4}>
                  <Typography variant="subtitle1">250<br/><span className="secondary">Houses built</span></Typography>
                </Col>
                <Col xs={4} md={4}>
                  <Typography variant="subtitle1">437<br/><span className="secondary">Projects designed</span></Typography>
                </Col>
                <Col xs={4} md={4}>
                  <Typography variant="subtitle1">129<br/><span className="secondary">Interiors created</span></Typography>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={3}></Col>
            <Image src={require('../assets/img/about/image1.jpg')} fluid />
            <Col xs={12} md={8}>
              <Secondary text="Since 2003 we work on a large variety of projects. We gained experience in the realization of architectural projects, reinnovations, interior designs and product designs. Our clients include property developers, housing corporations, multinational corporations, laws firm and private families. We are ambitious and motivated. We like to learn and broaden our horizon." />
              <Typography variant="subtitle1" className="second-para">Our practice is found on the idea that design can have direct and positive impact on people's lives. This is achieved through research and innovation, always quesioning the status quo. By focusing on the user experience and drawing on the firm's vast roster of design anf thought leaders the world over, we are uniquely equipped to tackle the most complex of design challenges, no matter how large or small.</Typography>
            </Col>
            <Col xs={12} md={12}>
              <Image src={require('../assets/img/about/image2.jpeg')} fluid />
            </Col>
            <Col xs={12} md={12}>
              <Typography variant="subtitle1">Services we provide:</Typography>
            </Col>
            <Col xs={12} md={6}>
              <Secondary text="House-building" />
              <Secondary text="Engineering structure" />
              <Secondary text="Bridges and hydrotechnical structures" />
            </Col>
            <Col xs={12} md={6}>
              <Secondary text="Reconstruction and restoration" />
              <Secondary text="Interior designing" />
              <Secondary text="Designing" />
            </Col>
          </Row>
        </div>
      </TabPanel>

      {/* Company tab two */}
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>

      {/* Company tab three */}
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      </MuiThemeProvider>
    );
  }