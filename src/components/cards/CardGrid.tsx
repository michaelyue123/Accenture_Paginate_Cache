import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SingleCard from "./Card";


const useStyles = makeStyles({
    root: {
      padding: "5vw 10vw"
    }
});

type Props = {
    data: coreData;
}

export const CardGrid: React.FC<Props> = ({ data }) => {
    const classes = useStyles();
    

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            {data.map((item: { coreData: { id: string | number | null | undefined; }; }) => (
            <Grid item xs={12} sm={6} md={4} xl={3} key={item.coreData.id}>
                <SingleCard data={item} />
            </Grid>
            ))}
        </Grid>
        </div>
    );
}

