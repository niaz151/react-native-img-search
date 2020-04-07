# React Native Image Search

## Installation ##

1. Clone this repo by running ```git clone https://github.com/niaz151/react-native-img-search.git``` within your terminal 

2. Navigate to the project directory by running ```cd react-native-img-search``` and run ```yarn install``` ( if yarn is needed as a prerequisite install yarn )

3. Run the ```yarn start``` command while still in the project directory

4. Install Expo on your mobile device via App Store or Play Store

5. Make sure you're connected to the same Internet network as your computer

6. Use your mobile device camera to scan the QR code that pops up in your browser or terminal which in turn should open the Expo app with a running copy of this application

## Features ##

- Many implementations of React Hooks (Redux, React-Navigation) that lead to cleaner code and codeblocks separated by logic instead of lifecycle

- Image data is stored in such a way that displaying further data (ex: # of likes, # of downloads) is easily achievable

- Searchbar results appear in real-time as the user types

- App styling to responsive across various screen sizes (although optimized for Iphone X)

## Notes ##

- I would have used Snack.io to host this sample, however, the 'react-native-elements' package is not compatible with default package versions on Snack.io, and there persists an RNC View Error

- It is best practice to hide the API_KEY in an .env file but , for the purposes of this project and its functionality, I decided not to do so
