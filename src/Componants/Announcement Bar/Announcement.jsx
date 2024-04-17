import React from 'react'
import './Announcement.css'

const Announcement = () => {

  let arr = ["WELCOME TO BLUEFLY: Luxury Brands and Discounted prices", " Buy somthing"];
  let Abar = document.getElementById("announcemtBar");

  function showData(){
    Abar.innerHTML = `<h3>${arr.currText}</h3>`
  }

  let intervalId;
  let currText = 0;

  function startSlideshow() {
    intervalId = setInterval(() => {
        currText++;
        if (currText >= arr.length) {
            currText = 0;
        }else if (currText < 0){
            currText = arr.length - 1;
        }
        showData();
    }, 1000);
}
startSlideshow(currText) 



  return (
    <div>
        <div id='announcemtBar'></div>
    </div>
  );
}

export default Announcement