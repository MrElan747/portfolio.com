var darkMode = document.querySelector('.dark-mode');
var lightMode = document.querySelector('.light-mode');
var mainLightMode = document.querySelector('.main-light-mode');
var mainDarkMode = document.querySelector('.main-dark-mode');
var profile = document.querySelector('.profile');
var details = document.querySelector('.details');
var footer = document.querySelector('.footer');
var menuBtn = document.querySelector('.menu-btn');
var menuName = document.querySelector('.menu-name');
var menuEnd = document.querySelector('.menu-end');
var titleImg = document.querySelector('.title-img');
var sec1 = document.querySelector('.sec-1');
var sec2 = document.querySelector('.sec-2');
var sec3 = document.querySelector('.sec-3');
var sec4 = document.querySelector('.sec-4');
var sec5 = document.querySelector('.sec-5');
var sec6 = document.querySelector('.sec-6');
var sec7 = document.querySelector('.sec-7');
var priceSec1 = document.querySelector('.price-sec-1');
var priceSec2 = document.querySelector('.price-sec-2');
var priceSec3 = document.querySelector('.price-sec-3');
var recom = document.querySelector('.recom');
var mainFooter = document.querySelector('.main-footer');
var brand = document.querySelector('.brand');
var mainContent = document.querySelector('.main-content');
var test = document.querySelector('.test');
var mainRightNav = document.querySelector('.main-right-nav');
var mobiHead = document.querySelector('.mobi-head');
var mainDetails = document.querySelector('.main-details');
var forms = document.querySelector('.forms');
var add = document.querySelector('.add');
var subClass = document.querySelector('.sub-class');
var mobiLightMode = document.querySelector('.mobi-light-mode');
var mobiDarkMode = document.querySelector('.mobi-dark-mode');
var rightNav = document.querySelector('.right-nav');

// lightMode.addEventListener("click", () => {

//     localStorage.setItem("theme_light_mode", true);

//     lightMode.classList.add('hide-option');
//     darkMode.classList.add("display-option"); 
//     document.body.style.backgroundColor = "aliceblue";
//     profile.classList.add("light-profile");
//     details.classList.add("light-details");
//     footer.classList.add("light-footer");
//     menuBtn.classList.add("light-menu-btn");
//     menuName.classList.add("light-menu-name");
//     menuEnd.classList.add("light-menu-end");
//     sec1.classList.add("light-sec-1");
//     sec2.classList.add("light-sec-2");
//     sec3.classList.add("light-sec-3");
//     sec4.classList.add("light-sec-4");
//     sec5.classList.add("light-sec-5");
//     sec6.classList.add("light-sec-6");
//     sec7.classList.add("light-sec-7");
//     priceSec1.classList.add("light-price-sec-1");
//     priceSec2.classList.add("light-price-sec-2");
//     priceSec3.classList.add("light-price-sec-3");
//     recom.classList.add("light-recom");
//     mainFooter.classList.add("light-main-footer");
//     brand.classList.add("light-brand");
//     mainContent.classList.add("light-main-content");
//     test.classList.add("light-test");
//     mainRightNav.classList.add("light-main-right-nav");
//     mobiHead.classList.add("light-mobi-head");
//     mainLightMode.classList.add("hide-option"); 
//     mainDarkMode.classList.add("display-option"); 
//     mainDetails.classList.add("light-main-details"); 
//     forms.classList.add("light-forms"); 
//     add.classList.add("light-add"); 
//     subClass.classList.add("light-sub-class");
//     mobiLightMode.classList.add("hide-option"); 
//     mobiDarkMode.classList.add("display-option");  
//     rightNav.classList.add("light-right-nav");  

// });

