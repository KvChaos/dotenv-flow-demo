
# dotenv-flow-test

## Why?
This software simply displays dotenv-flow.   Its behavior depends on the value of NODE_ENV prior to the software executing.

## Author
@kvchaos

## Remember .gitignore
Ordinarily, you would want to ensure you have the following in your .gitignore to ensure no .env files get checked in, but that is excluded in this project to ensure all gets checked in; otherwise, this would be a fairly ineffective demonstration.

```
.env
.env.*
```


Value of NODE_ENV | Which files get read
----------------- | --------------------
null or not set | Only .env and .env.local gets read.
development | .env and .env.local get read, then .env.development gets read.    What gets read last wins.
test | .env and .env.local get read, then .env.test gets read.    What gets read last wins.
production | .env and .env.local get read, then .env.production gets read.    What gets read last wins.




## To run in Windows
```
export NODE_ENV=
node main

export NODE_ENV=development
node main

export NODE_ENV=test
node main

export NODE_ENV=production
node main


```

