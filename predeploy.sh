# predeploy.sh

# remove the version hash from our base javascript file for a stable URL
find build/static/js -name "main.*.js" -exec mv '{}' build/static/js/main.js \;

# https://www.bitovi.com/blog/how-to-create-a-web-component-with-create-react-app