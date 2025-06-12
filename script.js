


function Stopwatch(){

    let isCounting = false

    this.duration = 0
    let startTime, endTime = 0
    

    this.start = () => {
        if(!isCounting){
            startTime = new Date()
            isCounting = true;
        }
        else{
            return Error("Stopwatch has already started.")
        }
        
    }

    this.stop = () => {
        if(isCounting){
            isCounting = false
            endTime = new Date()

            this.duration = ((endTime - startTime) / 1000);

        }
    }


    this.reset = () => {
        isCounting = false;
        this.duration = 0;
    }
}




const sw = new Stopwatch()

