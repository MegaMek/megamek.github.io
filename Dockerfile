FROM ruby:2.7-alpine
RUN apk update
RUN apk add --no-cache build-base gcc cmake git
RUN gem update --system && gem update bundler && gem install bundler jekyll:3.9.3
WORKDIR /app
COPY . ./
RUN bundle add webrick
RUN bundle install && bundle update
CMD bundle exec jekyll serve --watch --incremental --force_polling --host 0.0.0.0 -P 4000
