# Web102 Project 4 - Random BOBA TEA FLAVOR

Submitted by: Hope Kiarie

Users can come here to find interesting boba drink flavors to try next time they are feeling something sweet!

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results


The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed  results from this session
- [x] A dedicated section of the application displays all the previous images/attributes seen before
- [x] Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

- [x] **Created my own API**

## Video Walkthrough

Here's a walkthrough of both required & optional features: 

<img width="718" height="722" alt="BOBAGIF" src="https://github.com/user-attachments/assets/54825f5b-36cf-4155-a408-167735893988" />


## Notes

For my idea of finding cool boba drink orders, I realized that there wasn't any dedicated bobaAPI, so I had to build my own for the project which took some time (gathering the images and inputting the format). I used the fetch request via .json because of this. I also still suffer for coder's block when it comes to starting from stratch (mainly throwing my ideas into a plan and later into executable code -- I tried using concepts related to the lab but some fit differently because the project used different specifications -- like not having inputs but using attributes instead). Maybe it's just practice until it's flows naturally but I found thinking by components and later how the user will interact with the website to map out my ideas better. I understand better how .filter(), .map(), and .includes() are used when dealing with a API (instead of the actual "hard-code" arrays). Still getting used to useState but it's getting better! I could fix some bug issues but I'm suprised I was able to get the required and optional done.  

## License

    Copyright 2026 Hope Kiarie 

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
