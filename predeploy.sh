# predeploy.sh

# remove the version hash from our base javascript file for a stable URL
find build -type f -name "*.html" -exec sed -i 's/main\.[^.]*\.js/main.js/g' {} +
