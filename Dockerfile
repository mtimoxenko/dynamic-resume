# Use an Nginx image based on Alpine
FROM nginx:alpine3.18-slim

# Copy your content to the default Nginx serve directory
COPY css /usr/share/nginx/html/css/
COPY img /usr/share/nginx/html/img/
COPY json /usr/share/nginx/html/json/
COPY script /usr/share/nginx/html/script/
COPY index.html /usr/share/nginx/html/
