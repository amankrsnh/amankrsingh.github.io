window.addEventListener('load',function(event){
    $("a[href='#profile']").click();
});

function changeColor(event)
{
    window.location=event.target.href;
    $(window).ready(function(){
        disablei();
        $("a[id='nav-link']").each(function() 
        {
            if (window.location.href.includes(this.href,0)) 
            {
                $(this).addClass("current");
                this.nextSibling.innerHTML=" >";
            }
            else
            {
                $(this).removeClass("current");
            }
        });
        $("div[class='hideit']").each(function(){
        if(window.location.href.indexOf(this.id)!==-1)
        {
            this.style.display="block";
        }
        else
        {
            this.style.display="none";
        }
    });
    });
}

function disablei()
{
    $("i[class='i1 disabled']").each(function()
    {
        this.innerHTML="";
    });
}

function extendNavbar()
{
    
    if(document.getElementById("extendnav").style.display==="block")
    {
        document.getElementById("extendnav").style.display="none";
    }
    else
    {
        document.getElementById("extendnav").style.display="block";
    }
}
