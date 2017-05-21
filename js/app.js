var initialCat = [
    {
        name: 'Kitty',
        imageSrc: 'images/22252709_010df3379e_z.jpg',
        clickCounter: 0,
        imageAttribution: 'http://hah.com',
        nickNames: ['banana', 'kitten', 'Nana']
    },
    {
        name: 'Tiger',
        imageSrc: 'images/22252709_010df3379e_z.jpg',
        clickCounter: 0,
        imageAttribution: 'http://hah.com',
        nickNames: ['titi', 'kitten', 'Nana']
    },
    {
        name: 'Scaredy',
        imageSrc: 'images/22252709_010df3379e_z.jpg',
        clickCounter: 0,
        imageAttribution: 'http://hah.com',
        nickNames: ['scare', 'kitten', 'Nana']
    },
    {
        name: 'Shadow',
        imageSrc: 'images/22252709_010df3379e_z.jpg',
        clickCounter: 0,
        imageAttribution: 'http://hah.com',
        nickNames: ['sheldon', 'kitten', 'Nana']
    },
    {
        name: 'Soft',
        imageSrc: 'images/22252709_010df3379e_z.jpg',
        clickCounter: 0,
        imageAttribution: 'http://hah.com',
        nickNames: ['soft', 'kitten', 'Nana']
    }
]
var Cat = function(data) {
    this.name = ko.observable(data.name);
    this.imageSrc = ko.observable(data.imageSrc);
    this.clickCounter = ko.observable(data.clickCounter);
    this.imageAttribution = ko.observable(data.imageAttribution);
    this.nickNames = ko.observableArray(data.nickNames);

    this.level = ko.computed(function() {
        if(this.clickCounter() < 10) {
            return "New born";
        } else if(this.clickCounter() < 100) {
            return "Infant";
        } else {
            return "Teen";
        }
    }, this);

};

var ViewModel = function() {
    var that = this;
    this.catList = ko.observableArray([]);

    initialCat.forEach(function(catItem){
        that.catList.push( new Cat(catItem) );
    })

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementClickCounter = function() {
        that.currentCat().clickCounter(that.currentCat().clickCounter() + 1);
    }

    this.showCat = function(clickedCat) {
        that.currentCat(clickedCat);
    }
}

ko.applyBindings(new ViewModel());