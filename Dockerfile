# Use an Nginx image based on Alpine
FROM nginx:alpine3.18-slim

WORKDIR /usr/share/nginx/html

# Remove the default nginx static assets
RUN rm -rf ./*

# Copy your content to the default Nginx serve directory
ADD css ./css
ADD img ./img
ADD json ./json
ADD script ./script
ADD index.html .


# Start Nginx and keep the process from running in the background
CMD ["nginx", "-g", "daemon off;"]