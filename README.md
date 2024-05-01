I was the main architect of this prototype WebXR engine for a VR course taught by my professor ~2018.
I touched every part of this code-base.

The most interesting features include fully-dynamic JS script reloading and shader reloading.
i.e. I wrote an integrated shader editor and preprocessor for changing visuals, and hot reloading functionality
enabling a desktop developer to change code while other users are simultaneously in VR, enabling a sort of live improvisational and cross-device
collaboration or storytelling mechanic for quick iteration.

Note, this is very quick/researchy code. However, several pieces I'd say are pretty clean.
For example, this lightweight rendering API I was testing:
https://github.com/KTRosenberg/XR-MetaRoom/tree/main/worlds/dynamic_renderer



* In order to start the backend, you need to execute 'run' or 'run.bat' depending on your OS
* Otherwise, you can call `pm2 stop all` / `pm2 restart all` should you encounter critical errors
* Specify which branch you want to update for submodule in .gitmodules and update it with
```git submodule update --remote```

* Helpful commands
```$./run```
```$./stop```

* * To then restart the server again, type:
```$pm2 reload all```

* * If you want to bring the server logs back on-line to check them after hitting control-c, type:
```$pm2 logs all```

* * If you want the server to run on system startup (tested on Unix based OS) type:
```$./persist```

* * Make sure the submodule is up-to-date
```$git submodule foreach git pull origin master```
