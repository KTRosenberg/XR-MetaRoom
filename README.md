### XR-MetaRoom

I was the main architect of this prototype WebXR engine for a multiuser VR course taught by my professor ~2018 and updated onward. 
I touched every part of this code-base. My advisor and his idea / need for a multi-user VR engine for the Web 

The most interesting features include fully-dynamic JS script reloading and shader reloading.
i.e. I wrote an integrated shader editor and preprocessor for changing visuals, and hot reloading functionality for all of the main loop scripts. Desktop users and multiple VR users can enter the same running experience.
This allows a desktop developer to do live coding while other users are simultaneously experiencing the changes in VR, enabling a sort of live improvisational and cross-device collaboration or storytelling mechanic.
This was super useful at a time when VR dev tools didn't really let you code while in VR.

Note, this is very quick/researchy code. However, several pieces I'd say are pretty clean.
For example, this lightweight rendering API I was testing:
https://github.com/KTRosenberg/XR-MetaRoom/tree/main/worlds/dynamic_renderer

The shader preprocessor is here:
https://github.com/KTRosenberg/XR-MetaRoom/blob/main/lib/util/webgl_basic_shader_preprocessor.js

The commit history shows specifically what I did.

### Instructions

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
