# grpc-test

## part 0 call service

- **start**: `yarn start`
- **rest api**: http://127.0.0.1:4500/?msg=whatever
- **gRPC**:
  1. connect: `yarn call`
  2. call:

    ```
    client.[method]({your-data}, printReply)
    ```

## part 1 Hello World

- 提供 rest api `GET` echo
- 提供 gRPC method `hw` echo

## part 2 加減乘除

- 提供 gRPC method `add`
- 提供 gRPC method `sub`
- 提供 gRPC method `multi`
- 提供 gRPC method `divi`