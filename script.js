


function htmlElement(){
    this.click = () => {
        console.log("clicked")
    }
}

htmlElement.prototype.focus = () => {
    console.log("focused")
}

function htmlSelectElement(...array){
    this.items = [...array];
    this.addItem = (item) => {
        this.items.push(item);
    }
    this.removeItem = (item) => {
        this.items = this.items.filter(i => i !== item);
    }
}

htmlSelectElement.prototype = new htmlElement;

const selectEl = new htmlSelectElement("wam", "bam", "tam");
