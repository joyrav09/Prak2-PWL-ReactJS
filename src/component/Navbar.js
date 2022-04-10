import { createUseStyles } from 'react-jss';


function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.Navigation}>   
        <nav>   
            <div  className={classes.styleNav}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;

const useStyles = createUseStyles({
    Navigation:{
        backgroundColor:'#1C2833',
        padding:5,
        justifyContent:'space-between',
    },
    
    styleNav :{
        '& ul' :{
          display: 'flex',
        },
    
        '& li' :{
          display: 'flex',  
          marginLeft:24,
        },
        
        '& li a' :{
            color : 'white',
            fontWeight:'bold',
            textDecoration:'none',
            
          },
      },
});