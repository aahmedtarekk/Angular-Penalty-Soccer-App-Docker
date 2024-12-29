This project is aiming to do the following: 

  1. Building an image using:                   docker build -t IMAGE_NAME
  2. Running a container from that image using: docker run -d --name test container -p HOST_PORT:CONTAINER_PORT IMAGE_NAME
  3. Testing the container content using:       curl localhost:HOST_PORT
  4. Pushing the image to dockerhub using:      echo docker_password | docker login -u docker-username (via credentials).
  5. If any of that stages have failed, the rest of the stages won't proceed.

 I have added the Jenkins user to the Docker user group in order for Jenkins to use the docker commands, then did systemctl       command reset the configs of docker and jenkins.
 I have added the credentials of GitHub and Dockerhub to the general credentials of jenkins in order so that Jenkins can use      them later on while logging into the dockerhub and accessing the repository on GitHub.
