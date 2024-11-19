# Angular-Penalty-Soccer-App-Docker

Penalty Soccer Simulation Angular App Dockerization

Wrote Dockerfile, added it to the root of the project directory.

Built the image using docker build -t (my-dockerhub-username)/(my-image-name)

Ran it on my desired localhost port along with the exposed port docker run -d -p (localhost port to run on):(exposed port) (my-dockerhub-username)/(my-image-name)

Pushed the image using docker push (my-dockerhub-username)/(my-image-name)
