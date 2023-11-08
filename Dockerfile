# Use an Nginx image based on Alpine
FROM nginx:alpine3.18-slim

# Copy your content to the default Nginx serve directory
COPY css /usr/share/nginx/html/
COPY img /usr/share/nginx/html/
COPY json /usr/share/nginx/html/
COPY script /usr/share/nginx/html/
COPY index.html /usr/share/nginx/html/
