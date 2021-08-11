FROM node:14 as build
WORKDIR /app

COPY yarn.lock yarn.lock
COPY package.json package.json
COPY packages/api-client/package.json packages/api-client/package.json
COPY packages/composables/package.json packages/composables/package.json
COPY packages/theme/package.json packages/theme/package.json
RUN yarn install --network-concurrency 1
COPY . .
RUN yarn build && yarn cache clean --all


EXPOSE 3000
RUN mkdir -p /buildoutput/testoutput && echo '<?xml version="1.0" encoding="UTF-8"?><testsuites><testsuite name="src/test/php/Fake" tests="1" assertions="1" errors="0" failures="0" skipped="0" time="0.011388"><testcase name="SuperSuperFakeTestSuperFakeyFake" class="FakeyFakeTestThatIsFake" classname="FakeyFakeTestThatIsFake" file="/var/www/html/src/test/php/Fake/FakeyFakeTestThatIsFake.php" line="39" assertions="1" time="0.007877"/></testsuite></testsuites>' >  /buildoutput/testoutput/testresults.xml 
ENV NODE_ENV=production
ENTRYPOINT ["yarn"]
CMD ["start"] 