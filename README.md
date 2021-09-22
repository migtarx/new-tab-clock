

# New Tab Extention

Chrome extention that adds a new custom "new-tab" window with a 24 hours clock and configurable welcome message depending on day time. 

![chrome-ext-samp](https://user-images.githubusercontent.com/63917673/134425091-2fb8fc56-8ef8-4680-9db0-25b681131be1.PNG)

## Installation
1. Clone the repo
   ```sh
   git clone https://github.com/migtarx/new-tab-clock.git
   ``` 
   O just download the extention from releases section.
2. Unzip and save the folder in a place where it cannot be deleted (if you delete it, the extention will disappear from your chrome browser).
3. Type in the top URL search bar the following line and press enter.
    ```sh
   chrome://extensions
   ```
4. Enable "Developer Mode" by using the switch located in the top right corner.
5. Press in "Load unpacked" button and in the emergent window select the folder where you have the extention folder saved (not the parent directory, the extention where all the files are in). Press in "Select Folder". 
6. Done!

## Usage

This extention at the moment is so simple. The only configurable option is the name.

Go to config.json file and add into the "name" property field your name as it's shown bellow

```json
{
    "name": "Miguel"
}
```
And done! You have your "new-tab" chrome extention ready for your daily uses!

## TODO
* Add support to other browsers.
* Add configurable option for showing seconds in the clock.
* Optimize JS fetch code for reading the config.json file.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
