import React from 'react'
import '../../../App.css'
import '../Banner/Banner.css'
import Button from '../../../components/Button'
import Heading from '../../../components/Heading'

const Banner = () => {
    return(
        <>
           <div className = "header">

               <div className = "Banner_heading">
                    <Heading
                        subTitle = "Authentic Italian Pizza"
                        subTitleColor = "yellow"
                        subTitleSize = "2rem"
                        mainHeading = "The Best Pizza in Town"
                        textAlign = "center"
                        
                     />

                    <Button 
                    buttonName = "Order Online Now"
                    borderStyle = "none"
                    borderRadius = "50px"
                    width = "180px"
                    height = "7vh"
                    custom_btn_style = 'btn_style'

                    />
               </div>
            </div>
        </>
    );
}


export default Banner