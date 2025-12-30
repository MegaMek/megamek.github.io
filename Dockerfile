FROM ruby:3.1-alpine
RUN apk update && apk add --no-cache build-base gcc cmake git
RUN gem install bundler
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . ./
EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--force_polling", "--livereload"]