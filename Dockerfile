FROM ruby:3.4-alpine
RUN apk update
RUN apk add --no-cache build-base gcc cmake git
RUN gem install bundler -v 4.0.3
WORKDIR /app
COPY . ./
RUN bundle install
CMD bundle exec jekyll serve --watch --incremental --force_polling --host 0.0.0.0 -P 4000
