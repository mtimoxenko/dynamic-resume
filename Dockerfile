# Use an Nginx image based on Alpine
FROM nginx:alpine3.18-slim

WORKDIR /usr/share/nginx/html

# Remove the default nginx static assets
RUN rm -rf ./*

# Copy the content to the default Nginx serve directory
COPY css/ css/
COPY img/ img/
COPY script/ script/
COPY index.html .


# fine-grained caching control
COPY json/certification.json json/
COPY json/contact.json json/
COPY json/education.json json/
COPY json/language.json json/
COPY json/reference.json json/
COPY json/skill.json json/
COPY json/expertise.json json/
COPY json/profile.json json/
COPY json/project.json json/


# Start Nginx and keep the process from running in the background
CMD ["nginx", "-g", "daemon off;"]