// darkMode.addEventListener("click", () => {
//     localStorage.removeItem("theme_light_mode");
//     darkMode.classList.remove("display-option");
//     lightMode.classList.remove('hide-option');
//     document.body.style.backgroundColor = "#333333";
//     profile.classList.remove("light-profile");
//     details.classList.remove("light-details");
//     footer.classList.remove("light-footer");
//     menuBtn.classList.remove("light-menu-btn");
//     menuName.classList.remove("light-menu-name");
//     menuEnd.classList.remove("light-menu-end");
//     sec1.classList.remove("light-sec-1");
//     sec2.classList.remove("light-sec-2");
//     sec3.classList.remove("light-sec-3");
//     sec4.classList.remove("light-sec-4");
//     sec5.classList.remove("light-sec-5");
//     sec6.classList.remove("light-sec-6");
//     sec7.classList.remove("light-sec-7");
//     priceSec1.classList.remove("light-price-sec-1");
//     priceSec2.classList.remove("light-price-sec-2");
//     priceSec3.classList.remove("light-price-sec-3");
//     recom.classList.remove("light-recom");
//     mainFooter.classList.remove("light-main-footer");
//     brand.classList.remove("light-brand");
//     mainContent.classList.remove("light-main-content");
//     test.classList.remove("light-test");
//     mainRightNav.classList.remove("light-main-right-nav");
//     mobiHead.classList.remove("light-mobi-head");
//     mainLightMode.classList.remove("hide-option"); 
//     mainDarkMode.classList.remove("display-option"); 
//     mainDetails.classList.remove("light-main-details");
//     forms.classList.remove("light-forms");  
//     add.classList.remove("light-add");  
//     subClass.classList.remove("light-sub-class");
//     mobiLightMode.classList.remove("hide-option"); 
//     mobiDarkMode.classList.remove("display-option");    
//     rightNav.classList.remove("light-right-nav");  
// });

mainLightMode.addEventListener("click", () => {
    localStorage.setItem("theme_light_mode", true);
    lightMode.classList.add('hide-option');
    darkMode.classList.add("display-option"); 
    document.body.style.backgroundColor = "aliceblue";
    profile.classList.add("light-profile");
    details.classList.add("light-details");
    footer.classList.add("light-footer");
    menuBtn.classList.add("light-menu-btn");
    menuName.classList.add("light-menu-name");
    menuEnd.classList.add("light-menu-end");
    sec1.classList.add("light-sec-1");
    sec2.classList.add("light-sec-2");
    sec3.classList.add("light-sec-3");
    sec4.classList.add("light-sec-4");
    sec5.classList.add("light-sec-5");
    sec6.classList.add("light-sec-6");
    sec7.classList.add("light-sec-7");
    priceSec1.classList.add("light-price-sec-1");
    priceSec2.classList.add("light-price-sec-2");
    priceSec3.classList.add("light-price-sec-3");
    recom.classList.add("light-recom");
    mainFooter.classList.add("light-main-footer");
    brand.classList.add("light-brand");
    mainContent.classList.add("light-main-content");
    test.classList.add("light-test");
    mainRightNav.classList.add("light-main-right-nav");
    mobiHead.classList.add("light-mobi-head");
    mainLightMode.classList.add("hide-option"); 
    mainDarkMode.classList.add("display-option"); 
    mainDetails.classList.add("light-main-details");
    forms.classList.add("light-forms");  
    add.classList.add("light-add");  
    subClass.classList.add("light-sub-class"); 
    mobiLightMode.classList.add("hide-option"); 
    mobiDarkMode.classList.add("display-option");   
    rightNav.classList.add("light-right-nav");  
});

mainDarkMode.addEventListener("click", () => {
    localStorage.removeItem("theme_light_mode");
    darkMode.classList.remove("display-option");
    lightMode.classList.remove('hide-option');
    document.body.style.backgroundColor = "#333333";
    profile.classList.remove("light-profile");
    details.classList.remove("light-details");
    footer.classList.remove("light-footer");
    menuBtn.classList.remove("light-menu-btn");
    menuName.classList.remove("light-menu-name");
    menuEnd.classList.remove("light-menu-end");
    sec1.classList.remove("light-sec-1");
    sec2.classList.remove("light-sec-2");
    sec3.classList.remove("light-sec-3");
    sec4.classList.remove("light-sec-4");
    sec5.classList.remove("light-sec-5");
    sec6.classList.remove("light-sec-6");
    sec7.classList.remove("light-sec-7");
    priceSec1.classList.remove("light-price-sec-1");
    priceSec2.classList.remove("light-price-sec-2");
    priceSec3.classList.remove("light-price-sec-3");
    recom.classList.remove("light-recom");
    mainFooter.classList.remove("light-main-footer");
    brand.classList.remove("light-brand");
    mainContent.classList.remove("light-main-content");
    test.classList.remove("light-test");
    mainRightNav.classList.remove("light-main-right-nav");
    mobiHead.classList.remove("light-mobi-head");
    mainLightMode.classList.remove("hide-option"); 
    mainDarkMode.classList.remove("display-option"); 
    mainDetails.classList.remove("light-main-details"); 
    forms.classList.remove("light-forms"); 
    add.classList.remove("light-add"); 
    subClass.classList.remove("light-sub-class"); 
    mobiLightMode.classList.remove("hide-option"); 
    mobiDarkMode.classList.remove("display-option"); 
    rightNav.classList.remove("light-right-nav");   
});

