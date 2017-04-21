# place

April Fools 2017, for Clones (2017)

## Installation

Install the plugin itself.

```bash
cd ~/src/place
python setup.py build
sudo python setup.py develop
```

Then, add the plugin to your ini file:

```diff
[DEFAULT]
-plugins = thebutton, robin
+plugins = thebutton, robin, place

+place_redis_url = redis://localhost:6380/
```

Then, make the ini file:

```bash
sudo make ini
```

Then, copy the upstart scripts:

```bash
sudo cp ~/src/place/upstart/* /etc/init/
```

Finally, you'll need redis running.  You can run it in the background or in a
screen session, or set up some fancy upstart stuff if you're crazy.

```bash
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
```

To start a screen session, run:

```bash
screen -S redis
```

Then run:

```bash
src/redis-server --port 6380
```

To exit screen, press `CTRL + A` and then press `D`

## Restoring the Board

In case redis needs to be restarted or gets cleared for whatever reason, you
can re-load the board from Cassandra:

```python
from reddit_place.lib import restore_redis_board_from_cass
restore_redis_board_from_cass()
```
