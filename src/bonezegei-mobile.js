/*Bonezegei Mobile Template
  Author: Jofel Batutay (Bonezegei)
  Date: August 2023 
*/

var config = {
  colorNavBarButtonActive: "#000",
  colorNavBarButton: "#888",
};

function configUpdate() {
  if (document.getElementById("navbarButton5_1")) {
    navbarButton5_1.style.color = config.colorNavBarButtonActive;
    navbarButton5_2.style.color = config.colorNavBarButton;
    navbarButton5_3.style.color = config.colorNavBarButton;
    navbarButton5_4.style.color = config.colorNavBarButton;
    navbarButton5_5.style.color = config.colorNavBarButton;
  }
}

/* Navigation bar 5 */
/******************************************************************************************/
if (document.getElementById("navbarButton5_1")) {
  navbarButton5_1.onclick = function () {
    navbarButton5_1.style.color = config.colorNavBarButtonActive;
    navbarButton5_2.style.color = config.colorNavBarButton;
    navbarButton5_3.style.color = config.colorNavBarButton;
    navbarButton5_4.style.color = config.colorNavBarButton;
    navbarButton5_5.style.color = config.colorNavBarButton;
    navbarContent5_1.style.display = "block";
    navbarContent5_2.style.display = "none";
    navbarContent5_3.style.display = "none";
    navbarContent5_4.style.display = "none";
    navbarContent5_5.style.display = "none";
  };
}

if (document.getElementById("navbarButton5_2")) {
  navbarButton5_2.onclick = function () {
    navbarButton5_1.style.color = config.colorNavBarButton;
    navbarButton5_2.style.color = config.colorNavBarButtonActive;
    navbarButton5_3.style.color = config.colorNavBarButton;
    navbarButton5_4.style.color = config.colorNavBarButton;
    navbarButton5_5.style.color = config.colorNavBarButton;
    navbarContent5_1.style.display = "none";
    navbarContent5_2.style.display = "block";
    navbarContent5_3.style.display = "none";
    navbarContent5_4.style.display = "none";
    navbarContent5_5.style.display = "none";
  };
}

if (document.getElementById("navbarButton5_3")) {
  navbarButton5_3.onclick = function () {
    navbarButton5_1.style.color = config.colorNavBarButton;
    navbarButton5_2.style.color = config.colorNavBarButton;
    navbarButton5_3.style.color = config.colorNavBarButtonActive;
    navbarButton5_4.style.color = config.colorNavBarButton;
    navbarButton5_5.style.color = config.colorNavBarButton;
    navbarContent5_1.style.display = "none";
    navbarContent5_2.style.display = "none";
    navbarContent5_3.style.display = "block";
    navbarContent5_4.style.display = "none";
    navbarContent5_5.style.display = "none";
  };
}

if (document.getElementById("navbarButton5_4")) {
  navbarButton5_4.onclick = function () {
    navbarButton5_1.style.color = config.colorNavBarButton;
    navbarButton5_2.style.color = config.colorNavBarButton;
    navbarButton5_3.style.color = config.colorNavBarButton;
    navbarButton5_4.style.color = config.colorNavBarButtonActive;
    navbarButton5_5.style.color = config.colorNavBarButton;
    navbarContent5_1.style.display = "none";
    navbarContent5_2.style.display = "none";
    navbarContent5_3.style.display = "none";
    navbarContent5_4.style.display = "block";
    navbarContent5_5.style.display = "none";
  };
}

if (document.getElementById("navbarButton5_5")) {
  navbarButton5_5.onclick = function () {
    navbarButton5_1.style.color = config.colorNavBarButton;
    navbarButton5_2.style.color = config.colorNavBarButton;
    navbarButton5_3.style.color = config.colorNavBarButton;
    navbarButton5_4.style.color = config.colorNavBarButton;
    navbarButton5_5.style.color = config.colorNavBarButtonActive;
    navbarContent5_1.style.display = "none";
    navbarContent5_2.style.display = "none";
    navbarContent5_3.style.display = "none";
    navbarContent5_4.style.display = "none";
    navbarContent5_5.style.display = "block";
  };
}

