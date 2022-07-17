FROM golang:1.16-alpine as spam

WORKDIR /spam

COPY go.mod ./
RUN go mod download
COPY . .
RUN go build -o spam ./main.go

EXPOSE 3000

CMD [ "./spam" ]