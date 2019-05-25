FROM node:lts

#Creates Working App
WORKDIR /usr/src/app
RUN npm i -g npm yarn
#copy's package.json file and installs deps
COPY package.json ./
RUN npm install --quiet

#bundles source
COPY . .

#starts Project

CMD ["yarn", "start"]
