import { createUseStyles } from 'react-jss';
import logo from '../assets/logo192.png';
import bengkel from '../assets/bengkel.png';
import pelaporan from '../assets/web_pelaporan.png';
import store from '../assets/web_store.png';
import cms from '../assets/cms.png';
import football from '../assets/football.png';
import search from '../assets/search_data.png';

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.Project} id="project">   
        <div className={classes.styleTitle}>
            <p>My Project</p>
        </div>
        <div className={classes.listProject}>
          <div className={classes.list_1}>
            <div className={classes.card}>
              <div className={classes.imageCard}>
              <img src={pelaporan} alt="pelaporan" />
              </div>     
              <div className={classes.bodyCard}>
                <h3>Reporting</h3>
                <p>This website is built using a framework from the PHP 
                  programming language, namely the Codeigniter framework. 
                  This web is used to create a report, edit reports and 
                  delete reports. </p>
                {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
              </div>
            </div>
    
            <div className={classes.card}>
              <div className={classes.imageCard}>
                <img src={bengkel} alt="bengkel" />
              </div>      
              <div className={classes.bodyCard}>
                <h3>Workshop</h3>
                <p>This application is a system created to record workshop data, 
                  such as customer data, employees, etc. This workshop application 
                  itself is built using the Tkinter module.</p>
              </div>
            </div>  

            <div className={classes.card}>
              <div className={classes.imageCard}>
              <img src={store} alt="store" />
              </div>
              <div className={classes.bodyCard}>
                <h3>Online Store</h3>
                <p>Tokokaro web is built using a template that has been provided 
                  by wordpress. To complete the online store web, I use the available 
                  plugins, such as payment, ordering, etc. plugins.
                  </p>
                {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
              </div>
            </div>  
          </div>
      
        <div className={classes.list_1}>
        <div className={classes.card}>
              <div className={classes.imageCard}>
              <img src={cms} alt="cms" />
              </div>
              <div className={classes.bodyCard}>
                <h3>CMS</h3>
                <p>A CMS is a software system used to organize and create various 
                  content on websites. cms is used for one of the web that I built. 
                  This cms can post data, edit data, delete data, display the number 
                  of posts, display categories, display tags, etc. CMS is also built 
                  for the client side and also the server. </p>
                {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
              </div>
            </div>  

            <div className={classes.card}>
              <div className={classes.imageCard}>
              <img src={football} alt="football" />
              </div>
              <div className={classes.bodyCard}>
                <h3>Web Football</h3>
                <p>In is the first web that I built. This website itself 
                  is built using only html and css.</p>
                {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
              </div>
            </div>  

            <div className={classes.card}>
              <div className={classes.imageCard}>
              <img src={search} alt="search" />
              </div>
              <div className={classes.bodyCard}>
                <h3>Web Search</h3>
                <p>This search web is built using the codeigniter and jquery frameworks.</p>
                {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
              </div>
            </div>  
        </div>
      </div>
    </div>
  );
}

export default Profile;

const useStyles = createUseStyles({
    Project :{
      backgroundColor:'#EAEDF0',
      marginTop:-30,
      height:970,
      width :'100%',
    },

    styleTitle :{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    },

    listProject:{
      marginTop:-20,
    },

    list_1:{
      display: 'flex',
      marginLeft:'10%',
      width:'80%',
      textAlign:'justify',
    },

    card :{
      width:'33%',
      color:'white',
      backgroundColor:'#1C2833',
      margin:10,
      padding:12,
      borderRadius:15,
      boxShadow: "2px 4px 3px #9E9E9E",
      border: {
        color: 'black',
        width: 1,
        style: 'solid'
      },
    },

    imageCard:{
      '& img':{
      width:310,
    },
      textAlign:'center',
      backgroundColor:'#9E9E9E',
      borderRadius:8,
      
    }
});