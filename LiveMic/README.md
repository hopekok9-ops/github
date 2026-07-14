# Web102 Project 5 - LiveMic Dashboard

**Submitted by:** Hope Kiarie

This dashboard shows upcoming concert dates for music fans to buy their tickets and enjoy watching their favorite artists live near their city! In this project I used the Ticketmaster API to load concert data for users to glance before going to the website.

8 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
- [x] The dashboard should display at least 10 unique items, one per row
- [x] The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] The search bar **correctly** filters items in the list, only displaying items matching the search query

- [x] The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
- [x] The filter restricts items in the list using a **different attribute** than the search bar
- [x] The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
- [x] The dashboard list dynamically updates as the user adjusts the filter


The following **optional** features are implemented:
- [x] Multiple filters can be applied simultaneously
- [ ] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [ ] The user can enter specific bounds for filter values
- [x] **additionally** add a "no results" screen when no data can be found 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img width="1434" height="722" alt="LiveMicGIF" src="https://github.com/user-attachments/assets/36fdd928-b45b-4bbe-89af-eafdb54f3a12" />


## Notes
This was my first time using a big API and had some syncing issues but learned that every api file must be ".env" and that the link has to sync with the info the API has. This project called for more components (dashStats, concerdCard, concerdList, filterBar, header, searchBar, and the api file) which got a little complicated in terms of data flow and where props and states should be placed. Nevertheless, I learned the importance of App.jsx as the parent component when adding states to connect child components (especially in seperate files) in a website. 


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
