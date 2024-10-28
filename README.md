# ACONEWS

## Introduction

ACONEWS is a news aggregator app built using **Next.js**, **React**, and **Tailwind CSS**. It provides a user-friendly interface for accessing the latest news articles from various sources, including GNews.io, The New York Times, and The Guardian. The app is designed to be responsive and accessible, ensuring a seamless user experience across different devices.

## Features

- Fetches news articles from the GNews.io API
- Displays articles in a grid layout
- Provides search functionality for finding specific articles
- Uses Tailwind CSS for styling
- Optimized for mobile and desktop devices

## Installation

To get started with ACONEWS, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/badhon252/ACONEWS.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Web App Structure

### Navigation Bar

- **Explore**: Users can explore and navigate all the categories we offer.
- **About**: Users can learn more about our agenda, case studies, and useful links for making connections.
- **Contact**: Users can reach out to us for any inquiries or collaborations.
- **Search**: Users can search for news and navigate across the news categories.

### Hero Section

A useful slider with an interactive carousel, featuring navigation buttons to learn more about each news article.

### Categories

- All articles are displayed in card format, maintaining a consistent pattern:
  - An image
  - Title
  - Published time
  - Publisher's name
  - A link for continuing reading (which could be a button or an article link).
- A "See All" button is available to explore more news articles in each category.

### Category Pages

- Users can read news in an interactive carousel to explore all the articles in the selected category.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
