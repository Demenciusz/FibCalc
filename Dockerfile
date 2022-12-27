FROM alpine

WORKDIR /app

COPY main.cpp /app

ENTRYPOINT [ "cpp","/app/main.cpp"]