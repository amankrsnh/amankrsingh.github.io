window.addEventListener('load',function(event){
    $("a[href='#profile']").click();
});

function changeColor(event)
{
    console.log("color changed");
    window.location=event.target.href;
    $(window).ready(function(){
        disablei();
        $("a[id='nav-link']").each(function() 
        {
            if (window.location.href.includes(this.href,0)) 
            {
                $(this).addClass("current");
                console.log("current : "+this.href)
                console.log(this.innerHTML);
                this.nextSibling.innerHTML=" >";
            }
            else
            {
                $(this).removeClass("current");
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

window.onscroll = function() {myFunction()};
var navb = document.getElementById('stickit');
console.log(navb);
var sticky = navb.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navb.addClass("sticky")
  } else {
    navb.removeClass("sticky");
  }
}