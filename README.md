# Name: TWiO

## Project Overview

- TWiO is a small-scale, local area entertainment and activity finding app (think local festivals/fairs, sporting events, live music, farmer markets, art shows, etc.). Instead of relying on word-of-mouth and having to sign up for multiple news letters, facebook groups, mailing lists, etc., the user will be able to find local events based on their location and their user preferences. 

  - What will utimately set this app apart is its map function: a user, who may just be traveling through an area, will be able to see what's going on around them, and filter those events based on personal preferences. 
  
  - Libraries I will be using:			
      - Geopanda
      - Arrow (Date / Time)
      - Beautiful Soup (HTML parsing / web scraping)
  - APIs, etc.
      - Oregon Tourism Info System (OTIS)
      - Songkick (live music)
      - ActiveAccess (Parks & Rec, local sports, fitness, classes, outdoor adventure)
      - Seatgeek

## Features

- List events according to location
  - Make API calls based on location data (coordinates or city and county name)
  - Store events based on those locations
- Populate events on a map
  - Use stored data from API calls to create GIS data layers / shape files
  - Filter map events according to user-provided location
  - Display events on the map relative to user's location
- Populate events on a calendar
  - Make API calls based on dates, week days, and times
  - Store the events based on these categories
  - Create filter events based on these categories
  - For reoccurring events, set automatic updates
- List events according to event types
  - Make API calls based on type of events
  - Store events according to their type
- List events according to user preferences (kid-friendly, dog-friendly, buy tickets in advance, etc.)
  - Make keyword-related API calls and/or use html/web scraper
  - Create categories according to the most common user preferences
  - Store data according to those categories
  - Create key-word filter
- User accounts
  - Store user's preferences
  - Create filter based on those preferences
  - Store user's search results
  - Store user's comments / reviews / local wisdom as posts
    - Link to both user and event
    - Allow posts to be flagged
- User-populated events
  - Provide guidelines for posting events
  - Create event form
  - Assign user event modulators
    - Enable modulators to delete flagged posts

## Data Scheme

- Geolocational data: stored in .cvs or .xml for ingestion into map data layers / shape files
- Event data: 
  - API data as either json or .xml
  - Convert / save to database (like DB Browser)
- User data: store in database (like DB Browser)
- Date / Time-related data: store in Google calendar

## Schedule

### Week 1 
- Make API calls based on location and month
- Data Management: Create formatting and database to store API results
  
***MVP 1: List events according to location and month on the app***
  
- Create location and month keyword filter functions

***MVP 2: User can search for events according to location and/or month***
  
### Week 2:
- Create map for application (Geopanda library)
- Generate GIS layers based on API data
- Create event-type symbology
- Basic site layout

***MVP 3: Populate events on map***

### Week 3:
- Synchronize date / time data with events
- Autopopulate function for reoccurring events
- Create filter based on date / time
- Basic styling
  
***MVP 4: Populate calendar with events***

- Make API calls based on keywords
- Use API data to inform user preferences
- Incorporate keyword search in map data / layers

***MVP 5: Search / filter function based on keywords (list, map, and calendar)***

### Week 4:
- Create user accounts
- Create user database to store user info
- Store user searches
- Store user preferences

***MVP 6: User can log in and view search history, results, and user preferences***

### Week 5:
- Enable users to leave comments and reviews
- Link reviews / local tips to events
- Create the ablity to flag and delete posts
  - Site guidelines
- Focus on styling / layout to enhance user experience

***MVP 7: Users can view other users'comments and reviews and flag them***

### Week 6:
- Provide guidelines for posting events
- Create event form for users and organizations to post events

***MVP 8: Users can add their own events and make them searchable***

### Week 7:
- Incorporate data from html scraping (Beautiful Soup)
  -Town and county-specific events where APIs do not exist

***MVP 9: Local events are indexable and searchable***

### Week 8:
- Incorporate user-location functionality into map-based searches
- Final styling

***MVP 10: User can find events via multiple methods related either to their actual location or a location of their choosing***
  
