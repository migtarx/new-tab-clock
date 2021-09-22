

# New Tab Extention

Chrome extention that adds a new custom "new-tab" window with a 24 hours clock and configurable welcome message depending on day time. 

## Installation
1. Clone the repo
   ```sh
   git clone https://github.com/migtarx/new-tab-clock.git
   ``` 
   O just download the extention from releases section.
2. Unzip and save the folder in a place where it cannot be deleted (if you delete it, the extention will disappear from your chrome browser).
3. Write in url search top bar the following line:
    ```sh
   chrome://extensions
   ```
4. Enable "Developer Mode" by using the switch located in the top right corner.
5. Press in "Load unpacked" button and in the emergent window select the folder where you have the extention folder saved.
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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
