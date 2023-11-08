# Use an Nginx image based on Alpine
FROM nginx:alpine3.18-slim

# Copy your content to the default Nginx serve directory
ADD css /usr/share/nginx/html/css/
ADD img /usr/share/nginx/html/img/
ADD json /usr/share/nginx/html/json/
ADD script /usr/share/nginx/html/script/
ADD index.html /usr/share/nginx/html/
