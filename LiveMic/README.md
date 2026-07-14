# Web102 Project 6 - *LiveMic DashBoard & Details*

Submitted by: **Hope Kiarie**

**In the new update, users can choose the concert they are interested in and see more details before deciding to buy tickets to the concert. There are charts to show where most concerts tend to be located and the top genres shown on the website.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
- [x] Clicking on an item in the dashboard list navigates to a detail view for that item
- [x] Detail view includes extra information about the item not included in the dashboard view
- [x] The same sidebar is displayed in detail view as in dashboard view
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
- [x] At least two charts should be incorporated into the dashboard view of the site
- [x] Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [ ] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [ ] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [x] Added a "back to dashboard" link
* [x] Made better component & page ogranization with App.jsx
* [x] Filtered out the "other" and "undefined" genre from the dataset

## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://github.com/user-attachments/assets/1dcef078-3a7a-4b15-ab01-68df01b2e7df



## Notes
The organization of components used in this project was getting confusing last time, so I decided to make some more folders and use Routers to simplify the amount of code to write and edit. This was the bulk of the projct, but it helped me understand how multi-page websites work and how simple App.jsx looks once every component & page is stored in its own compartment and is "pulled" once the user wants to locate something instead of everything in the App. It also made css styling a little bit easier since the layouts were not crossed as much compared to Project 5. 

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
