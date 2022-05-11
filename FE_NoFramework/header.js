window.onload=()=>
{
    dropdown= ()=>
    {
        var v = document.querySelector('.dropdown-menu');
        v.classList.toggle('show');
    }

    darkMode= ()=>
    {
        var b = document.body;
        b.classList.toggle("darkMode");
    }
}