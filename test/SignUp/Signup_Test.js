import { Console } from 'console';
import signup_page from '../../pageObjects/signup_Page/signup_page.js'
import helpers from '../../resource/helpers.js';
const path =require('path')
import mint_Page from '../../pageObjects/mint/mint_Page.js'

describe('Verify User SignUp Process',async()=>{

        beforeEach (async function (){
           
            await browser.url('/');
            await helpers.waitforPageload();
                
        })
     
    it('User Should be able to signup with valid data',async()=>{
        

        await signup_page.SignupToMusicArt();
        await mint_Page.mintNFT();
       


    })
})