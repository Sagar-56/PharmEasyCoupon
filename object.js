
 function language(name,country){
      this.name = name;
      this.country = country;
      this.greet = () => {return `Say hii ${name}`}
}
 var Hindi = new language("Hindi", 'India')
//  /////////////////////////////////////////////////////////////////////
//  constructor notation
////////////////////////////////////////////////////////////////////////
 function language(name,country,city){
     this.name = name;
     this.country = country;
     this.city = city;
     this.greet = () => {return `Say Hi to ${name}`}
 }
 var lang = new language("Hindi", 'India' ,"Banpur")

 ////////////////////////////////////////////////////////
//  All Declaration
////////////////////////////////////////////////////////

  class language1{
    constructor(name,country,city){
        this.name = name;
        this.country = country;
        this.city = city;
        this.greet = () => {return  `Say hi ${name} ${country} ${city}`}
    }
}
  var langu = new language1("Hindi", "India", "Banpur")

  /////////////////////////////////////////////////////

  class language2
  {
      constructor(country,name,city){
          this.name = name;
          this.country = country;
          this.city = city;
          this.greet = () =>{return `I love my ${country}, my language that is ${name}, and my city ${city}.`} 
      }
  }
  var myLang = new language2("India", "hindi", "Banpur")
  
  ////////////////////////////////////////////////////////////

  let dboObj ={}
  dboObj.user=[
      {
          name: 'Sagar',
          city: 'Banpur'
      },
      {
          name: 'Rajesh',
          city: 'Balugaon'
      }

  ]
  dboObj.calc = {
       sum: function(a,b){return a+b},
       sub: (a,b) => {return a-b}
  }
  ////////////////////////////////////////////////

  function human(name,city){
      this.name = name;
      this.city = city;
  }
  function robot(name){
    this.name = name;
    this.legs = 2;
    this.hands = 2;
}
  var john = new human("Sagar",'Banpur')
  var robo = new robot("pepper")

  ///////////////////////////////////////

  function human(name,country){
      this.name=name;
      this.country=country;
      this.greet = () => {return `My Name is ${name} bassically belongs to the country of ${country}.`}
  }
  function state(name,population){
      this.name = name;
      this.population = population;
      this.greet = () => {return `My state name is ${name} and my state's population is ${population}.`}
  }
  var humanity = new human("Sagar", "India")
  var state1 = new state("Odisha","10 crore")

  var human1 = new human("Rakesh","Ukrein")

  //////////////////////////////////////////////////////

  class geo{
     constructor(){
         this.lati= 38.99;
         this.longi=65.65;
     }
  }

  class language1 extends geo{
      constructor(name,country){
          super()
           this.name=name;
           this.country=country;
      }
     greet = () =>{return `say hi ${this.name}`}
  }

////////////////////////////////////////////

   a = 10;
 var b = 20;

 function add(a,b){
     return a+b;
 }
 console.log(add(a,b));

 ///////////

 var a = 30;
 var b = 20;

 function sub(a,b){
    return a-b;
}
console.log(sub(a,b))