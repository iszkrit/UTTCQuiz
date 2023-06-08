import QuizModal from './QuizModal';
import HTML from "./assets/HTML.png";
import CSS from "./assets/CSS.png";
import JS from "./assets/JS.png";
import UTTC from "./assets/uttc.png";

import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
    id: number,
    field: string, 
    point: number, 
    text: string, 
    answer: string,
    isAlreadySelected: boolean,
    updatedQuiz: (field: string, id: number) => void,
}

type Images = {
    [key: string]: string
}

const images:Images = {
    "html": HTML,
    "css": CSS,
    "js": JS,
    "uttc": UTTC
}

const quizDifficulty = (point:number) => {
    if (point>40) {
        return "難しめの"
    } else if (point>20) {
        return "標準的な"
    } else {
        return "易しめの"
    }
    
}
console.log("aaaaaaaaaaaaaaaaaaaaaa")

const QuizFrame: React.FC<Props> = React.memo(({id, point, field, text, answer, isAlreadySelected, updatedQuiz}) => {
    if (isAlreadySelected) {
        return <></>
    }
    return (
        <Card sx={{ maxWidth: 300, maxHeight:300, m:3 }} elevation={10}>
            <Box borderBottom={1}>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <CardMedia sx={{ height: 150, width:120, m:1}} image={images[field]} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h1" sx={{mr:3, mb:-3}}>
                            {point}
                        </Typography>
                        <Typography variant="h6" sx={{ml:4}}>
                            points
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <CardContent>
                <Typography variant="subtitle1" color="text.secondary">
                    {field}に関する{quizDifficulty(point)}問題です
                </Typography>
                <QuizModal {...{id:id, field:field, point:point, text:text, answer:answer, updatedQuiz:updatedQuiz}}/>
            </CardContent>
        </Card>
    );
})

export default QuizFrame