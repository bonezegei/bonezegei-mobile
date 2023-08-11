/*Bonezegei Mobile Template
  Author: Jofel Batutay (Bonezegei)
  Date: August 2023 
*/

var colorNavBarButtonActive = "#000";
var colorNavBarButton = "#888";

navbarButton4_1.onclick = function () {
  navbarButton4_1.style.color = colorNavBarButtonActive;
  navbarButton4_2.style.color = colorNavBarButton;
  navbarButton4_3.style.color = colorNavBarButton;
  navbarButton4_4.style.color = colorNavBarButton;
  navbarContent4_1.style.display = "block";
  navbarContent4_2.style.display = "none";
  navbarContent4_3.style.display = "none";
  navbarContent4_4.style.display = "none";
};

navbarButton4_2.onclick = function () {
  navbarButton4_1.style.color = colorNavBarButton;
  navbarButton4_2.style.color = colorNavBarButtonActive;
  navbarButton4_3.style.color = colorNavBarButton;
  navbarButton4_4.style.color = colorNavBarButton;
  navbarContent4_1.style.display = "none";
  navbarContent4_2.style.display = "block";
  navbarContent4_3.style.display = "none";
  navbarContent4_4.style.display = "none";
};

navbarButton4_3.onclick = function () {
  navbarButton4_1.style.color = colorNavBarButton;
  navbarButton4_2.style.color = colorNavBarButton;
  navbarButton4_3.style.color = colorNavBarButtonActive;
  navbarButton4_4.style.color = colorNavBarButton;
  navbarContent4_1.style.display = "none";
  navbarContent4_2.style.display = "none";
  navbarContent4_3.style.display = "block";
  navbarContent4_4.style.display = "none";
};

navbarButton4_4.onclick = function () {
  navbarButton4_1.style.color = colorNavBarButton;
  navbarButton4_2.style.color = colorNavBarButton;
  navbarButton4_3.style.color = colorNavBarButton;
  navbarButton4_4.style.color = colorNavBarButtonActive;
  navbarContent4_1.style.display = "none";
  navbarContent4_2.style.display = "none";
  navbarContent4_3.style.display = "none";
  navbarContent4_4.style.display = "block";
};