mobiLightMode.addEventListener("click", () => {
    localStorage.setItem("theme_light_mode", true);
    lightMode.classList.add('hide-option');
    darkMode.classList.add("display-option"); 
    document.body.style.backgroundColor = "aliceblue";
    profile.classList.add("light-profile");
    details.classList.add("light-details");
    footer.classList.add("light-footer");
    menuBtn.classList.add("light-menu-btn");
    menuName.classList.add("light-menu-name");
    menuEnd.classList.add("light-menu-end");
    sec1.classList.add("light-sec-1");
    sec2.classList.add("light-sec-2");
    sec3.classList.add("light-sec-3");
    sec4.classList.add("light-sec-4");
    sec5.classList.add("light-sec-5");
    sec6.classList.add("light-sec-6");
    sec7.classList.add("light-sec-7");
    priceSec1.classList.add("light-price-sec-1");
    priceSec2.classList.add("light-price-sec-2");
    priceSec3.classList.add("light-price-sec-3");
    recom.classList.add("light-recom");
    mainFooter.classList.add("light-main-footer");
    brand.classList.add("light-brand");
    mainContent.classList.add("light-main-content");
    test.classList.add("light-test");
    mainRightNav.classList.add("light-main-right-nav");
    mobiHead.classList.add("light-mobi-head");
    mainLightMode.classList.add("hide-option"); 
    mainDarkMode.classList.add("display-option"); 
    mainDetails.classList.add("light-main-details");
    forms.classList.add("light-forms");  
    add.classList.add("light-add");  
    subClass.classList.add("light-sub-class"); 
    mobiLightMode.classList.add("hide-option"); 
    mobiDarkMode.classList.add("display-option"); 
    rightNav.classList.add("light-right-nav");    
    rightNav.classList.remove("right-display");    
});

mobiDarkMode.addEventListener("click", () => {
    localStorage.removeItem("theme_light_mode");
    darkMode.classList.remove("display-option");
    lightMode.classList.remove('hide-option');
    document.body.style.backgroundColor = "#333333";
    profile.classList.remove("light-profile");
    details.classList.remove("light-details");
    footer.classList.remove("light-footer");
    menuBtn.classList.remove("light-menu-btn");
    menuName.classList.remove("light-menu-name");
    menuEnd.classList.remove("light-menu-end");
    sec1.classList.remove("light-sec-1");
    sec2.classList.remove("light-sec-2");
    sec3.classList.remove("light-sec-3");
    sec4.classList.remove("light-sec-4");
    sec5.classList.remove("light-sec-5");
    sec6.classList.remove("light-sec-6");
    sec7.classList.remove("light-sec-7");
    priceSec1.classList.remove("light-price-sec-1");
    priceSec2.classList.remove("light-price-sec-2");
    priceSec3.classList.remove("light-price-sec-3");
    recom.classList.remove("light-recom");
    mainFooter.classList.remove("light-main-footer");
    brand.classList.remove("light-brand");
    mainContent.classList.remove("light-main-content");
    test.classList.remove("light-test");
    mainRightNav.classList.remove("light-main-right-nav");
    mobiHead.classList.remove("light-mobi-head");
    mainLightMode.classList.remove("hide-option"); 
    mainDarkMode.classList.remove("display-option"); 
    mainDetails.classList.remove("light-main-details"); 
    forms.classList.remove("light-forms"); 
    add.classList.remove("light-add"); 
    subClass.classList.remove("light-sub-class"); 
    mobiLightMode.classList.remove("hide-option"); 
    mobiDarkMode.classList.remove("display-option");  
    rightNav.classList.remove("light-right-nav");  
    rightNav.classList.remove("right-display");
});

