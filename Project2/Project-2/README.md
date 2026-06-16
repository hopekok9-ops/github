# WEB102 Project 2 - Language FlashCard Set: Feelings in Español

Submitted by: Hope Kiarie

I created a Spanish flashcard set for language learners who want to practice and familiarize how to express their feelings in Spanish. 

Time spent: 6 hours 

## Required Features

The following **required** functionality is completed:


  - [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)

  - [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time

  - [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
      
  - [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

  - [x] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
  - [ ] Cards have different visual styles such as color based on their category

## Video Walkthrough

Here's a GIF of implemented required & optional features:

<img width="718" height="722" alt="LangCardGIF" src="https://github.com/user-attachments/assets/e27d1d17-bdca-4acb-bcf2-4f125e0c4532" />



<!-- Replace this with whatever GIF tool you used! -->


## Notes

This project helped me to practice using useState when it comes to flashcards. At first, I wasn't sure how the components would overlap between isFlipped, to the actual FlashCard, to the actual Webpage (LangWeb) but Copilot explained that useState can use the boolean (true/false) state to front or back and connects with onClick to make sure the user can click the flashcard to flip the card. The animation was also tricky to make but the resource was helpful. I think there were other "complex" componenets added in that made things seem more complicated (like the addition of arrays, adding in the "shuffle option for the NextCard function, adding a currentCard const, etc.) Though, I'm getting closer to understanding React as the arrays, for loop, math.random() were similar to Java. 

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
    limitations under the License
