export let timesClicked = 0;
export default function sketch (p) {

    p.setup = function () {
        p.createCanvas(600, 600);
    };

    p.draw = function () {
        p.background(255);
        p.noFill()
        p.stroke(90)
        p.strokeWeight(1)
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function(newProps){
        if(newProps.getCoords){
            p.sendCoords = newProps.getCoords;
        }
    }

    p.mouseClicked = function() {
        p.sendCoords(p.mouseX, p.mouseY);
        timesClicked++;
    }
};