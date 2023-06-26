# predeploy.sh

# remove the version hash from our base javascript file for a stable URL
find build -type f -name "*.html" -exec sed -i 's/main\.[a-zA-Z0-9]*\.js/main.js/g' {} +
