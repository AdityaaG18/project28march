import './footer.css'
import LinkedIn from './images/LinkedinLogo.png';
import Instagram from './images/InstagramLogo.png';

const Footer = ()=>
{
    return(
        <>
         <div class="footer">
          <ul>
            <li>Prompt Generator</li>
            
            <li>Dweep Daily</li>
            
            <li>All Contributors</li>
            
            <li>Your data on Dweep.io</li>
            
            <li>Contribute to Dweep</li>
         </ul>
         
         <ol>
            <li>Dweep.io</li>
            <li>Made with love in India</li>
            <li class="logo-list">
                <img src={LinkedIn} alt=" t"/>
                <img src={Instagram} alt=" t"/>
            </li>
            <br></br>
            <li>&nbsp;</li>
            <li>hello@dweep.io</li>
         </ol>
         </div>
      
        </>
    )
}
export default Footer