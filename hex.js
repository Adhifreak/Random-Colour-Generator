const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colour = document.querySelector(".Colour");

btn.addEventListener("click", function()
{
    let hexcolour = "#";
    for (let i=0 ;i<6 ;i++)
        {
            hexcolour += hex[getrandomNumber()];
        }
        document.body.style.backgroundColor = hexcolour;
        colour.textContent = hexcolour;
}
)

function getrandomNumber ()
{
    return Math.floor(Math.random() * hex.length);
}