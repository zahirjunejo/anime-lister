import { Injectable } from '@angular/core';

@Injectable()
export class Anime {

  animeCharacters:any = [
		{picture:'https://vignette1.wikia.nocookie.net/fma/images/d/d3/Avatar_edward.png/revision/latest?cb=20170303004709' , name:'Edward Elric', animeTitle:'Full Metal Alchemist'},
		{picture:'http://img05.deviantart.net/1c66/i/2015/196/5/2/now0vip_by_yellowflash1234-d91ewy6.jpg' , name:'Alphonse Elric', animeTitle:'Full Metal Alchemist'},
		{picture:'https://vignette2.wikia.nocookie.net/shipping/images/3/39/Eren_Yeager.gif/revision/latest?cb=20151110174826' , name:'Erin Yaeger', animeTitle:'Attack on Titan'},
		{picture:'http://ll-c.ooyala.com/e1/oyZGVmYjE6ExdA8e2OnCUkgjOdM4kjgq/promo320625423' , name:'Mikasa', animeTitle:'Attack on Titan'},
		{picture:'http://ll-c.ooyala.com/e1/A2cmVmYjE6mFNX2coO3H3ddjje8HNQHG/promo320627132' , name:'Armin', animeTitle:'Attack on Titan'},
		{picture:'https://vignette1.wikia.nocookie.net/psychopass/images/d/d8/Kogami_2.jpg/revision/latest/scale-to-width-down/300?cb=20150217063746' , name:'Kogami', animeTitle:'Psyho Pass'},
		{picture:'https://vignette1.wikia.nocookie.net/psychopass/images/4/42/Akane_1.png/revision/latest?cb=20150101080901' , name:'Akane', animeTitle:'Psycho Pass'}
  ];

  constructor() {
    console.log('Hello Anime Provider');
  }

}
