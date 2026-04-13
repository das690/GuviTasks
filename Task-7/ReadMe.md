# React Movie Searching App

A full-featured movie search application built with React that integrates with the OMDB API. Users can search for movies, filter by type (movies, series, episodes), view paginated results, and click on individual titles to see comprehensive details.

## Features

- **OMDB API Integration**: Live data fetching for searches and detailed views.
- **Search & Filter**: Keyword search bar coupled with an API-level type filter (bypassing local array `.filter()` as requested).
- **Pagination**: Handles large search results directly via the OMDB API's pagination endpoints.
- **Detailed View**: Dedicated pages for each movie showcasing plot, cast, ratings, and larger posters.
- **Responsive Design**: Built entirely with Tailwind CSS to ensure a great experience on mobile and desktop.
- **Error Handling**: Graceful fallback UI for network errors or "No Results Found" scenarios.
- **Routing**: Client-side navigation handled via `react-router-dom`.

## Tech Stack

- **Frontend**: React.js (Hooks, Functional Components)
- **Routing**: React Router (v6)
- **Styling**: Tailwind CSS / HTML / CSS
- **Network Requests**: Axios / JavaScript Promises

## Installation & Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd movie-searching-app