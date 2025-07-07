function not()
{
    const areaNot = document.querySelector("#areaNot");

    if(areaNot.style.display == "none" || areaNot.style.display == "")
    {
        areaNot.style.display = "grid";
    }
    else
    {
        areaNot.style.display = "none";
    }
}