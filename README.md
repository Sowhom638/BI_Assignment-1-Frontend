# Meetup App

A dynamic event discovery platform where users can browse, search, and explore upcoming meetups and events. Whether online or in-person, the app provides rich event details—including schedules, speakers, pricing, venue info, and tags—to help attendees make informed decisions.

Built with **React frontend**, **Express/Node backend**, and **MongoDB database**.

---

## Demo Link
[Live Demo](https://bi-assignment-1-meetup-app.vercel.app/)

---

## Quick Start
```
git clone https://github.com/Sowhom638/BI_Assignment-1-Frontend
cd <Your-Repo>
npm install
npm run dev
```
---

## Technologies
- React JS
- React Router Dom
- Bootstrap
- Node JS
- Express JS
- MongoDB

---
## Demo Video
Watch a walkthrough of all the major features in a demo vide0;
[Google Drive Link](https://drive.google.com/file/d/1X4EBidlBIuW2vD9ls4UUVc-hPWK5OPZy/view?usp=sharing)

---

## Features

**Event Listings**
- Clean, responsive grid layout showcasing all upcoming events.
- Each event card displays:
    - Event Title
    - Date & Time
    - Event Type: Clearly labeled as Online, Offline
    - Thumbnail/Image: Visual preview to enhance engagement.
- Consistent design language for a cohesive and intuitive browsing experience.

**Event Search and Filtering**
- Search Bar: Search events by title or tags (e.g., ```"Workshop"```, ```"Lecture"```, ```"Hackathon"```, etc.).
- Type Filter Dropdown:
    - Options: ```Online```, ```Offline``` and ```Both```
    - Default view: Both (shows all events)
- Real-time filtering updates the event list as users type or change filters.

**Event Details Page**
- Dedicated page for each event with comprehensive information:
    - Event Topic & Full Description
    - Session Timings (start/end time, agenda if available)
    - Speakers or Presenters (with names and brief bios if provided)
    - Pricing: Clearly displayed for paid events; “Free” label for complimentary events
    - Venue Details:
        - For Offline: Full address, map link (optional), and venue name
        - For Online: Platform (e.g., Zoom, Google Meet) and access instructions
    - Additional Attendee Info:
        - Dress code
        - Age restrictions
        - What to bring
        - Accessibility notes
    - Tags: Displayed as interactive chips (e.g., ```"Workshop"```, ```"Lecture"```, ```"Hackathon"```, etc.)

**Create New Meeting**
- A page for creating new meeting
- User have to enter all relevant details:
    - Title (String)
    - Host Name (String)
    - Meeting Details (String)
    - Tags (Multiple Select Dropdowmn)
    - Start Time & End Time (Date)
    - Address (String)
    - Type (Dropdown - Options: ```Online```, ```Offline``` and ```Both```)
    - Price (Number)
    - Speaker Details
        - Speaker Name
        - Speaker Image Url
    - Dress Code
    - Age Restriction
    - Thumbnail Image Url
- A button for submitting the details

---

## API References

**POST /meets**
Create a new meet
Sample Response
```
{ _id, title, host, details, tags, started, ended, address, type, price, speakers, dressCode, ageRestrictions, coverImage, createdAt, updatedAt }
```

**GET /meets**
Get all meets
Sample Response
```
[
{ _id, title, host, details, tags, started, ended, address, type, price, speakers, dressCode, ageRestrictions, coverImage, createdAt, updatedAt },
{ _id, title, host, details, tags, started, ended, address, type, price, speakers, dressCode, ageRestrictions, coverImage, createdAt, updatedAt }, ... 
]
```

**GET /meets/:meetId**
Get meet by it's id
Sample Response
```
{ _id, title, host, details, tags, started, ended, address, type, price, speakers, dressCode, ageRestrictions, coverImage, createdAt, updatedAt }
```

**POST /meets/:meetId**
Update meet by it's id
Sample Response
```
{ _id, title, host, details, tags, started, ended, address, type, price, speakers, dressCode, ageRestrictions, coverImage, createdAt, updatedAt }
```

**DELETE /meets/:meetId**
Delete meet by it's id
Sample Response
```
{ _id, title, host, details, tags, started, ended, address, type, price, speakers, dressCode, ageRestrictions, coverImage, createdAt, updatedAt }
```

---

## Contact
for bugs informing or feature requesting , reach out to ghoshsowhom638@gmail.com