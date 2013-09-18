repl-co
=======

node repl with yield support

### Example:

```
$ repl-co
> var c = require('mysql-co').createConnection({})
undefined
> (yield c.execute('select unix_timestamp() as time'))[0][0].time + (yield c.execute('select unix_timestamp() as time'))[0][0].time
2758945798
> (yield c.execute('select unix_timestamp() as time'))[0][0].time + (yield c.execute('select unix_timestamp() as time'))[0][0].time
2758945804
```
