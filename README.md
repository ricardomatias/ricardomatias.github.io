# ricardomatias.github.io
my personal website

## TODO

* Fill the project's descriptions
* Add about page
* Add Impressum/blabla to the footer
* Add project with video


## Motion
* Project image main page -> Rotate around Y axis on hover and show the name of the project


## FFMPEG
* Scale down movie: `ffmpeg -i in.mp4 -filter:v scale=780:-1 -c:a copy out-scaled.mp4`
* Adjust gamma: `ffmpeg -i in.mp4 -vf eq=gamma=1.25 -c:a copy out-b.mp4`
