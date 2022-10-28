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


# To Do
- v2
    1. Factory should not "new Product(params...)", but "new Iphone12()"
        2. Should only select, not pass any parameter
    2. Should add "specification"  pattern
    3. Code should be dynamic
    4. New branch for `builder` pattern
- v3
    1. [x] Create Spec for State and Year, not for Prodcut or Price, because there would be TOO many.
    2. [x] State will call a Service to get that Tax Value
    3. [x] Service will call State factory when needed
    4. [x] Each new year, create a new class Or state, example: RS2023, that will contain the tax.
    5. [x] Price will be inside Product
    6. [x] If we need to add new tax, we could change just:
        1. Create new State class
        2. Add a line at StateFactory
    7. [x] On the ddd-builder branch, we can use Factory + Builder together
- Missing
    - [ ] How to use effectively Specification?
    - [ ] TaxService being called by Sale.
        - Tax are different by category, it's more close to BR instead of US tax system