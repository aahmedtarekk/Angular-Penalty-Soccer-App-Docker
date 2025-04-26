pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "ahmedtarekk/angular-soccer-depi-git-jenkins:latest"
        CONTAINER_PORT = "80"
        HOST_PORT = "3001"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Docker and Ansible') {
            steps {
                script {
                    // Purge any conflicting packages
                    sh 'sudo apt-get remove --purge -y containerd.io containerd || true'
                    sh 'sudo apt-get autoremove -y || true'
        
                    // Update package list
                    sh 'sudo apt-get update -y'
        
                    // Install Docker dependencies
                    sh 'sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common'
        
                    // Add Docker’s GPG key
                    sh 'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /usr/share/keyrings/docker-archive-keyring.gpg > /dev/null'
        
                    // Add Docker’s official repository
                    sh 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null'
        
                    // Install Docker
                    sh 'sudo apt-get update -y && sudo apt-get install -y docker-ce docker-ce-cli containerd.io'
        
                    // Ensure Docker service is running
                    sh 'sudo systemctl enable docker && sudo systemctl start docker'
        
                    // Install Ansible
                    sh 'sudo apt-get install -y ansible'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
