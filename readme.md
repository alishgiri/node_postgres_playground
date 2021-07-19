## Redis
- In-memory data structure store
- Memory lookups are fast
- redis is a network server
- no indexes

## Redis & Docker

##### Create Redis
```docker run --name redis-playground -p 16379:6379 -d redis```

##### Connect to Redis
```docker run -it --link redis-playground --rm redis redis-cli -h redis -p 6379```


## Some of the Data Types
- String *(max length limit is 512)*
    - ```SET user:1:username alish```
    - ```GET user:1:username```
- Hashes
    - ```HMSET user:1 first_name Alish last_name Giri```
    - ```HGETALL user:1```
- Lists
    - ```lpush user:1:profile_views 5```
        -  ```lpush user:1:profile_views 10```
    - ```lrange user:1:profile_views 0 -1```
        - ```lrange user:1:profile_views start_index end_index```
- Sets *(similar to list but do not allow duplicates)*
    - ```sadd post:1:users 1 2```
        - ```sadd post:1:users 1``` # this would be discarded as 1 is already present
    - ```smembers post:1:users```
- Sorted sets
    - ```ZADD logins 550 1``` # use epoch timestamp instead of 550
        - ```ZADD logins 600 4```
    - ```ZRANGE logins 0 -1 WITHSCORES```
    - ```ZREVRANGE logins 0 -1``` # reverse arrange
- more data-types are available...

NOTE: Redis do not have **Integer** type so it is stored as **String**.
