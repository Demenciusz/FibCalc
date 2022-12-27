FROM alpine

WORKDIR /app

COPY main.cpp /app
RUN apk -U upgrade

ENTRYPOINT [ "cpp","main.cpp"]