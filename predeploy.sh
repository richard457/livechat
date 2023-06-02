# predeploy.sh

# remove the version hash from our base javascript file for a stable URL
find build -type f -name "*.html" -exec sed -i 's/main\.[^.]*\.js/main.js/g' {} +

echo "hello world"
# https://www.bitovi.com/blog/how-to-create-a-web-component-with-create-react-app