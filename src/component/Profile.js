import { createUseStyles } from 'react-jss';
import sample from '../assets/sample.png';
import webdev from '../assets/Web Developer_Isometric.png';

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.Profile}>
        
        <div className={classes.styleText}>
          <div className={classes.setText}>
            <p>Hello,</p>
            <p>i'm Joy Ravelo,</p>
            <p>Front-end Developer</p>
            <br></br>
            
            <a href="#about"><button>Show</button></a>
          </div>

          
        </div>

        <div className={classes.webImage}>
          <img src={webdev} alt="logo" />

        </div>
        
    </div>
  );
}

export default Profile;

const useStyles = createUseStyles({
  Profile :{
    display:'flex',
    height:620,
    backgroundColor:'#1C2833',
  },

  styleText:{
    textAlign:'justify',
    width:'50%',
  },

  setText:{
    marginTop:170,
    marginLeft:145,
    
    '& p':{
      fontWeight:'bold',
      textAlign:'justify',
      fontSize:45,
      margin:0,
      color:'white',
    },
    
    '& button' :{
      width:120,
      height:36,
      borderRadius:6,
      backgroundColor:'#0D86F5',
      fontSize:16,
      fontWeight:'bold',
      color:'white',
      border: {
        color: '#0B84F3',
        width: 1,
        style: 'solid'
      },
    },
  },
  
  webImage:{
    width:'50%',
    textAlign:'center',
  },

  
});