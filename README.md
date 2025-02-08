# FullYearCalendar

FullYearCalendar is a React component that displays a full-year calendar with the ability to add, update, and delete schedules for specific dates.

## 🚀 Demo

[Live Demo](https://d2dewcd6bifoh8.cloudfront.net)

## 📦 Installation

You can install FullYearCalendar as an NPM package:

```sh
npm install full-year-calendar
```
````

## 🚀 Usage

Import the `FullYearCalendar` component and use it in your React app:

```tsx
import React, { useState } from "react";
import FullYearCalendar from "full-year-calendar";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <h1>Full Year Calendar</h1>
      <FullYearCalendar />
    </div>
  );
};

export default App;
```

## 🎯 Features

- 📅 Display a full-year calendar
- 🔄 Navigate through years and months
- 🎨 Highlight current date, month, and days with different colors
- 📆 Display days of the week

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or create pull requests.

## 📄 License

This project is licensed under the MIT License.
