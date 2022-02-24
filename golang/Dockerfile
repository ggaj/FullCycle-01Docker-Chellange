FROM golang:1.17 as build
WORKDIR /src
COPY . .
RUN go build -o /app .

FROM scratch as bin
COPY --from=build app /
CMD ["/app"]
