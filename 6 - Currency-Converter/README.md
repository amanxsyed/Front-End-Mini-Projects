
## Currency Converter
The Currency Converter is a web application that allows users to convert currency values from one currency to another in real-time. The app fetches the latest exchange rates using the ExchangeRate API and displays the conversion results based on the input amount.

## Live Demo
[Currency Converter Live Demo](https://currency-converteer.netlify.app/)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Real-time currency conversion using the ExchangeRate API.
- User-friendly interface with intuitive input fields.
- Dynamic loading of country flags based on selected currencies.
- Option to switch the currencies with a single click.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- [ExchangeRate API](https://www.exchangerate-api.com/)
- [Flags API](https://flagsapi.com/)
- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css)

## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/umarabdullah-991/Currency-Converter.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd currency-converter
   ```

3. **Open `index.html` in your preferred web browser:**
   ```bash
   open index.html
   ```

## Usage
1. **Enter Amount:** Input the amount you wish to convert.
2. **Select Currencies:** Choose the currencies from the dropdown lists. The flags will update automatically.
3. **Convert:** Click the "Check Exchange Rate" button to get the conversion rate.
4. **Switch Currencies:** Click the exchange icon to swap the selected currencies.

## Code Structure
### HTML (`index.html`)
Defines the structure of the web application including input fields, dropdowns, and buttons.

### CSS (`style.css`)
Handles the styling of the application to ensure a responsive and visually appealing interface.

### JavaScript (`app.js`)
Contains the logic for:
- Fetching exchange rates.
- Handling currency and flag updates.
- Managing user interactions and form submissions.

**Contributors:**
- [Umar Abdullah](<https://github.com/umarabdullah-991>)
- [Syed Aman Shah](<https://github.com/amanxsyed>)

### Additional Files
- `countries.js`: Contains country and currency code mappings.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any queries or feedback, please contact:
- **Email:** [umarabdullah.work@gmail.com](mailto:umarabdullah.work@gmail.com) 

---
