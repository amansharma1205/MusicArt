import helpers from "../../resource/helpers.js";

class mintPage_Ojects{
    get MintLink() { return $("//ul[@class='header__nav']//a[@href='/mintNFT']");}  
    get MintMusicArtistsComboBox() { return $("//input[@class='ant-select-selection-search-input']");} 
    get MintMusicArtistSelection() { return $("//div[@class='ant-select-item ant-select-item-option ant-select-item-option-active']/div[@class='ant-select-item-option-content']/div/div[@class='profile_text_wrapper']");} 
    get MintMusicArtistNextBTN() { return $("//button[@class='ant-btn ant-btn-primary step_btn_btn']");} 

    get MintNFTDetailTitle() { return $("//input[@id='itemname']");} 
    get MintNFTSelectColletion() { return $("//form//div[@class='collection_select']/select[@id='Category-field']");} 
    get MintNFTCreateNewColletion() { return $("//input[@id='collectionNameField']");} 
    get MintNFTCreateNewColletionCreateBTN() { return $("//div[5]/div[@role='none presentation']/div[@role='dialog']//form//button[@type='submit']");} 
    get MintNFTCreateNewColletionNextBTN() { return $("//main[@class='main']//form/div[2]/button[2]/span[.='Next']");}

    get MintNFTRoyaltyBTN() { return $("//button[@class='ant-btn ant-btn-royalty royalty__btn royalty__btn__selected']");}
    

    get MintNFTImageBTN() { return $("//form/div[@class='row steps-content-inner-wrapper']/div[2]/div[@class='sign__group upload_wrapper']//span[@role='button']");}
    get MintNFTImageOKBTN() { return $("//button[@class='ant-btn ant-btn-primary']");}

    get MintNFTOSCheckBox() { return $("//label[.='I have read and agree to the Terms of Service.']");}
    get MintNFTBTN() { return $("//div[1]/main[@class='main']/div[@class='container']//form//button[@type='submit']");}

    get MintNFTPromoCode() { return $("//div/div[@class='py-2'][3]/form/div[1]/input[@class='promo_input_box']");}
    get MintNFTApplyPromoCode() { return $("//form/div[2]/button[@class='link link_text']");}
    

    get MintNFTisAgreedPolicy() { return $("//div/div[2]/div[@class='MuiDialogContent-root']/div/div[@class='sign__group sign__group--checkbox'][1]/label");}
    get MintNFTisAgreedTerms() { return $("//div/div[2]/div[@class='MuiDialogContent-root']/div/div[@class='sign__group sign__group--checkbox'][2]/label");}
    get MintNFTPayWithWalletBTN() { return $("//button[text()='Pay with wallet']");}
    get MintNFTSucessMSG() { return $("//div[@role='dialog']//label[.='You have successfully minted NFT!']");}
  
    

    async mintNFT(){
        await  this.MintLink.waitForDisplayed();
        await  this.MintLink.click();

        await  this.MintMusicArtistsComboBox.waitForDisplayed();
        await  this.MintMusicArtistsComboBox.click();
        await  this.MintMusicArtistSelection.waitForDisplayed();
        await  this.MintMusicArtistSelection.click();
        await  this.MintMusicArtistNextBTN.waitForEnabled();
        await  this.MintMusicArtistNextBTN.click();

        await  this.MintNFTDetailTitle.waitForDisplayed();
        await this.MintNFTDetailTitle.setValue("Crypt0 Heart");
        await  this.MintNFTSelectColletion.click();
        await browser.pause(2000);
        await this.MintNFTSelectColletion.selectByAttribute('value','-1');
        await browser.pause(2000);
        await  this.MintNFTCreateNewColletion.waitForExist();
        await  this.MintNFTCreateNewColletion.setValue(helpers.randomUserNameGenerator());
        await  this.MintNFTCreateNewColletionCreateBTN.click();
        await browser.pause(2000);
        await  this.MintNFTCreateNewColletionNextBTN.waitForEnabled();
        await  this.MintNFTCreateNewColletionNextBTN.click();

        await  this.MintNFTRoyaltyBTN.waitForEnabled();
        await  this.MintNFTCreateNewColletionNextBTN.click();

        await  this.MintNFTImageBTN.waitForDisplayed();
        await  this.MintNFTImageBTN.click();
        await browser.pause(2000);
        await  helpers.runAutoItScript("C:/Users/Selenium/Desktop", "test.exe");
        await  this.MintNFTImageOKBTN.waitForDisplayed({ timeout: 30000 });
        await  this.MintNFTImageOKBTN.click();
        await  browser.pause(2000);
        await  this.MintNFTCreateNewColletionNextBTN.waitForEnabled();
        await  browser.pause(2000);
        await  this.MintNFTCreateNewColletionNextBTN.click();
        console.log("111111111111111111111111111111")

        await browser.pause(4000)
      //  await  this.MintNFTOSCheckBox.scrollIntoView();
        await  this.MintNFTOSCheckBox.waitForDisplayed();
        await  this.MintNFTOSCheckBox.click();
        await  this.MintNFTBTN.click();

        await  this.MintNFTPromoCode.waitForDisplayed();
        await  this.MintNFTPromoCode.setValue("MusicArt100");
        await this.MintNFTApplyPromoCode.click();
        await browser.pause(2000);

        await  this.MintNFTisAgreedPolicy.waitForDisplayed({ timeout: 30000 });
        await  this.MintNFTisAgreedTerms.waitForDisplayed({ timeout: 30000 });
        await  this.MintNFTisAgreedPolicy.click();
        await  this.MintNFTisAgreedTerms.click();
        await  this.MintNFTPayWithWalletBTN.click();
        await this.MintNFTSucessMSG.waitForDisplayed({ timeout: 60000 });
        await browser.pause(10000);


    }
  

}export default new mintPage_Ojects()