import Man from './images/manimg.svg';
import './header.css'

const Header = ()=>{
    return(
        <>
     <div class="banner">
        <div class="section-left">
            <p class="header">An inspiring design delivered to</p> 
            <p class="hearr">your inbox every morning</p>
            <p class="description">Our team scouts the internet for the best designs, illustrations and art and delivers
                a truly inspiring </p>
            <p class="des2">one
                every day to your inbox</p>
            <p class="tag">Show me how it looks</p>
            <input type="email" placeholder="Your Email Address" />
            <button>Register Now</button>
            <div class="bottom-line">Free - No Spam - No Data Sharing</div>
            <div class="section-right">
               <img src={Man} />
           </div>
        </div>
       
     </div>
        </>
    )
}

export default Header