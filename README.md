# node-shared-modules
An example showing docker volume and node app container benefits
-------

#### Overview:
The example shows a data container that will install npm modules in it's image. When it starts up, it bind mounts to a persistent data volume and then is burned. The entry point and node modules are persistent to the data volume and the node containers can mount to this for resources.

#### Usage:
```
$ docker-compose up
Creating volume "nodesharedmodules_deps" with local driver
Creating depscontainer
Creating app2
Creating app1
Attaching to depscontainer, app2, app1
depscontainer    | node_modules
depscontainer    | package.json
depscontainer    | server.js
depscontainer exited with code 0
app1             | /app/data
app2             | /app/data
```
