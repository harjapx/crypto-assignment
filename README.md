# crypto-assignment
Backend Dev Role - 2nd Stage - FomoFactory

# Stock and Crypto Tracker

A mini-website to collect and display real-time price data for stocks and cryptocurrencies using Next.js, TypeScript, Redux, Express, and MongoDB.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [Testing Endpoints](#testing-endpoints)
- [Folder Structure](#folder-structure)
- [License](#license)

## Prerequisites

- Node.js (v18 or later)
- MongoDB
- A valid CoinGecko API key (optional for some APIs)

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/stock-crypto-tracker.git
cd stock-crypto-tracker

## Install Backend Dependencies
cd backend
npm install

## Install Frontend Dependencies
cd ../frontend
npm install

## Start both the servers
Open Your Browser:

Navigate to http://localhost:3000 to view the frontend application.


## Testing Endpoints
Test Cryptocurrency Endpoint with cURL
curl -X POST http://localhost:3000/fetch-crypto \
     -H "Content-Type: application/json" \
     -d '{"symbols": ["bitcoin", "ethereum", "litecoin", "ripple"]}'


Test Cryptocurrency Endpoint with Postman
Create a New POST Request:

URL: http://localhost:3000/fetch-crypto
Headers: Content-Type: application/json
Body: {
  "symbols": ["bitcoin", "ethereum", "dogecoin", "litecoin", "ripple"]
}