$(document).ready( () => {
    let lightTheme = localStorage.getItem('theme_light_mode');
    if(lightTheme) {
        themes();
    } else {
        darktheme();
    }
});

function themes() {
    localStorage.setItem("theme_light_mode", true);
    lightMode.classList.add('hide-option');
    darkMode.classList.add("display-option"); 
    document.body.style.backgroundColor = "aliceblue";
    profile.classList.add("light-profile");
    details.classList.add("light-details");
    footer.classList.add("light-footer");
    menuBtn.classList.add("light-menu-btn");
    menuName.classList.add("light-menu-name");
    menuEnd.classList.add("light-menu-end");
    sec1.classList.add("light-sec-1");
    sec2.classList.add("light-sec-2");
    sec3.classList.add("light-sec-3");
    sec4.classList.add("light-sec-4");
    sec5.classList.add("light-sec-5");
    sec6.classList.add("light-sec-6");
    sec7.classList.add("light-sec-7");
    priceSec1.classList.add("light-price-sec-1");
    priceSec2.classList.add("light-price-sec-2");
    priceSec3.classList.add("light-price-sec-3");
    recom.classList.add("light-recom");
    mainFooter.classList.add("light-main-footer");
    brand.classList.add("light-brand");
    mainContent.classList.add("light-main-content");
    test.classList.add("light-test");
    mainRightNav.classList.add("light-main-right-nav");
    mobiHead.classList.add("light-mobi-head");
    mainLightMode.classList.add("hide-option"); 
    mainDarkMode.classList.add("display-option"); 
    mainDetails.classList.add("light-main-details"); 
    forms.classList.add("light-forms"); 
    add.classList.add("light-add"); 
    subClass.classList.add("light-sub-class");
    mobiLightMode.classList.add("hide-option"); 
    mobiDarkMode.classList.add("display-option");  
    rightNav.classList.add("light-right-nav");  
}

function darktheme() {
    localStorage.removeItem("theme_light_mode");
    darkMode.classList.remove("display-option");
    lightMode.classList.remove('hide-option');
    document.body.style.backgroundColor = "#333333";
    profile.classList.remove("light-profile");
    details.classList.remove("light-details");
    footer.classList.remove("light-footer");
    menuBtn.classList.remove("light-menu-btn");
    menuName.classList.remove("light-menu-name");
    menuEnd.classList.remove("light-menu-end");
    sec1.classList.remove("light-sec-1");
    sec2.classList.remove("light-sec-2");
    sec3.classList.remove("light-sec-3");
    sec4.classList.remove("light-sec-4");
    sec5.classList.remove("light-sec-5");
    sec6.classList.remove("light-sec-6");
    sec7.classList.remove("light-sec-7");
    priceSec1.classList.remove("light-price-sec-1");
    priceSec2.classList.remove("light-price-sec-2");
    priceSec3.classList.remove("light-price-sec-3");
    recom.classList.remove("light-recom");
    mainFooter.classList.remove("light-main-footer");
    brand.classList.remove("light-brand");
    mainContent.classList.remove("light-main-content");
    test.classList.remove("light-test");
    mainRightNav.classList.remove("light-main-right-nav");
    mobiHead.classList.remove("light-mobi-head");
    mainLightMode.classList.remove("hide-option"); 
    mainDarkMode.classList.remove("display-option"); 
    mainDetails.classList.remove("light-main-details");
    forms.classList.remove("light-forms");  
    add.classList.remove("light-add");  
    subClass.classList.remove("light-sub-class");
    mobiLightMode.classList.remove("hide-option"); 
    mobiDarkMode.classList.remove("display-option");    
    rightNav.classList.remove("light-right-nav");  
}
