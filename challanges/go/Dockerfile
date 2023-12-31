FROM golang:alpine AS builder
WORKDIR /app
COPY . .
RUN go mod init main && go build

FROM scratch
COPY --from=builder /app/main .
CMD ["/main"]
