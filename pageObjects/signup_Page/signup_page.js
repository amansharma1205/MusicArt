import helpers from "../../resource/helpers.js";
const path =require('path')

class signupPage_Objects {

    get SignInLink() { return $("//a[@href='/auth/login']/span[.='Sign in']");}  
    get SignInBTN() { return $("//button[@class='sign__btn']");}  
   
    get RegisterLink() { return $("//a[@href='/auth/register']");}  
    get SignUpUserName() { return $("//input[@class='sign__input' and @placeholder='Username']");}  
    get SignUpEmail() { return $("//input[@class='sign__input' and @placeholder='Email']");}  
    get SignUpPassword() { return $("//input[@class='sign__input' and @placeholder='Password']");}  

    get SignUpPrivacy() { return $("//form[@class='sign__form']/div[4]/label");} 
    get SignUpTOS() { return $("//form[@class='sign__form']/div[5]/label");} 
    get SignUpBTN() { return $("//button[@class='sign__btn']");} 
    get ProfileIcon() { return $("//span[@class='displayname']");} 
    get IACCEPT() { return $("//button[@id='rcc-confirm-button' and text()='I ACCEPT']");} 

    



     
    async SignupToMusicArt(){

       await this.IACCEPT.click();
       await this.SignInLink.waitForDisplayed();
       await  this.SignInLink.click();
       await this.SignInBTN.scrollIntoView();
       
       await this.RegisterLink.waitForDisplayed();
       
       await this.RegisterLink.click();
     
       await this.SignUpUserName.waitForDisplayed();
       
       await helpers.setValue(this.SignUpUserName,helpers.randomUserNameGenerator());
       
       await helpers.setValue(this.SignUpEmail,helpers.randomEmailGenerator());
       await  helpers.setValue(this.SignUpPassword,"123456");
      
        await this.SignUpPrivacy.waitForDisplayed();
        await this.SignUpTOS.waitForDisplayed();
       await this.SignUpPrivacy.click();
       await  this.SignUpTOS.click();
       // await this.SignUpBTN.scrollIntoView();
        await this.SignUpBTN.waitForDisplayed();
       await  this.SignUpBTN.click();
       await this.ProfileIcon.waitForDisplayed(30000);



    }
  
    
}export default new signupPage_Objects()