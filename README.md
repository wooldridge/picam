# picam

Simple webcam for Raspberry Pi. Capture photos and serve them.

# Hardware

Raspberry Pi 2 Model B

https://www.raspberrypi.com/products/raspberry-pi-2-model-b/

Raspberry Pi Camera Rev 1.3

<img src="https://raw.githubusercontent.com/wooldridge/picam/master/picam_hardware.jpg" alt="picam_hardware" width="500px" />

## Software

Raspian GNU/Linux 8 (jessie)

Node v10.24.1

npm 6.14.12

## Install Dependencies
```
cd picam
npm install
```

## Capture Images
```
node capture.js
```

## Serve Images
```
node server.js
```

## Access Images

http://HOSTNAME_OR_IP:3000/sorted

http://HOSTNAME_OR_IP:3000/latest
