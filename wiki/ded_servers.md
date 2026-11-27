---
layout: info_page
title: Dedicated Servers
---

### Running a Dedicated MegaMek Server

#### The easy way: Docker

MegaMek is published as a [Docker image](https://github.com/orgs/MegaMek/packages/container/package/megamek) for Linux, on amd64 and arm64. It has Java built in and starts a dedicated server on port 2346. A new image is built for every release.

```bash
docker run -d --pull always -p 2346:2346 -v ./userdata:/app/userdata ghcr.io/megamek/megamek:latest
```

`--pull always` fetches the current image each time. Without it, Docker reuses any copy you pulled before, and `latest` can be an old release.

The `userdata` folder holds your custom units, maps and other user files. Change `./userdata` to wherever you want them kept.

Pick the version with the tag at the end of the image name:

- `latest` or `core`: the newest Core release
- `experimental`: the newest Experimental release
- A version such as `v0.51.01.14`: that exact release. Every release has its own tag

Players must run the same MegaMek version as the server. For a game that runs for weeks, pin a version tag instead of `latest`, so an update doesn't lock your players out.

To build the image yourself, see the [megamek-docker-image](https://github.com/MegaMek/megamek-docker-image) repository.

#### Running it with Java

You can run a dedicated MegaMek server on your machine. A dedicated server will always be on and players can connect to it at anytime to play games. We advise that you use a static ip address to run a dedicated server. You will want to ensure that any port forwarding is done from your router, if necessary.

Dedicated servers are usually started from the command line. On a Linux system, you can enter the following command from the directory containing the MegaMek JAR:

```bash
nohup java -XmxXXXXm -jar MegaMek.jar -dedicated -port XXXX -password somepass &
```


The `-dedicated` argument is required in order to run the dedicated server. The `-port` argument specifies the port where your server will look for connections. If omitted, the server will default to port 2346. The `-password` argument is not necessary. If added, it will prevent changes to the game options without a password. Password limitation will not prevent users from connecting to your server. You can also save the port number and password information in `mmconf/clientsettings.xml` under the tags `LastConnectAddr` and `LastServerPass` and the server will default to this information. The `-Xmx` is an argument to java that specifies how much memory the server is allowed to use. The `nohup` command prevents the server from being disrupted. You can run multiple dedicated servers with this same command, but you will need to run each one on a different port number.

On macOS you can use the same commands. The `.tar.gz` archive is the same for every system, and `MegaMek.jar` is in its top folder. On Windows, you can also run `MegaMek.exe` from the Command Prompt with the `-dedicated`, `-port`, and `-password` options.

If you would like a graphical interface for dedicated server management, you can also try out [AsTech](https://github.com/seem8/astech) on Linux/Mac systems. This program is not part of the MegaMek suite, but it does seem nifty.
