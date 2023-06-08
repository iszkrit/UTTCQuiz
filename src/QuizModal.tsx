import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 600,
  width: 1200,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 10,
  p: 0,
};

type Props = {
  id: number,
  field: string,
  point: number,
  text: string,
  answer: string,
  updatedQuiz: (field: string, id: number) => void,
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs(point:number, text:string, answer:string) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 1200 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="問題" {...a11yProps(0)} />
          <Tab label="解答" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography component={'div'} variant={"h4"}>
            <u>{point}ポイント問題</u>
          </Typography>
          <Typography component={'div'} variant={"h3"} sx={{ mt: 4 }}>
            {text}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography component={'div'} variant={"h4"}>
            <u>{point}ポイント問題(解答)</u>
          </Typography>
          <Typography component={'div'} variant={"h3"} sx={{ mt: 4 }}>
            {answer}
          </Typography>
        </TabPanel>
    </Box>
  );
}

export default function QuizModal({id, field, point, text, answer, updatedQuiz}:Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    updatedQuiz(field, id)
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="success" sx={{mt:2}}>
        この問題にする
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {FullWidthTabs(point,text,answer)}
        </Box>
      </Modal>
    </div>
  );
}