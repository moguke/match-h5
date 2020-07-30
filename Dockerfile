FROM nginx
ADD nginx.conf /etc/nginx/nginx.conf
ADD demo/examples /usr/share/nginx/html
RUN chown nginx:nginx -R /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;"]
