FROM node:10
LABEL "maintainer"="Micah Kramer <beta.grumm@gmail.com>"
# add local user for security
RUN groupadd -r serviceGroup \
  && useradd -m -r -g serviceGroup serviceUser
USER serviceUser
# copy local files into container, set working directory and user
RUN mkdir -p /home/serviceUser/app
WORKDIR /home/serviceUser/app
COPY . /home/serviceUser/app
RUN rm -rf node_modules && npm install --quiet
EXPOSE 3000
