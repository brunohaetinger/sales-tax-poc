# Sales Tax PoC


## Getting Started

### First time:

Copy the `initial_db.json` file to have an initial example.

```sh
cp initial_db.json src/db.json
```

### Running

Watching files:
    
```sh
bun run nodemon
```


Or simply:
```sh
bun run src/index.ts
```

### Executing API requests

Inside `requests/` folder there are simple `.sh` script to call localhost endpoint and request data.

Example:
```sh
./requests/sell.sh 3 2021-09-11 SC

./requests/getSaleInfo.sh 2
```