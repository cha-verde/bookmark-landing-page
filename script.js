const c = document.querySelector(".test");

const w = 0;
const h = c.offsetHeight * 0.5;
const r = 50;


gsap.to({theta: - Math.PI / 2}, { // -90 degrees 
    theta: 3 * Math.PI / 2, // 270, moving from -90 -> 270 = full circle
    duration: 4,
    repeat: -1,
    ease: "none",
    onUpdate(){
        const theta = this.targets()[0].theta;

        const x = w + r * Math.cos(theta);
        const y = h + r * Math.sin(theta);

        gsap.set(".second", {x,y})
    }
});


const im = document.querySelector(".hero__banner")
const gr = document.querySelector(".graphic")

const rect = im.getBoundingClientRect();
console.log(rect.x)
console.log(rect.y)


gr.style.bottom = 0;
gr.style.right = 0;

