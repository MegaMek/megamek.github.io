FROM ruby:2.7-alpine
WORKDIR /app
COPY . ./
RUN apk update
RUN apk add --no-cache build-base gcc cmake git
RUN gem update --system && gem update bundler && gem install bundler jekyll:3.9.3
RUN echo "$PWD"
RUN bundle add webrick
RUN bundle install && bundle update
RUN bundle exec jekyll --version
EXPOSE 4000 80
CMD bundle exec jekyll serve --watch --incremental --host 0.0.0.0 -P 4000
