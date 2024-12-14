import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function IntroCard() {
    return (
        <Card sx={{ display: 'flex', maxWidth: '100%' }}>
            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <div>
                        <Typography component="div" variant="h2">
                            AIDAN DOMONDON
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary', fontSize: '2.5em' }}
                        >
                            Senior at Northeastern University studying Computer Science & Math
                        </Typography>
                    </div>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: '50%' }}
                image="/ai_ml.png"
                alt="Boston"
            />
        </Card>
    );
}
