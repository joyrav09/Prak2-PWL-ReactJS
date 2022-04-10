import { createUseStyles } from 'react-jss';
import logo from '../assets/logo192.png';

function Contact() {
  const classes = useStyles();
  return (
    
    <div className={classes.Contact} id="contact">
        <div className={classes.setContact}>
            
            <div className={classes.Title}>
                <h1>Contact Me</h1>
                <p>If you want to contact me, you can contact him via the message form beside. Thank you.</p>
            </div>

            <div className={classes.styleContact1}>
                <div>
                    <p>Name :</p>
                    <input type="text" name="" value="" placeholder="Input Name..."></input>.
                </div>
                
                <div>
                    <p>Email :</p>
                    <input type="email" name="" value="" placeholder="Input Email..."></input>
                </div>
                
            
            </div>

            <div className={classes.styleContact2}>
            <div>
                    <p>Message :</p>
                    <textarea></textarea>
                </div>
                <button>Kirim</button>
            </div>
    </div>
    <hr></hr>
    <div className={classes.Copyright}>
        <p>Copyright 2022 | Joy Ravelo</p>
    </div>
  </div>
  );
}

export default Contact;


const useStyles = createUseStyles({
    Contact :{
       
        backgroundColor:'#1C2833',
        height:330,
    },
    
    setContact:{
        display: 'flex',
    },

    Title :{
        width:'40%',
        marginLeft:35,
        '& h1' :{
            color:'white',
        },

        '& p':{
            color:'white',
            width:'95%',
            textAlign:'justify',
        },
    },

    styleContact1 :{
        width:'21%',
        '& p' :{
            color:'white',
        },
        '& div' :{
            marginTop:12,
        },
        '& input' :{
            height:25,
            width:260,
        },

       padding: 20,
    },

    styleContact2 :{
        '& p' :{
            color:'white',
        },
        '& div' :{
            marginTop:12,
        },
        '& textarea' :{
            height:110,
            width:380
        },

        '& button' :{
            marginTop:10,
            width:386,
            height:32,
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

       padding: 20,
    },

    Copyright:{
        '& p':{
            color:'white',
            textAlign:'center',
            fontSize:'bold',
            fontWeight:'bold',
            marginTop:20,
        },
    },
});