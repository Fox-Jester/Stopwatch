


function Game(name, genre, rating){
    this.name = name;
    this.genre = genre;
    this.rating = rating;

    this.listInfo = () => {
        console.log(`name: ${this.name}, genre: ${this.genre}, rating: ${this.rating}`);
    };
};

const game1 = new Game("Warframe", 'Looter shooter', 4.6);

const game2 = new Game("Smite", "MOBA", 4.8);

const game3 = new Game("MHW", "RPG", 4.9);


game1.listInfo();
game2.listInfo();
game3.listInfo();