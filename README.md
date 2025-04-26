⚽ Soccer Penalty Demo Game – CI/CD Pipeline
📜 Project Overview
This project demonstrates a complete DevOps pipeline for a Soccer Penalty Demo Game developed with Angular.
The application is dockerized, automatically built and tested with Jenkins, deployed via Ansible, and hosted on an AWS EC2 instance.
We also integrated Prometheus and Grafana for monitoring.

🛠 Technology Stack
Angular (Frontend Application)

Docker (Containerization)

Jenkins (CI/CD Automation)

DockerHub (Image Registry)

Ansible (Deployment Automation)

AWS EC2 Instance (Production Hosting)

Prometheus (Metrics Monitoring)

Grafana (Visualization Dashboard)

🚀 Project Workflow
Source Code Management

Application source code (including Dockerfile and Jenkinsfile) is maintained in a GitHub repository.

Continuous Integration with Jenkins

Jenkins pulls the latest code.

Jenkins builds a Docker image using the Dockerfile.

A temporary container is spun up to test the image.

If the test is successful, Jenkins pushes the image to DockerHub.

Jenkins triggers an Ansible Playbook for deployment.

Continuous Deployment with Ansible

Ansible playbook ensures Docker is properly installed on the EC2 instance.

It builds (or pulls) the Docker image.

It runs the Docker container and exposes the application on port 3001.

Production Hosting

The final running container hosts the Angular app on an AWS EC2 instance.

Monitoring

Prometheus scrapes system metrics via Node Exporter.

Grafana visualizes these metrics into real-time dashboards.

📂 Ansible Playbook Details
The Ansible playbook:

Removes old Docker packages and sources.

Installs Docker CE and all dependencies.

Builds the Docker image from the Jenkins workspace.

Runs a Docker container (test-container) mapping port 3001 to 80 internally.

Ensures the container is started and healthy.

🌐 How to Access the Application
After deployment:

Open your browser.

Visit:
http://<Your-EC2-Public-IP>:3001

Enjoy the Soccer Penalty Demo Game!

📊 Monitoring with Prometheus and Grafana
Prometheus collects metrics like CPU, Memory, Disk, and Network usage from the EC2 instance using Node Exporter.

Grafana visualizes these metrics into clean, interactive dashboards.

🖼️ Architecture Diagram
scss
Copy
Edit
[GitHub Repo]
      ↓
[Jenkins CI/CD Server]
      ↓
(Build Image → Test Container → Push Image → Trigger Ansible)
      ↓
[Ansible Playbook on EC2]
      ↓
(Docker Container Runs Angular App)
      ↓
[Prometheus + Grafana Monitoring]
🛡️ Final Notes
EC2 Security Group allows inbound traffic on port 3001.

DockerHub credentials are securely managed inside Jenkins.

The entire flow from code commit to live deployment is fully automated.

Prometheus and Grafana are deployed for real-time server and application health monitoring.

🎯 Conclusion
This project showcases an end-to-end CI/CD DevOps pipeline integrated with monitoring, all running on a real AWS EC2 instance — providing a hands-on, production-like environment.