/* Navigation bar 4 */
/******************************************************************************************/
if (document.getElementById("navbarButton4_1")) {
  navbarButton4_1.onclick = function () {
    navbarButton4_1.style.color = config.colorNavBarButtonActive;
    navbarButton4_2.style.color = config.colorNavBarButton;
    navbarButton4_3.style.color = config.colorNavBarButton;
    navbarButton4_4.style.color = config.colorNavBarButton;
    navbarContent4_1.style.display = "block";
    navbarContent4_2.style.display = "none";
    navbarContent4_3.style.display = "none";
    navbarContent4_4.style.display = "none";
  };
}

if (document.getElementById("navbarButton4_2")) {
  navbarButton4_2.onclick = function () {
    navbarButton4_1.style.color = config.colorNavBarButton;
    navbarButton4_2.style.color = config.colorNavBarButtonActive;
    navbarButton4_3.style.color = config.colorNavBarButton;
    navbarButton4_4.style.color = config.colorNavBarButton;
    navbarContent4_1.style.display = "none";
    navbarContent4_2.style.display = "block";
    navbarContent4_3.style.display = "none";
    navbarContent4_4.style.display = "none";
  };
}

if (document.getElementById("navbarButton4_3")) {
  navbarButton4_3.onclick = function () {
    navbarButton4_1.style.color = config.colorNavBarButton;
    navbarButton4_2.style.color = config.colorNavBarButton;
    navbarButton4_3.style.color = config.colorNavBarButtonActive;
    navbarButton4_4.style.color = config.colorNavBarButton;
    navbarContent4_1.style.display = "none";
    navbarContent4_2.style.display = "none";
    navbarContent4_3.style.display = "block";
    navbarContent4_4.style.display = "none";
  };
}

if (document.getElementById("navbarButton4_4")) {
  navbarButton4_4.onclick = function () {
    navbarButton4_1.style.color = config.colorNavBarButton;
    navbarButton4_2.style.color = config.colorNavBarButton;
    navbarButton4_3.style.color = config.colorNavBarButton;
    navbarButton4_4.style.color = config.colorNavBarButtonActive;
    navbarContent4_1.style.display = "none";
    navbarContent4_2.style.display = "none";
    navbarContent4_3.style.display = "none";
    navbarContent4_4.style.display = "block";
  };
}

/* Navigation bar 3 */
/******************************************************************************************/
if (document.getElementById("navbarButton3_1")) {
  navbarButton3_1.onclick = function () {
    navbarButton3_1.style.color = config.colorNavBarButtonActive;
    navbarButton3_2.style.color = config.colorNavBarButton;
    navbarButton3_3.style.color = config.colorNavBarButton;
    navbarContent3_1.style.display = "block";
    navbarContent3_2.style.display = "none";
    navbarContent3_3.style.display = "none";
  };
}

if (document.getElementById("navbarButton3_2")) {
  navbarButton3_2.onclick = function () {
    navbarButton3_1.style.color = config.colorNavBarButton;
    navbarButton3_2.style.color = config.colorNavBarButtonActive;
    navbarButton3_3.style.color = config.colorNavBarButton;
    navbarContent3_1.style.display = "none";
    navbarContent3_2.style.display = "block";
    navbarContent3_3.style.display = "none";
  };
}

if (document.getElementById("navbarButton3_3")) {
  navbarButton3_3.onclick = function () {
    navbarButton3_1.style.color = config.colorNavBarButton;
    navbarButton3_2.style.color = config.colorNavBarButton;
    navbarButton3_3.style.color = config.colorNavBarButtonActive;
    navbarContent3_1.style.display = "none";
    navbarContent3_2.style.display = "none";
    navbarContent3_3.style.display = "block";
  };
}

/* Navigation bar 2 */
/******************************************************************************************/
if (document.getElementById("navbarButton2_1")) {
  navbarButton2_1.onclick = function () {
    navbarButton2_1.style.color = config.colorNavBarButtonActive;
    navbarButton2_2.style.color = config.colorNavBarButton;
    navbarContent2_1.style.display = "block";
    navbarContent2_2.style.display = "none";
  };
}

if (document.getElementById("navbarButton2_2")) {
  navbarButton2_2.onclick = function () {
    navbarButton2_1.style.color = config.colorNavBarButton;
    navbarButton2_2.style.color = config.colorNavBarButtonActive;
    navbarContent2_1.style.display = "none";
    navbarContent2_2.style.display = "block";
  };
}

/*  */
/******************************************************************************************/
