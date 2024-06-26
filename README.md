### XR-MetaRoom

I was the main programmer / architect on this collaborative effort to prototype a WebXR engine for a multiuser VR course taught by my advisor ~2018 (and updated onward). 
This was built due to my advisor's idea / need for a multi-user VR engine for the web.

I touched almost every part of this code-base. 
The commit history shows my specific contributions. 

Students used this engine for their assignments, and for a final project, formed groups to create multi-user interactive VR experiences of their own, presented on a demo day.

![unnamed-3](https://github.com/KTRosenberg/XR-MetaRoom/assets/16908296/3c11cb7d-b22b-4a8f-bad8-136493a2f718)


This is a mirror, and the original version here: https://github.com/futurerealitylab/metaroom-webxr/tree/dev

The most interesting features include fully-dynamic JS script reloading and shader reloading.
i.e. I wrote an integrated shader editor and preprocessor for changing visuals, and hot reloading functionality for all of the main loop scripts. Desktop users and multiple VR users can enter the same running experience.
This allows a desktop developer to do live coding while other users are simultaneously experiencing the changes in VR, enabling a sort of live improvisational and cross-device collaboration or storytelling mechanic.
This was super useful at a time when VR dev tools didn't really let you code while in VR.

Note, this is very quick/researchy code. However, several pieces I'd say are pretty clean.
For example, this lightweight rendering API I was testing:
https://github.com/KTRosenberg/XR-MetaRoom/tree/main/worlds/dynamic_renderer

The shader preprocessor is here:
https://github.com/KTRosenberg/XR-MetaRoom/blob/main/lib/util/webgl_basic_shader_preprocessor.js

Running Example of the shader interface:
[https://github.com/KTRosenberg/XR-MetaRoom/assets/16908296/fe3adebb-de25-481d-b9e3-1ec871759077](https://ktrosenberg.github.io/19graphics/hw6/)


[Launch Instructions](instructions.md)
