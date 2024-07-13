$(document).ready(function(){ 
    //해버거버튼
    let chk = false;
    $('.Responsive_hem').click(function(){ 
        
        if(chk) {
            $('.hem_pan').animate({
                right:"-160px"
            }, 300)   
            // 버튼 원래대로 하기
            $('.line_top').removeClass('rotate45')
            setTimeout(function(){
                $('.line_top').removeClass('mid_setting')
            }, 150)
            
            $('.line_mid').delay(150).animate({
                opacity: 1
            }, 0)
            $('.line_bot').removeClass('rotate_45')
            setTimeout(function(){
                $('.line_bot').removeClass('mid_setting')
            }, 150)
        }
        else {       
            $('.hem_pan').animate({
                right: "0"
            }, 300)     
            // 버튼 X로 하기
            $('.line_top').addClass('mid_setting')
            setTimeout(function(){
                $('.line_top').addClass('rotate45')
            }, 150)
            
            $('.line_mid').delay(150).animate({
                opacity: 0
            }, 0)

            $('.line_bot').addClass('mid_setting')
            setTimeout(function(){
                $('.line_bot').addClass('rotate_45')
            }, 150)

        }
        chk = !chk;
    })    
})

let hem_pan = document.getElementsByClassName("hem_pan")[0];
let Responsive_hem = document.getElementsByClassName("Responsive_hem")[0];
let h_nav_box = document.getElementsByClassName("h_nav_box")[0];
let titlt = document.getElementsByClassName("title")[0]
window.addEventListener("resize", function(){
    let window_w = this.window.innerWidth
    if(window_w <= 780){
        Responsive_hem.style.display = "block"
        hem_pan.style.display = "block"
        titlt.style.display="block"
        h_nav_box.style.display= "none"
    }
    else{
        Responsive_hem.style.display = "none"
        hem_pan.style.display = "none"
        titlt.style.display="none"
        h_nav_box.style.display= "block"
    }
})

window.addEventListener("load", function(){
    console.log(123456)
    let window_w = this.window.innerWidth
    if(window_w <= 780){
        Responsive_hem.style.display = "block"
        hem_pan.style.display = "block"
        titlt.style.display="block"
        h_nav_box.style.display= "none"
    }
    else{
        Responsive_hem.style.display = "none"
        hem_pan.style.display = "none"
        titlt.style.display="none"
        h_nav_box.style.display= "block"
    }
})

// 헤더바 클릭 요소
let h_nav = document.getElementsByClassName("h_nav")
let hem_nav = document.getElementsByClassName("hem_nav")

for(let i=0; i<h_nav.length; i++){
    h_nav[i].addEventListener("click",function(){
        let sec_pos = document.getElementsByClassName("sec_pos")[i];
        let pos = window.pageYOffset + sec_pos.getBoundingClientRect().top;

        window.scrollTo({top:(pos - 65), left:0, behavior:'smooth'});
    })
    hem_nav[i].addEventListener("click",function(){
        let sec_pos = document.getElementsByClassName("sec_pos")[i];
        let pos = window.pageYOffset + sec_pos.getBoundingClientRect().top;

        window.scrollTo({top:(pos - 65), left:0, behavior:'smooth'});
    })
}



let sec_pos_2 = document.getElementsByClassName("sec_pos")[2];
let headerInner = document.querySelector('.header_inner');



let num_value = document.querySelectorAll(".num_value");
let value_arr = [95, 90, 85, 85, 70, 80];
let intervals = [];
let bar_pos = document.getElementsByClassName("bar_pos")


let skill_box = document.getElementsByClassName("sec_pos")[3];
let condition = true
let sec_pos_all = document.querySelectorAll(".sec_pos_all")

window.addEventListener('scroll',function(){
    let window_h = window.scrollY
    // let sec_pos_top = sec_pos_2.getBoundingClientRect().top;
    let skill_box_top = skill_box.getBoundingClientRect().top;

    if(window_h >= skill_box_top){
        if(condition){
            for (let i = 0; i < num_value.length; i++) {
                let count = 0;
                intervals[i] = setInterval(function() {
                    count++;
                    num_value[i].innerText = count;
                    bar_pos[i].style.right = `calc(100% - ${num_value[i].innerText}%)`
                    if (count == value_arr[i]) {
                        clearInterval(intervals[i]);
                    }
                }, 10);
            }
            condition = false
        }
    }
})

