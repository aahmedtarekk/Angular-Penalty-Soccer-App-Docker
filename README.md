# ⚽ Soccer Penalty Demo Game

This project is a **Soccer Penalty Game** built with **Angular**, packaged using **Docker**, and deployed using a full **CI/CD pipeline** powered by **Jenkins** and **Ansible**.

---

## 📦 Tech Stack

- **Frontend**: Angular
- **CI/CD**: Jenkins
- **Containerization**: Docker
- **Image Registry**: Docker Hub
- **Deployment Automation**: Ansible

---

## 🚀 Project Workflow Overview

### 1. **Development**
- The game is developed using Angular and resides in this Git repository.
- Includes a `Dockerfile` to build the Angular app into a lightweight production image.

### 2. **Dockerization**
- The Angular application is dockerized using a production-ready `Dockerfile`.
- The resulting image contains a fully packaged Angular app served via NGINX.

### 3. **CI/CD Pipeline (Jenkins)**
- A `Jenkinsfile` automates the entire lifecycle:
  - ✅ **Builds Docker Image**
  - ✅ **Runs a temporary container for testing**
  - ✅ **Pushes the tested image to Docker Hub**
  - ✅ **Cleans up any test containers**
  - ✅ **Triggers Ansible playbook for final deployment**

### 4. **Image Registry**
- Docker images are securely pushed to [Docker Hub](https://hub.docker.com/) using Jenkins credentials.

### 5. **Deployment with Ansible**
- An Ansible Playbook automates the deployment process:
  - ✅ Removes any broken or old Docker installations
  - ✅ Installs and configures Docker CE from the official Docker repositories
  - ✅ Builds the Docker image again locally (to ensure consistency)
  - ✅ Runs the container, mapping the Angular app to port `3001`
  - ✅ Ensures the container runs detached and always restarts on failure

---

## 📁 Repository Structure

