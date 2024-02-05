///  1. Class Move

class Movie {
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPg(movies){
        return movies.filter((movie) => movie.rating==="PG")
    }
}
const moviesArr = [
    new Movie("Casino Royale", "Eon Productions", "PG13"),
    new Movie("The Incredibles", "Pixar", "PG"),
    new Movie("The Dark Knight", "Warner Bros.", "PG13"),
    new Movie("Jaws", "Universal Pictures", "PG"),
    new Movie("Scarface", "Universal Pictures", "R")
];
const pg = Movie.getPg(moviesArr)
var mapedMovi = pg.map((ele)=>ele)
console.log(mapedMovi);

var casinoRoyale = new Movie("Casino Royale","Eon Productions","PG");
console.log(casinoRoyale)

console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.rating);

//// 2. Class Circle.

class Circle{
constructor(radius,color)
{
    this.radius=radius;
    this.color=color;
}
getRadius(){
    console.log(`radius : ${this.radius}`)
}
setRadius(rad){
    this.radius=rad;
}
getColor(){
    console.log(`color : ${this.color}`)
}
setColor(col){
    this.color=col;
}
getArea(){
    var pi = 3.1415
    console.log((pi*this.radius*this.radius).toFixed(2))
}
getcir(){
    var pi = 3.1415
    console.log((2*pi*this.radius).toFixed(2))
}
}
const c1 = new Circle(1,"red");
console.log(c1);
c1.getRadius();
c1.setRadius(5);
console.log(c1);
c1.getColor();
c1.setColor("blue");
console.log(c1);
c1.getArea();
c1.getcir();

/////// 3. Write a “person” class to hold all the details.
class Person{
    constructor(name,age,finalDegree,passoutYear,gender)
    {
        this.name=name;
        this.age=age;
        this.finalDegree=finalDegree;
        this.passoutYear=passoutYear;
        this.gender=gender;
    }
}
const p1 = new Person("syed",34,"B.Tech",2012,"Male")
console.log(p1)
/////// 4. write a class to calculate the Uber price.
class UberPrice{
    constructor(price,hours)
    {
        console.log(price*hours)
    }
}

const price1 = new UberPrice(15,25)