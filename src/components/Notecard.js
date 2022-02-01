import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from "@material-ui/core";
import { green, pink, purple } from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";


function Notecard(props) {

    const useStyle = makeStyles({
        test: {

            border: (note) => {
                if (note.cat === 'work') {
                    return ('1px solid red')
                }

            }

        },
        avatar:{
            backgroundColor:(note)=>{
                if(note.cat==='work')
                {
                    return purple[500]
                }
                else if(note.cat==='money')
                {
                    return green[500]
                }
                else{
                    return pink[500]
                }
            }
        }
    })
    console.log("props", props)
    const { title, cat, details, id } = props.note
    const classes = useStyle(props.note)
    return (

        <div>

            <Card elevation={3} className={classes.test}>

                <CardHeader avatar={<Avatar className={classes.avatar}>
                    {title[0].toUpperCase()}
                </Avatar>} title={title} subheader={cat} action={
                    <IconButton onClick={() => props.del(id)}>
                        <DeleteOutlined ></DeleteOutlined>
                    </IconButton>
                } />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {details}
                    </Typography>
                </CardContent>
            </Card>


        </div>)
}

export default Notecard;