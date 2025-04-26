⚽ Soccer Penalty Demo Game Deployment
📜 Project Overview
This project demonstrates a Soccer Penalty Demo Game, developed in Angular, dockerized, and fully automated using a CI/CD pipeline with Jenkins, DockerHub, Ansible, and AWS EC2.

🛠 Technology Stack
Angular (Frontend Application)

Docker (Containerization)

Jenkins (CI/CD Pipeline)

DockerHub (Container Registry)

Ansible (Automation & Deployment)

AWS EC2 Instance (Hosting the entire deployment)

🚀 Project Workflow
Application Development

The game is developed using Angular.

Dockerization

A Dockerfile is created to containerize the Angular application.

Source Control

All files (Dockerfile, Jenkinsfile, application code) are pushed to a Git repository.

Continuous Integration via Jenkins

Jenkins pipeline (Jenkinsfile) is triggered when changes are pushed.

Jenkins stages:

Build the Docker image.

Run a temporary container to test the image.

On successful test, push the image to DockerHub using saved credentials.

Continuous Deployment via Ansible

After pushing the image, Jenkins triggers an Ansible Playbook to deploy the app.

Ansible Tasks:

Ensure Docker is properly installed and configured on the target server.

Build the Docker image (optional if pulling).

Run the Docker container from the newly pushed image.

Expose the application on port 3001.

Production Deployment

The full application is deployed on an AWS EC2 Instance.

The app is accessible via the EC2 instance’s public IP at port 3001.

📂 Ansible Playbook Overview
The Ansible playbook automates the deployment:

Remove old Docker sources and packages.

Install the correct Docker CE version.

Build the Docker image (optional based on workspace).

Run a container using the image from DockerHub.

Expose the application internally and externally on the EC2 instance.

Main roles handled by Ansible:

System cleanup

Docker installation

Docker image build/run

Health checking for the running container

🌐 Accessing the Application
After deployment:

Open your browser.

Visit: http://<EC2-Public-IP>:3001

You will see the Soccer Penalty Demo Game running!

🖼️ System Architecture Diagram
pgsql
Copy
Edit
[Git Repo]
    |
    v
[Jenkins Server]
    |
    |--- (Build Image + Push to DockerHub)
    v
[Ansible Playbook on EC2]
    |
    |--- (Deploy Docker Container)
    v
[Soccer Penalty Game Running on EC2 Instance]
🔐 Notes
EC2 Security Groups must allow port 3001 inbound.

DockerHub credentials are securely handled inside Jenkins.

The deployment is fully automated — from code push to live running application!

🎯 Conclusion
This project shows a complete DevOps pipeline in action: Code ➔ Build ➔ Test ➔ Push ➔ Deploy, all hosted in a real-world AWS EC2 environment.
