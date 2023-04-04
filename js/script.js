// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
  let farenheit = parseFloat(document.getElementById("f-value").value);
  
  //This is the math for the formula
  let celsius = 5 / 9 * (farenheit - 32)
  let celsiusRounded = celsius.toFixed(2)
  
  //The Result
  document.getElementById('celsius-info').innerHTML = "The temperature in Celsius is " + (celsiusRounded) + "°F."
}