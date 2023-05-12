# Web Development Project 4 - *Cat Information*

Submitted by: **Amanda Coleman**

This web app: **will show you cat photos with their species and origin as well as a brief description of that species**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
    - Their are four being displayed: Image, name, origin, description
- [x] **Only one item/API call is viewable at a time**
    - Only one set of information is being shown at a time
- [x] **API calls appear random to the user**
    - each time the user selects the click for new image button a new API call is retrieved
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
    - as shone in the gif when an attribute is selected it will no longer appear

The following **optional** features are implemented:

- [ ] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![My Video Walk Through](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmJiMmE1OTY0MzA4MWFhMThiMDU3M2Q2N2I1ODA5M2ZhZjg2Y2I0NCZjdD1n/N0RYMESzXfMqROPmj5/giphy.gif)

![Second Video Walkthrough](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODE1NjQ0Yjg2ZGY2ODhhYzQwMjM0ZDQxMDE2NmM0NWQ5YzY1MzE5YSZjdD1n/STrI4d7gXpXPzXGFMH/giphy.gif)


## Notes

Using fetch I bring over an array from the API and take the information I need to display. There are four data points that change on every click of the new image button: Image, Origin, Name, Description. When a user clicks on either the Name or Origin of the cat that information will then be added to the bans list. To change the ban simply click on the new name to ban and the old one will be replaced. The same method will work for the cat origin. In order to clear the bans list the user will need to select the clear bans button.

## License

    Copyright [2023] [Amanda Coleman]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
