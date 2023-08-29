import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./ProductInfoTabs.module.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface ProductInfo {
  material: string;
  origin: string;
  weight: string;
  dimension: string;
}

interface InfoTabsProps {
  info: ProductInfo;
}

const InfoTabs: React.FC<InfoTabsProps> = ({ info }) => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "spanider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='secondary'
          indicatorColor='secondary'
          aria-label='basic tabs example'
        >
          <Tab
            style={{ color: "black" }}
            label='Product Information'
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: "black" }}
            label='Shipping and Returns'
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <span className={styles.productInfo}>
          <span className={styles.questions}>
            <span className={styles.question}>Material</span>
            <span className={styles.answer}>{info.material}</span>
          </span>
          <span className={styles.questions}>
            <span className={styles.question}>Country of Origin</span>
            <span className={styles.answer}>{info.origin}</span>
          </span>
          <span className={styles.questions}>
            <span className={styles.question}>Weight</span>
            <span className={styles.answer}>{info.weight}</span>
          </span>
          <span className={styles.questions}>
            <span className={styles.question}>Dimensions</span>
            <span className={styles.answer}>{info.dimension}</span>
          </span>
        </span>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <span className={styles.shippingInfo}>
          <span className={styles.questions}>
            <span className={styles.question}>
              <span className={styles.text}>Fast delivery</span>
            </span>
            <span className={styles.answer}>
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </span>
          </span>
          <span className={styles.questions}>
            <span className={styles.question}>
              <span className={styles.text}>Simple exchanges</span>
            </span>
            <span className={styles.answer}>
              Is the fit not quite right? No worries! We&#39;ll exchange your
              product for a new one.
            </span>
          </span>
          <span className={styles.questions}>
            <span className={styles.question}>
              <span className={styles.text}>Easy returns</span>
            </span>
            <span className={styles.answer}>
              Just return your product and we&#39;ll refund your money. No
              questions asked! We&#39;ll do our best to make sure your return is
              hassle-free.
            </span>
          </span>
        </span>
      </CustomTabPanel>
    </Box>
  );
};

export default InfoTabs;
