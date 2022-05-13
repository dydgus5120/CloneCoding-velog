window.onload=()=>
{
    dropdown= ()=>
    {
        var v = document.querySelector('.dropdown-menu');
        v.classList.toggle('show');
    }

    period_dropdown= ()=>
    {
        var v = document.querySelector('.period-dropdown');
        v.classList.toggle('show');
    }

    list_menu_dropdown= ()=>
    {
        var v = document.querySelector('.list-menu-dropdown');
        v.classList.toggle('show');
    }

    darkMode= ()=>
    {
        var b = document.body;
        b.classList.toggle("darkMode");
    }
}