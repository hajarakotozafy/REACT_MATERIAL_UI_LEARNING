import React from 'react'
import { Box, Card, CardHeader, Avatar, IconButton, Checkbox, CardMedia, CardActions, CardContent, Typography } from '@mui/material';
import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";

const Feed = () => {
    return (
        <Box flex={6} p={2}>
            <Card sx={{ margin: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="/assets/img/portfolio/cake.png"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Text
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton> */}
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Feed