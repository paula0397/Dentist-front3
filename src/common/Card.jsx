/* import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Typography,
    } from "@mui/material";
    import FavoriteIcon from "@mui/icons-material/Favorite";

    export const Card = (props,user, favs) => {
    const { nameApi } = props;

    return (
        <div>
        <Typography
            variant="h5"
            color="initial"
            sx={{ margin: "20px", textAlign: "center", fontFamily: "Raleway" }}
        >
            Home
        </Typography>

        <Grid container spacing={2}>
            {nameApi.map((item) => {
            return (
                <Grid item xs={12} sm={4} md={3} key={item.id}>
                <Card>
                    <CardMedia
                    component="img"
                    height="194"
                    image={item.img}
                    alt={item.title}
                    src="https://res.cloudinary.com/djsppnyg1/image/upload/v1680893199/Female-Doctor-Vector-Illustration_gupswq.jpg"
                    />
                    <CardContent>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ fontFamily: "Raleway" }}
                    >
                        {item.name}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ fontFamily: "Raleway" }}
                    >
                        {item.email}
                    </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    <IconButton 
                    aria-label="add to favorites"
                    onClick={() =>
                        dispatch({ type: "HANDLE_FAVORITE", payload: user })}>
                        <FavoriteIcon
                        /* color= {
                            favs.some((favs) => favs.id ===user.id)
                            ? "error"
                            : "disabled"
                        }  />
                    </IconButton>
                    
                    </CardActions>

                    
                </Card>
                </Grid>
            );
            })}
        </Grid>
        </div>
    );
};

export default Card; */