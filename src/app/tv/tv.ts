export class TV{
    constructor(private channel_number?:number,
                private channel_name?:string,
                private channel_type?:string,
                private channel_logo?:string,
                private isSubscribed?:boolean){
                    this.isSubscribed = false;
                }

getChannelNumber(){ return this.channel_number;}
getChannelName(){   return this.channel_name;}
getChannelType(){   return this.channel_type;}
getChannelLogo(){   return this.channel_logo;}
getIsSubscribed(){  return this.isSubscribed;}

setIsSunscribed(val:boolean){  this.isSubscribed = val;}


}