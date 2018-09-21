---
layout: info_page
title: Dedicated Servers
---

### Running a Dedicated MegaMek Server 

You can run a dedicated megamek server on your machine. A dedicated server will always be on and players can connect to it at anytime to play games. We advise that you use a static ip address to run a dedicated server. You will want to ensure that any port forwarding is done from your router, if necessary. 

Dedicated servers are usually started from the command line. For a Linux system, you can enter the following command from the directory containing the MegaMek JAR:

```bash
nohup java -XmxXXXXm -jar MegaMek.jar -dedicated -port XXXX -password somepass &
```


The `-dedicated` arguments is required in order to run the dedicated server. The `-port` argument specifies the port where your server will look for connections. If omitted, the server will default to port 2346. The `-password` argument is not necessary. If added, it will prevent changes to the game options without a password. Password limitation will not prevent users from connecting to your server. You can also save the port number and password information in `mmconf/clientsettings/xml` under the tags `LastConnectAddr` and `LastServerPass` and the server will default to this information. The `-Xmx` is an argument to java that specifies how much memory the server is allowed to use.  The `nohup` command prevents the server from being disrupted. You can run multiple dedicated servers with this same command, but you will need to run each one on a different port number. 

To start a dedicated server on Mac OSX, you can use these same commands but you must download the Linux version of the program to have access to the JAR files. On Windows, it should also be possible to run the dedicated server by running MegaMek.exe from the DOS prompt with the `-dedicated`, `-port`, and `-password` options.  

If you would like a graphical interface for dedicated server management, you can also try out [Astech](https://github.com/seem8/astech) on Linux/Mac systems. This program is not part of the MegaMek suite, but it does seem nifty. 
