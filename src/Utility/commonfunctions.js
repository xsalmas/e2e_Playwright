import {Locator,Page} from '@playwright/test'

export default class Utils {
    name;
    brandURL;
    url;


    constructor(name)
    {
        this.name = name;
      //  this.brandURL = getbrandURL(name)
    
    }

   async getter1(env, brand){
    console.log("In class method - getter1");
    return 1;
   }
     
   async getbrandURL(brand)
   {//change this to better implementation
    
     console.log("In getbarndURL method - brad is "+ brand )
     if (brand == 'pb') this.brandURL = "potterybarn.com";
     else if (brand == 'pk') 
        this.brandURL = 'potterybarnkids.com';
 else if (brand == 'pt') this.brandURL= 'pbteen.com';
 else if (brand == 'mg') this.brandURL = 'markandgraham.com';
 else if (brand == 'we') this.brandURL = 'westelm.com';
 else this.brandURL= 'williams-sonoma.com';
 
}
 

 async getURL(env,brand,groupID)
{  this.getbrandURL(brand);
   let e= env;
   let g = groupID;
   let url;
   if (e == 'prod') {
     
     url = "https://www."+ this.brandURL + "/products/"+ g
     console.log( "in IF, url = " + url)
   }
   else { 
    url = "https://www."+ e + "."+ this.brandURL + "/products/"+ g
    console.log("In else, url = " + url)
  }
  
  this.url = url;
  //return(url.toString(url));
}

}


