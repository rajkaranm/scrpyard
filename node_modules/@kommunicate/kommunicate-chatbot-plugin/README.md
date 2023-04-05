# kommunicate-chatbot-plugin
![npm](https://img.shields.io/npm/v/@kommunicate/kommunicate-chatbot-plugin?color=red)
> A npm plugin for kommunicates' chat widget.

## Install

```bash
npm i @kommunicate/kommunicate-chatbot-plugin
```

## Usage

In your index.js file,

1. Import the widget as Kommunicate.
2. Add ```Kommunicate.init("YOUR_APP_ID" , {...optionalSettings})``` outside ```ReactDOM.render()```
3. Replace YOUR_APP_ID with APP_ID provided to you by Kommunicate. You can get your APP_ID from [here](https://dashboard.kommunicate.io/settings/install)


```jsx
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("YOUR_APP_ID" , {...optionalSettings})

ReactDOM.render(
  ...
    <App />
  ...
  document.getElementById('root')
);
```
