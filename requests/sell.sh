PROD_PRICE_ID=$1
DATE=$2
STATE_ID=$3
curl -d '{"prodPriceId": '$PROD_PRICE_ID', "date":"'$DATE'", "stateId": "'$STATE_ID'"}' -H "Content-Type: application/json" -X POST http://localhost:3000/sell