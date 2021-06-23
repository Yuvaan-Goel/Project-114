function preload()
{

}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();
}

function draw()
{
    image(img, 0, 0, 350, 350);

}

function take_snapshot()
{
    save('My-Clown-Face.jpg');
}