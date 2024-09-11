# Page Info and Statistics Script

This script collects and provides detailed information about the current web page, including statistics on elements, scripts, links, images, and more. It can also export this information as a JSON file if required.

## Functionality

- **Page Information**: Gathers details such as the URL, title, character set, referrer, and viewport dimensions.
- **Element Count**: Counts the total number of elements and organizes them by tag name.
- **Scripts**: Lists all scripts on the page, including their source, type, and attributes.
- **Links**: Extracts all links, including their href, text, and target attributes.
- **Images**: Collects information on images, including their source, alt text, width, and height.
- **Stylesheets**: Provides details on all linked stylesheets, including their href and media attributes.
- **Meta Tags**: Retrieves meta tags and their content.
- **Element Sizes**: Measures and lists the size and position of each element on the page.
- **Export**: Optionally, downloads the collected information as a JSON file if the `exportToFile` variable is set to `true`.

## How to Use

1. Open the web page you want to analyze in your browser.
2. Open the browser's Developer Tools (usually accessible by pressing `F12` or `Ctrl+Shift+I`).
3. Go to the Console tab.
4. Copy and paste the entire script into the console and press Enter.
5. If `exportToFile` is set to `true`, a JSON file named `page_info.json` will be downloaded automatically. Otherwise, the information will be displayed in the console.

## Example

```javascript
// Set export = true to download the output as a JSON file, false to only log it to the console
const exportToFile = true;

(function () {
    // Script content...
})();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
