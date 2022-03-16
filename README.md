# SearchAPI Project

## What is the purpose of this project? 
This is a project, which was given as a home task from a company that I applied to for an internship position as a React developer.

## What were the instructions?
**Layout**
1. [x] Have a Google Login Button
2. [x] Show the first and last name of the associated account in the header section
3. [x] ***(Optional)*** Have a signout button in the header section
4. [x] Have a search input field in the main section
5. [x] Have a container beneath the input field, which contains up to 16 results (in a 4 by 4 grid)
6. [x] Have a card template for each result, which has the following layout:
   - [x] The image found on the top of the card
   - [x] The title of the image beneath it
   - [x] The description beneath the title
   - [x] ***(Optional)*** The author beneath the description with a link to their profile

**Functionality**
1. [x] Google Login Button
2. [x] Results are shown on every keystroke in the search input field

## What framework/libraries did you use?
1. ReactJS
2. CSS Modules
3. Pexels API
4. Firebase Authentication

## Is the app responsive?
The app is configured to be responsive to a few breakpoints using media queries.

## What resources did you use?
- [Pexels API](https://www.pexels.com/api/documentation/?language=javascript#photos-search__parameters__orientation)
- [Visme Website Color Schemes](https://visme.co/blog/website-color-schemes/)

## Limitations
1. The home task instructions specifically talk about querying results, whose title or description match the search input field value. However, the pictures in the Pexels database have only a title and no description.
2. The results shown are having some sort of 'tags' or the Pexels API filters images from a match of the search input field or a synonym of the value provided. For instance, typing 'cat' in the search input field shows indeed images with cats but some results may not have 'cat' word in the title but perhaps 'kitten', which is a synonym for the given searched word.
3. The home task instructions specifically talk about querying results on every keystroke in the search input field. However, the query is limited in such a way that it queries for results only after half a second after no other keystroke was triggered. This was configured in that way in order to make up for the next limitation point.
4. Pexels API has a limit of 200 requests per hour and 200,000 requests per month.


