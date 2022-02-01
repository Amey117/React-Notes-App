import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {Button , Container,TextField,Radio,RadioGroup,FormLabel, FormControl,FormControlLabel } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {makeStyles} from '@material-ui/core'  //makestyle is a function it return react hook
import { Block } from '@material-ui/icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Alert } from '@material-ui/lab';


const useStyle = makeStyles({
    btn:{
        fontSize:60,
        backgroundColor:'red'
    }
    ,
    fieldi:{
        marginTop:20,
        marginBottom:20,
        display:Block
    }
})


function Create() {
    const classes = useStyle()
    const [title,settitle] = useState("");
    const [details,setdetail] = useState("")
    const [cat,setcat] =useState("")
    const history = useHistory()
    const handlesubmit = (e)=>{
        e.preventDefault()
        if(title!=='' && details!=="")
        {
            console.log("title",title,"detail",details,"category",cat)
            setdetail('');
            settitle('');
            setcat('');
            fetch('http://localhost:8000/notes',
               { method:'POST',
                headers: {
                   'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({title,details,cat})  
              }).then(()=>{
                  <Alert severity='success'>Note Added Successfully</Alert>
                  history.push("/")
              })
        }
    }
    return ( 
    
    <Container>
        
        <Typography variant='h5' color="textSecondary" gutterBottom>
            Create A New Note
        </Typography>
        
        <form onSubmit={handlesubmit}>
        <TextField className={classes.fieldi} id="task" label="Note Title" variant="outlined" fullWidth value={title} required onChange={(e)=> settitle(e.target.value)}/>
        <TextField 
        className={classes.fieldi} 
        id="taskde"
        label="Note detail"
        variant="outlined" 
        fullWidth 
        multiline
        rows={4}
        required
        value={details}
        onChange={(e)=> setdetail(e.target.value)}
        />

        <FormControl className={classes.fieldi}>

              <FormLabel>Category</FormLabel>
              <RadioGroup  value={cat} onChange={(e)=>setcat(e.target.value)} >
                <FormControlLabel value="money" control={<Radio />} label="Money" />
                <FormControlLabel value="remainders" control={<Radio />} label="Remainders" />
                <FormControlLabel value="important" control={<Radio />} label="Important" />
              </RadioGroup>

        </FormControl>
        <br />


        <Button variant='contained' color="secondary" size="large" endIcon={<SendIcon /  >} type='submit'   >Submit </Button>
        </form>
       

        
        
        
        
    </Container>
    
    
    
    );
}

export default Create;