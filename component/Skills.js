import React, {useState} from 'react';
import Skillsbar from '../process/SetSkills';
import { createUseStyles } from 'react-jss';
import logo from '../assets/logo192.png';

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.Background}>
      <div className={classes.Skills}>	 
        <div className={classes.styleText} id="about">
          <p className={classes.styleTitle} >About Me</p>
            <p className={classes.setText}>  
            My name is Joy Ravelo Tarigan. I am currently studying at 
            the Institute of Technology Sumatera. I have expertise in 
            designing web pages or applications. These skills are also 
            often referred to as Front-end Developer. Apart from being 
            a Front-end Developer, I also master UI/UX Design and also 
            Computer Networking.
            </p>
        </div>

        <div className={classes.styleSkills}>
          <div className={classes.setSkills}>
            <p className={classes.setTitle}>Skills</p>
              
            <p>HTML</p>
            <Skillsbar bgcolor="red" progress='67'  height={20} />
            
            <p>CSS</p>
            <Skillsbar bgcolor="#1B58EF" progress='63'  height={20} />
          
            <p>Jquery</p>
            <Skillsbar bgcolor= "#FA9307" progress='38'  height={20} />

            <p>Javascript</p>
            <Skillsbar bgcolor="#14C21F" progress='44'  height={20} />
              
              
            <p>PHP</p>
            <Skillsbar bgcolor="#FA5F07" progress='56'  height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

const useStyles = createUseStyles({
  Skills :{
    display:'flex',
    width:'95%',
    marginLeft:'2.5%', 
  },

  Background :{
    backgroundColor:'#EAEDF0',
  },

  styleText:{
    color:'white',
    width:'70%',
    backgroundColor:'#1C2833',
    margin:30,
    padding:10,
    borderRadius:15,
    boxShadow: "3px 6px 4px #9E9E9E",
    border: {
      color: 'black',
      width: 1,
      style: 'solid'
    },
  },

  styleTitle :{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
  },

  setText:{
    width:'92%',
    marginLeft:'4%',
    textAlign:'justify',
  },
  
  styleSkills :{
    color:'white',
    width:'70%',
    backgroundColor:'#1C2833',
    margin:30,
    padding:10,
    borderRadius:15,
    boxShadow: "3px 6px 4px #9E9E9E",
    border: {
      color: 'black',
      width: 1,
      style: 'solid'
    },
  },

  setSkills :{
    marginLeft:30,
    margin: 30,
  },

  setTitle:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
  },
});