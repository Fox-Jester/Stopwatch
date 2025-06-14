

function extend(child, parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function htmlElement(){
    this.click = () => {
        console.log("clicked")
    }
}

htmlElement.prototype.focus = () => {
    console.log("focused")
}

htmlElement.prototype.render = () => {
    console.log("render rawr!")
}

function htmlSelectElement(...items){
    this.items = [...items];
    this.addItem = (item) => {
        this.items.push(item);
    }
    this.removeItem = (item) => {
        this.items = this.items.filter(i => i !== item);
    }
}
function htmlImgElement(src){
    this.src = src
}

htmlImgElement.prototype = new htmlElement()
htmlSelectElement.prototype = new htmlElement()

htmlSelectElement.prototype.render = function() {
    const select = document.createElement("select");

    this.items.forEach((item) => {
        const option = document.createElement("option");
        option.innerHTML = item.toString();
        select.appendChild(option);
    })
    
    return select
   
}

htmlImgElement.prototype.render = function() {
    const img = document.createElement("img");
    img.src = this.src;
    return img
}

const elements = [
    new htmlImgElement("https//lmao"),
    new htmlSelectElement("wam", "bam", "tam")
]

for(let element of elements){
    console.log(element.render());
}